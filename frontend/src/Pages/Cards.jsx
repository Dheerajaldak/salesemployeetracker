import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Cards.css'; // Keep your existing CSS for core card styling
import { FaArrowRight } from 'react-icons/fa'; // Example icon

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  disabled: {
    opacity: 0,
    y: -30, // Slide upwards when hovered
    transition: { duration: 0.4 },
  },
};

const subDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

const cardData = [
  {
    title: 'SALES TRACKING OVERVIEW',
    description: 'Keep track of your sales data in real-time.',
    subDescription: 'Our sales tracking platform provides live updates of your sales performance, helping you stay ahead of targets.',
  },
  {
    title: 'CUSTOM REPORTS',
    description: 'Create reports tailored to your needs.',
    subDescription: 'Generate detailed sales reports based on custom parameters like date range, region, or product category.',
  },
  {
    title: 'INTEGRATED ANALYTICS',
    description: 'Analyze your sales performance.',
    subDescription: 'Our platform integrates advanced analytics tools to help you understand your sales trends and make data-driven decisions.',
  },
  {
    title: 'TEAM COLLABORATION',
    description: 'Collaborate on sales strategies in real-time.',
    subDescription: 'Share insights, track team progress, and discuss sales tactics with your team members directly within the platform.',
  },
  {
    title: 'REAL-TIME DASHBOARD',
    description: 'Get instant access to key metrics.',
    subDescription: 'Our real-time dashboard shows key metrics like total sales, top-performing products, and sales by region.',
  },
  {
    title: 'CLOUD-BASED PLATFORM',
    description: 'Access your sales data anywhere, anytime.',
    subDescription: 'Being cloud-based, our platform allows you to access your sales data from any device, ensuring you’re always connected.',
  },
];

function Cards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="Cards flex flex-wrap justify-center gap-6 max-w-9xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-white shadow-2xl">
      {cardData.map((card, index) => (
        <motion.div
          className="card bg-gray-900 rounded-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33%-12px)] xl:w-[calc(33%-12px)] shadow-md flex flex-col justify-between min-h-[250px] p-6"
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="card-header mb-2 min-h-[24px]">
            <span className="card-title text-lg font-semibold uppercase">{card.title}</span>
          </div>

          {/* Description */}
          <motion.div
            className="card-description mt-2 transition-opacity duration-400 ease-out"
            initial="hidden"
            animate={hoveredIndex === index ? 'disabled' : 'visible'}
            variants={descriptionVariants}
          >
            <h2 className="text-xl font-bold mb-5">{card.description}</h2>
          </motion.div>

          {/* Sub-description */}
          {hoveredIndex === index && (
            <motion.div
              className="card-sub-description mb-2 mt-[-20px] opacity-0 transform-translate-y-[-40px] text-sm transition-opacity duration-200 ease-out"
              initial="hidden"
              animate="visible"
              variants={subDescriptionVariants}
            >
              <p>{card.subDescription}</p>
            </motion.div>
          )}

          <div className="card-footer mt-auto flex justify-between items-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white bg-accent py-2 px-4 rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700"
            >
              Learn More
              <FaArrowRight className="text-sm text-blue-700" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Cards;
