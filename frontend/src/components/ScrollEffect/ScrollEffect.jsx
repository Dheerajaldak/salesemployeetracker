import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const AnimatedSection = ({
  title,
  backgroundImage,
  children,
  style = {},
  noBackground = false,
  blurBackground = true,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!backgroundImage) return;
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsLoaded(true);
  }, [backgroundImage]);

  const allChildren = React.Children.toArray(children);
  const leftChildren = allChildren.filter((_, i) => i % 2 === 0);
  const rightChildren = allChildren.filter((_, i) => i % 2 === 1);

  const panelVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      className={`min-h-screen py-16 flex flex-col items-center sticky top-0 relative ${
        noBackground ? "bg-gray-100" : "bg-cover bg-center"
      } overflow-hidden`}
      style={{
        backgroundImage: !noBackground && isLoaded ? `url(${backgroundImage})` : "none",
        ...style,
      }}
    >
      {/* Optional Blur Overlay */}
      {!noBackground && blurBackground && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]"></div>
      )}

      <motion.h2
        style={{ scale: scaleValue }}
        className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 relative z-10 text-center font-['Poppins'] ${
          noBackground ? "text-gray-800" : "text-white drop-shadow-lg"
        }`}
      >
        {title === "Security" ? (
          <ShieldCheckIcon className="w-8 h-8 md:w-10 md:h-10 text-white inline-block mr-2 align-middle" />
        ) : null}
        {title}
      </motion.h2>

      <div className="container-fluid px-0 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
          <motion.div
            className={`space-y-4 md:space-y-6 font-['Open_Sans'] leading-relaxed w-full`}
            variants={panelVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {React.Children.map(leftChildren, (child) => {
              if (React.isValidElement(child) && child.type === "ul") {
                return React.cloneElement(child, {
                  children: React.Children.map(child.props.children, (li) => (
                    <li className="flex items-center text-lg md:text-xl">
                      <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2 md:mr-3" />
                      {li}
                    </li>
                  )),
                  className: `${child.props.className || ""} list-none pl-0`,
                });
              }
              return child;
            })}
          </motion.div>
          <motion.div
            className={`space-y-4 md:space-y-6 font-['Open_Sans'] leading-relaxed w-full`}
            variants={panelVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {React.Children.map(rightChildren, (child) => {
              if (React.isValidElement(child) && child.type === "ul") {
                return React.cloneElement(child, {
                  children: React.Children.map(child.props.children, (li) => (
                    <li className="flex items-center text-lg md:text-xl">
                      <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2 md:mr-3" />
                      {li}
                    </li>
                  )),
                  className: `${child.props.className || ""} list-none pl-0`,
                });
              }
              return child;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ScrollEffect = () => (
  <div className="min-h-[300vh] text-white font-['Open_Sans'] w-full">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@400;600&display=swap"
      rel="stylesheet"
    />

    {/* Analytics Section */}
    <AnimatedSection title="Analytics" backgroundImage="Analytics.jpg" blurBackground={false}>
      <ul className="list-disc pl-6 mb-4 text-lg font-bold mt-10 md:mt-30">
        <li>Track key performance indicators (KPIs).</li>
        <li>Analyze user demographics and engagement.</li>
      </ul>
      <ul className="list-disc pl-6 mb-4 text-lg font-bold mt-10 md:mt-30">
        <li>Visualize data with interactive charts and graphs.</li>
        <li>Identify trends and patterns efficiently.</li>
      </ul>
      <p className="font-bold text-lg">
        &gt; We offer custom reporting solutions tailored to your specific business needs.
      </p>
      <p className="font-bold text-lg">
        &gt;Boost decision-making with real-time metrics and dashboards.
      </p>
    </AnimatedSection>

    {/* Security Section - FIXED with responsive grid */}
    <AnimatedSection
      title="Security"
      backgroundImage="https://images.unsplash.com/photo-1589156280159-27697a70f29e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-rb-4.0.3"
    >
      <div className="grid grid-cols-3  justify-center sm:grid-cols-3 md:grid-cols-3   md:gap-60 lg:gap-89 mt-20 md:mt-15 w-full max-w-5xl  items-center ">
        {[
          { src: "Security1.jpg", alt: "Red Jeep in city" },
          { src: "Security2.jpg", alt: "Grey Jeep in forest" },
          { src: "Security3.jpg", alt: "White Jeep in desert" },
        ].map((car, idx) => (
          <div
            key={idx}
            className="h-32 sm:h-60 md:h-70  md:w-60  lg:w-78 w-26 bg-cover bg-center clip-polygon transition-transform hover:scale-105 duration-300 rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${car.src})` }}
            aria-label={car.alt}
          />
        ))}
      </div>

      <style>
        {`
          .clip-polygon {
            clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
          }
        `}
      </style>
    </AnimatedSection>

    {/* Product Features Section (Now with Icons) */}
    <AnimatedSection title="Security" backgroundImage="Security1.jpg" blurBackground={false}>
      <ul className="list-disc pl-6 mb-4 text-lg md:text-xl mt-10 md:mt-20 leading-loose font-bold">
        <li>Intuitive user interface.</li>
        <li>Customizable dashboards.</li>
        <li>Seamless integration with other applications.</li>
        <li>Advanced search and filtering.</li>
      </ul>
      <ul className="list-disc pl-6 mb-4 text-lg md:text-xl mt-10 md:mt-20 leading-loose md:mr-10 font-bold">
        <li>API access for developers.</li>
        <li>Support for popular third-party tools.</li>
        <li>Automated data synchronization.</li>
        <li>Easy data import/export.</li>
      </ul>
    </AnimatedSection>
  </div>
);

export default ScrollEffect;
