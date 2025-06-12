import React from "react";
import {
  FaLightbulb,
  FaBullseye,
  FaDollarSign,
  FaCogs,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    icon: <FaBullseye className="text-black text-base" />,
    title: "Lead Generation",
    text: "Identify and attract potential customers to start the sales funnel.",
    number: "01",
  },
  {
    icon: <FaDollarSign className="text-black text-base" />,
    title: "Opportunity Tracking",
    text: "Monitor prospects and deals as they move through the pipeline.",
    number: "02",
  },
  {
    icon: <FaCogs className="text-black text-base" />,
    title: "Automated Workflows",
    text: "Streamline repetitive tasks to improve efficiency and accuracy.",
    number: "03",
  },
  {
    icon: <FaChartBar className="text-black text-base" />,
    title: "Performance Analytics",
    text: "Track sales KPIs with real-time dashboards and insights.",
    number: "04",
  },
  {
    icon: <FaLightbulb className="text-black text-base" />,
    title: "Sales Forecasting",
    text: "Predict future revenue and trends for strategic planning.",
    number: "05",
  },
];

const radius = 320;
const centerX = 280;
const centerY = 300;

const WhyChooseUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-4 md:p-15 flex items-center justify-center font-[Poppins]"
      style={{ backgroundImage: 'url("")' }}
    >
      <div className="relative w-full max-w-[1000px] h-auto lg:h-[700px] mx-auto">
        {/* Central Infographic Circle */}
        <div
          className="w-56 lg:w-80 h-56 lg:h-80 mx-auto lg:absolute rounded-full bg-white/90 flex flex-col items-center justify-center text-center shadow-xl border-4 border-gray-700"
          style={{
            top: `${centerY - 100}px`,
            left: `${centerX - 100}px`,
          }}
        >
          <div className="text-xl lg:text-3xl font-bold text-center">
            Why
            <br />
            Choose Us
          </div>
          <p className="text-[15px] lg:text-md mt-2 px-3 text-gray-600 ">
            Empower your sales team with real-time insights, smarter automation, and data-driven decisions.
          </p>
        </div>
        

        {/* Desktop layout: circular step cards (only for large and above) */}
        <div className="mt-6 lg:mt-0 lg:block hidden">
          {steps.map((step, index) => {
            const totalSteps = steps.length;
            const angleStart = Math.PI / 2;
            const angleEnd = -Math.PI / 2;
            const angle =
              angleStart - (index * (angleStart - angleEnd)) / (totalSteps - 1);

            const stepX = centerX + radius * Math.cos(angle) + 40;
            let stepY = centerY - radius * Math.sin(angle);

            if (index === 0) stepY += 20;
            if (index === 1) stepY += 50;
            if (index === 3) stepY -= 50;
            if (index === 4) stepY -= 20;

            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="absolute w-44 lg:w-[300px] p-8 flex items-center bg-black/70 text-white rounded-lg shadow-md z-10"
                style={{
                  left: `${stepX}px`,
                  top: `${stepY}px`,
                  transform: "translate(-10%, -50%)",
                }}
              >
                <div className="w-8 lg:w-12 h-8 lg:h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xs mb-0.5">{step.title}</h4>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    {step.text}
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 w-5 lg:w-6 h-5 lg:h-6 bg-gray-900 rounded-full text-center text-[10px] font-bold leading-5 lg:leading-6">
                  {step.number}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile and Tablet layout: stack steps vertically */}
        <div className="lg:hidden mt-6 space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full p-3 flex items-center bg-black/80 text-white rounded-lg shadow-md"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                {step.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{step.title}</h4>
                <p className="text-xs text-gray-300">{step.text}</p>
              </div>
              <div className="ml-2 w-5 h-5 bg-gray-900 rounded-full text-center text-[10px] font-bold leading-5">
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
