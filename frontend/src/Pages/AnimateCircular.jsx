import React, { useState, useEffect } from 'react';
 import { motion } from 'framer-motion';

 const AnimateCircular = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
  <svg width="100" height="100">
  <circle
  cx="50"
  cy="50"
  r={radius}
  stroke="lightgray"
  strokeWidth="10"
  fill="transparent"
  />
  <motion.circle
  cx="50"
  cy="50"
  r={radius}
  stroke="blue"
  strokeWidth="10"
  fill="transparent"
  strokeDasharray={`${circumference} ${circumference}`}
  strokeDashoffset={strokeDashoffset}
  style={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
  />
  <text x="50" y="55" textAnchor="middle" fontSize="20">{`${percentage}%`}</text>
  </svg>
  );
 };

 function YourComponent() {
  return (
  <div>
  <AnimatedCircularProgress percentage={90} />
  </div>
  );
 }

 export default YourComponent;