import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ExactDesign = () => {
  const togetherWeRef = useRef(null);
  const reinEntedRef = useRef(null);
  const rightContentRef = useRef(null);
  const [inView, setInView] = useState({ togetherWe: false, reinEnted: false, rightContent: false });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Consider anything wider than 1024px as desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === togetherWeRef.current) {
              setInView((prev) => ({ ...prev, togetherWe: true }));
            } else if (entry.target === reinEntedRef.current) {
              setInView((prev) => ({ ...prev, reinEnted: true }));
            } else if (entry.target === rightContentRef.current) {
              setInView((prev) => ({ ...prev, rightContent: true }));
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (togetherWeRef.current) observer.observe(togetherWeRef.current);
    if (reinEntedRef.current) observer.observe(reinEntedRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="exact-design-container">
      <div className="left-text">
        <motion.h1
          ref={togetherWeRef}
          className="together-we"
          initial={isDesktop ? { opacity: 0, y: 30, x: -50 } : { opacity: 1, y: 0, x: 0 }}
          animate={isDesktop ? { opacity: inView.togetherWe ? 1 : 0, y: inView.togetherWe ? 0 : 30, x: inView.togetherWe ? 0 : -50 } : { opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          TOGETHER WE
        </motion.h1>
        <motion.h1
          ref={reinEntedRef}
          className="rein-ented"
          initial={isDesktop ? { opacity: 0, y: 30, x: 50 } : { opacity: 1, y: 0, x: 0 }}
          animate={isDesktop ? { opacity: inView.reinEnted ? 1 : 0, y: inView.reinEnted ? 0 : 30, x: inView.reinEnted ? 150 : 50 } : { opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          REIN<span className="arrow">&gt;</span>ENTED
        </motion.h1>
      </div>
      <motion.div
        ref={rightContentRef}
        className="right-content"
        initial={isDesktop ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
        animate={isDesktop ? { opacity: inView.rightContent ? 1 : 0, x: inView.rightContent ? 0 : 100 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
        <p className="paragraph-text">We empower businesses to achieve sales excellence. Our platform provides intuitive tools for real-time tracking, performance analysis, and informed decision-making. We're dedicated to driving your success through innovative solutions and exceptional support.</p>
        <div className="see-what-we-do">
          <span className="see-text">See what we do</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 7.414V17a1 1 0 11-2 0V7.414L8.707 10.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </motion.div>
      <style jsx>{`
        .exact-design-container {
          display: flex;
          background-color: black;
          color: white;
          padding: 100px;
          align-items: flex-start;
        }

        .left-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .together-we {
          font-size: 90px;
          font-weight: 900;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          transform: translateY(0) translateX(0);
        }

        .rein-ented {
          font-size: 90px;
          font-weight: 900;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-left: 150px;
          transform: translateY(0) translateX(0);
        }

        .arrow {
          color: #9400D3;
        }

        .right-content {
          max-width: 500px;
          margin-left: 200px;
        }

        .paragraph-text {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
          font-weight: 400;
        }

        .see-what-we-do {
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 18px;
        }

        .arrow-icon {
          width: 24px;
          height: 24px;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .exact-design-container {
            flex-direction: column;
            padding: 40px;
            align-items: flex-start;
          }
          .left-text {
            align-items: flex-start;
            margin-bottom: 20px;
          }
          .together-we {
            font-size: 50px;
            margin-bottom: 10px;
            text-align: left;
          }
          .rein-ented {
            font-size: 50px;
            margin-left: 0;
            text-align: left;
          }
          .right-content {
            max-width: 100%;
            margin-left: 0;
            text-align: left;
          }
          .paragraph-text {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .see-what-we-do {
            font-size: 16px;
            gap: 10px;
          }
        }

        @media (max-width: 768px) {
          .together-we {
            font-size: 40px;
          }
          .rein-ented {
            font-size: 40px;
          }
        }

        @media (max-width: 576px) {
          .together-we {
            font-size: 32px;
          }
          .rein-ented {
            font-size: 32px;
            margin-left: 0;
          }
          .paragraph-text {
            font-size: 14px;
            line-height: 1.5;
          }
          .see-what-we-do {
            font-size: 14px;
            gap: 8px;
          }
          .arrow-icon {
            width: 18px;
            height: 18px;
          }
          .exact-design-container {
            padding: 30px;
          }
          .left-text {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ExactDesign;