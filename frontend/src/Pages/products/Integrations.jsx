import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Target } from 'lucide-react';

const Target2 = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardsData = [
    {
      title: "Streamline Your Workflow",
      description:
        "Create targets on orders, clients, tasks, forms, and photos to ensure every aspect of your field operations is accounted for.",
    },
    {
      title: "Assign Targets with Precision",
      description:
        "Easily assign targets to teams or individuals, tailoring them to specific needs and responsibilities.",
    },
    {
      title: "Flexible Timeframes",
      description:
        "Set targets for daily, weekly, monthly, or quarterly durations, aligning them with your business goals and timelines.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* SECTION 1: Hero Section */}
      <section
        className="relative flex items-center justify-center p-10 lg:p-20 bg-cover bg-center min-h-screen bg-gray-100"
        style={{ backgroundImage: `url('/target.jpeg')` }} // ✅ Fixed here
      >
        <div className="absolute inset-100  bg-opacity-20 z-0" />
        <div className="relative z-10 text-center space-y-6 max-w-2xl text-white">
          <h2 className="text-sm font-semibold text-blue-300 uppercase">
            Target Management
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-50 ">
            Set Targets, Monitor Progress & Plan Ahead!
          </h1>
          <ul className="space-y-3 text-lg text-gray-50">
            <li>✓ Define targets for teams or individuals</li>
            <li>✓ Track progress in real-time experience</li>
            <li>✓ Multiple target options & timelines</li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105">
            Get Free Trial
          </button>
        </div>
      </section>

      {/* SECTION 2: Benefits with Animated Black Dots Background */}
      <section className="relative w-full bg-gray-100 flex items-center justify-center  min-h-screen">
        {/* Animated Black Dots Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            const size = Math.floor(Math.random() * 12) + 4;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 3 + 2; // 2–5s loop
            const delay = Math.random() * 2; // 0–2s offset
            return (
              <motion.span
                key={i}
                className="absolute bg-blue-900 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  opacity: 0.8,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </div>

        {/* Centered Text Content */}
        <div
          className="relative z-10 max-w-2xl text-center space-y-4"
          data-aos="fade-up"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-20   tracking-wide leading-tight fonts-[poppins]">
            Benefits for Field Executives
          </h1>
          <ul className="space-y-3 text-lg text-gray-800">
            <li>✓ Streamlined Task Management: View all assigned targets</li>
            <li>✓ Stay On Track: Leverage the intuitive dashboard</li>
            <li>✓ Identify Areas for Growth: Gain valuable insights</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition font-medium">
            See what we do
          </button>
        </div>
      </section>

      {/* SECTION 3: Benefits for Administrators */}
      <motion.section
        className="p-8 bg-gray-100 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-black mb-20   tracking-wide leading-tight fonts-[poppins]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Benefits for Administrators
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 max-w-4xl w-full">
          {cardsData.map((card, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                className="bg-white p-13 rounded-2xl shadow-md"
                initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: -0.1 + index * 0.1, duration: 1.0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#000",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              >
                <h2
                  className={`text-3xl font-semibold mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-black'
                  }`}
                >
                  {card.title}
                </h2>
                <p className={isHovered ? 'text-white' : 'text-gray-700'}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Target2;
