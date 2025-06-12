const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const app = express();
const multer = require('multer');
const PORT = process.env.PORT ;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// JWT Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};


// Health Check
app.get('/', (req, res) => {
  res.send('🚀 Backend is running.');
});

// Admin Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM sales_tracker.admins WHERE username = $1', [username]);
    const admin = result.rows[0];

    if (!admin || password !== admin.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});
const upload = multer({ storage: multer.memoryStorage() });

// AWS S3 Configuration
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Get All Blogs
app.get('/admin/api/blogs', async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, label_text, description, image_url, admin_name, created_at FROM sales_tracker.blogs ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get blogs error:', err);
    res.status(500).send("Server Error");
  }
});

// Create Blog
app.post('/admin/api/blogs', upload.single('image'), async (req, res) => {
  try {
    const { title, label_text, description } = req.body;
    let imageUrl = null;

    if (req.file) {
      const fileName = `blogs/${Date.now()}-${req.file.originalname}`;
      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,

      };

      await s3Client.send(new PutObjectCommand(uploadParams));
      imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    const result = await pool.query(
      `INSERT INTO sales_tracker.blogs (title, label_text, description, image_url)
       VALUES ($1, $2, $3, $4)
       RETURNING id, title, label_text, description, image_url`,
      [title, label_text, description, imageUrl]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Create blog error:', err);
    res.status(400).json({ error: err.message });
  }
});

// Update Blog with File Upload
app.put('/admin/api/blogs/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, label_text, description } = req.body;
    let imageUrl = req.body.image_url; // Retain existing URL if no new file

    if (req.file) {
      const fileName = `blogs/${Date.now()}-${req.file.originalname}`;
      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,

      };

      await s3Client.send(new PutObjectCommand(uploadParams));
      imageUrl = `http://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    const result = await pool.query(
      `UPDATE sales_tracker.blogs SET title = $1, label_text = $2, description = $3, image_url = $4
       WHERE id = $5
       RETURNING id, title, label_text, description, image_url`,
      [title, label_text, description, imageUrl, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Update blog error:', err);
    res.status(400).json({ error: err.message });
  }
});

// Delete Blog
app.delete('/admin/api/blogs/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM sales_tracker.blogs WHERE id = $1 RETURNING id', [req.params.id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    console.error('Delete blog error:', err);
    res.status(400).json({ error: err.message });
  }
});
const HOST = process.env.HOST ;

// Start Server
app.listen(PORT, () => {
console.log(`✅ Server running at http://localhost:${PORT}`);
});
