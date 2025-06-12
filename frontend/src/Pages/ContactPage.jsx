import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    setErrors({});

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = {};
      if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
      }

      console.log("Backend Response:", data);
      console.log("Response OK:", response.ok);
      console.log("Response Status:", response.status);

      if (response.ok && data?.message) {
        // Check for data?.message for success
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (response.status === 400 && data?.errors) {
        setSubmissionStatus("error");
        const backendErrors = {};
        data.errors.forEach((error) => {
          backendErrors[error.path] = error.msg;
        });
        setErrors(backendErrors);
      } else {
        setSubmissionStatus("error");
        setErrors({ general: data?.error || "An unexpected error occurred." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setErrors({ general: "Network error. Please try again later." });
    }
  };

  return (
    <div className="bg-gray-100 py-20 px-5 sm:px-10">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you. Whether you have a question about our
          services, need assistance, or just want to provide feedback, we're
          here to help.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 shadow-xl rounded-xl">
        {/* Left Contact Info */}
        <div className="bg-black text-white p-4 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-lg text-gray-300">
              Reach out to us and we’ll respond as soon as we can.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-md font-semibold">India Office</h4>
              <p className="text-gray-300">
                Raheja Mindspace, Survey No.64,
                <br />
                Building Number 9, 13th Floor,
                <br />
                Madhapur, Hyderabad, Telangana 500081
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold">USA Office</h4>
              <p className="text-gray-300">
                8751 Collin McKinney Pkwy,
                <br />
                Suite 1102, McKinney, TX 75070
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold">Email</h4>
              <p>
                <a
                  href="mailto:info@visyscloudtech.com"
                  className="text-indigo-400 hover:underline"
                >
                  info@visyscloudtech.com
                </a>
                <br />
                <a
                  href="mailto:helpdesk@visyscloudtech.com"
                  className="text-indigo-400 hover:underline"
                >
                  helpdesk@visyscloudtech.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold">Phone</h4>
              <p className="text-gray-300">
                +91 9392014678
                <br />
                +1 - 469-214-4477
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-white p-4 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-base font-medium text-gray-700 capitalize mb-1"
                >
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  className={`block w-full h-12 px-4 py-3 text-base border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData[field]}
                  onChange={handleChange}
                  required={field !== "subject"}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className={`block w-full px-4 py-3 text-base border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center items-center px-6 py-3 text-base font-semibold rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                  submissionStatus === "loading" ? "cursor-wait opacity-70" : ""
                }`}
                disabled={submissionStatus === "loading"}
              >
                {submissionStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {submissionStatus === "success" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            {submissionStatus === "error" && errors.general && (
              <p className="text-red-600 text-sm mt-2">{errors.general}</p>
            )}
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Our India Location
        </h3>
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.149538995778!2d78.38742757443397!3d17.44699888335499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d629d3838b%3A0x8c30899c364b311!2sRaheja%20Mindspace%20-%20Building%20No%209!5e0!3m2!1sen!2sin!4v1716193837988!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
