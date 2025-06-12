import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const faqData = [
  {
    question: 'What is SalesTracker?',
    answer: 'SalesTracker is a comprehensive platform designed to help businesses track, manage, and analyze their sales data effectively...',
  },
  {
    question: 'How much does SalesTracker cost?',
    answer: 'We offer various pricing plans to suit different business needs...',
  },
  {
    question: 'Can I integrate SalesTracker with other tools?',
    answer: 'Yes, SalesTracker offers seamless integration with several popular business tools...',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for new users...',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Absolutely. You can cancel your subscription at any time through your account settings...',
  },
  {
    question: 'Does SalesTracker support team collaboration?',
    answer: 'Yes, SalesTracker is built for teams. You can invite team members, assign roles...',
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const contentVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md mb-4"
      animate={isOpen ? 'open' : 'closed'}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5 text-left font-semibold text-blue-950"
        onClick={toggleOpen}
      >
        <span className="text-base md:text-lg">{faq.question}</span>
        <motion.span variants={iconVariants} transition={{ duration: 0.3 }}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-lg md:text-xl" />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            className="px-4 md:px-6 pb-4"
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const ThreeDBackground = () => (
  <Canvas className="absolute inset-0 z-0">
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <RotatingCube />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

const FAQsPage = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 md:px-10 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/LocationTracking2.jpg')" }}
    >
      {/* Optional 3D background (enable if needed) */}
      {/* <ThreeDBackground /> */}

      <motion.div
        className="z-10 w-full max-w-2xl md:max-w-4xl bg-gray-100 bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div>
          {faqData.map((faq, idx) => (
            <FaqItem key={idx} faq={faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQsPage;
