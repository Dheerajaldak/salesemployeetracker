// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const CaseStudies = [
//   {
//     label: 'CASE STUDY',
//     title: 'Mastering Sales Automation',
//     image: 'https://tse4.mm.bing.net/th/id/OIP.ObPHeqQlK7d39HDbo6w2jQHaJQ?cb=iwc1&rs=1&pid=ImgDetMain',
//     description: 'Learn how automation tools can streamline your sales processes and reduce manual tasks by 40%.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'Top 5 CRM Integrations for 2025',
//     image: 'https://source.unsplash.com/800x600/?technology,innovation',
//     description: 'We break down the most effective CRM integrations to help your team stay connected and efficient.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'Real-Time Analytics for Smarter Selling',
//     image: 'https://source.unsplash.com/800x600/?car,ai',
//     description: 'Discover how to use live dashboards and metrics to monitor performance and pivot strategies on the fly.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'Boost Conversions with AI-Powered Insights',
//     image: 'https://source.unsplash.com/800x600/?media,streaming',
//     description: 'Leverage artificial intelligence to analyze buyer behavior and personalize your sales pitch.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'How to Build a Scalable Sales Funnel',
//     image: 'https://source.unsplash.com/800x600/?shoes,shopping',
//     description: 'Step-by-step guide to designing a sales funnel that adapts to growth and increases your close rate.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'Tracking KPIs That Actually Matter',
//     image: 'https://source.unsplash.com/800x600/?tech,teamwork',
//     description: 'Identify and focus on the sales metrics that truly impact your revenue and growth trajectory.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: '300% Growth Using a Sales Tracker',
//     image: 'https://source.unsplash.com/800x600/?success,startup',
//     description: 'See how one startup tripled their revenue in 6 months with the right tracking tools and habits.',
//   },
//   {
//     label: 'CASE STUDY',
//     title: 'Choosing the Right Sales Tracker Tool',
//     image: 'https://source.unsplash.com/800x600/?data,dashboard',
//     description: 'A comparison of the top tools in the market — features, pricing, pros, and cons.',
//   },
// ];

// export default function Cards2() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="font-sans text-gray-800 mt-10">
//       {/* === HERO SECTION WITH BLOG CONTENT === */}
//        <section className="relative w-full h-[80vh] overflow-hidden group">
//     <div className="absolute top-0 right-0 w-1/2 h-full z-10 group-hover:pointer-events-none" />
//     <div className="flex w-full h-full transition-all duration-700 ease-in-out group-hover:flex">
//       {/* === LEFT CONTENT === */}
//       <div className="w-0 group-hover:w-1/2 h-full bg-gray-100  flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-y-auto">
//         <h2 className="text-sm font-semibold text-blue-900 uppercase mb-2">
//           SALES TRACKING
//         </h2>
//         <h1 className="text-3xl lg:text-4xl font-bold mb-9 leading-tight text-blue-950">
//           Real-time insights that drive revenue
//         </h1>

//         <p className="text-base leading-tight mb-3  text-gray-800 ">
//           In today’s competitive landscape, sales success is no longer about working harder—it's about working smarter.
//           Our Sales Tracker platform delivers real-time analytics, intelligent automation, and actionable insights to help sales teams perform at their peak.
//         </p>
//         <p className="text-base leading-relaxed mb-3  ">
//           From startups to large enterprises, our users consistently report improved forecasting accuracy, faster decision-making,
//           and a measurable boost in team productivity. Whether you're tracking KPIs or optimizing your funnel,
//           our solution adapts to your workflow—giving you the confidence to scale efficiently.
//         </p>

//         <button className="mt-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105">
//           Start Free Trial
//         </button>
//       </div>

//       {/* === RIGHT IMAGE === */}
//       <div className="w-full group-hover:w-1/2 h-full transition-all duration-700 ease-in-out">
//         <img
//           src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
//           alt="Sales Tracker Dashboard"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   </section>

//       {/* === CASE STUDIES SECTION === */}
//       <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           Case Studies
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {CaseStudies.map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-black"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 0.97 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <motion.img
//                 src={item.image}
//                 alt={`Case Study: ${item.title}`}
//                 className="absolute w-full h-full object-cover"
//                 initial={{ opacity: 1, x: 0 }}
//                 animate={hovered === index ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
//               <motion.div
//                 className="absolute left-6 right-6 text-white z-10"
//                 initial={{ top: '65%', translateY: '0%' }}
//                 animate={
//                   hovered === index
//                     ? { top: '50%', translateY: '-50%' }
//                     : { top: '65%', translateY: '0%' }
//                 }
//                 transition={{ duration: 0.4, ease: 'easeOut' }}
//               >
//                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 mt-1">
//                   {item.label}
//                 </p>
//                 <h2 className="text-lg font-bold drop-shadow mb-3 leading-snug">
//                   {item.title}
//                 </h2>
//                 {item.description && (
//                   <motion.p
//                     className="text-sm leading-relaxed drop-shadow text-gray-200"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={hovered === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {item.description}
//                   </motion.p>
//                 )}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Cards2() {
  const [blogs, setBlogs] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/api/blogs`); // Adjust if your backend URL is different
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message || 'Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="font-sans text-gray-800 mt-10">
      {/* === HERO SECTION WITH BLOG CONTENT === */}
      {/* ... (Your existing hero section code) ... */}

      {/* === CASE STUDIES SECTION === */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id} // Use the blog ID as the key
              className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(blog.id)} // Use blog ID for hovered state
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={blog.image_url} // Assuming you enter full URLs in the admin
                alt={blog.title}
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 1, x: 0 }}
                animate={hovered === blog.id ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
              <motion.div
                className="absolute left-6 right-6 text-white z-10"
                initial={{ top: '65%', translateY: '0%' }}
                animate={
                  hovered === blog.id
                    ? { top: '50%', translateY: '-50%' }
                    : { top: '65%', translateY: '0%' }
                }
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 mt-1">
                  {blog.label_text} {/* Use label_text as per your backend */}
                </p>
                <h2 className="text-lg font-bold drop-shadow mb-3 leading-snug">
                  {blog.title}
                </h2>
                {blog.description && (
                  <motion.p
                    className="text-sm leading-relaxed drop-shadow text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hovered === blog.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {blog.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}