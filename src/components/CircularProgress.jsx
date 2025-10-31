import React, { useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';

export default function CircularProgress({ score }) {
  const counterRef = useRef(null);
  
  const progress = score / 5;
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const node = counterRef.current;
    
    const controls = animate(0, score, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(2);
        }
      }
    });
    
    return () => controls.stop();
  }, [score]);

  return (
    <div className="relative w-52 h-52">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="15"
        />

        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#progress-gradient)"
          strokeWidth="15"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#0E4D92" />
          </linearGradient>
        </defs>
      </svg>
      

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          ref={counterRef}
          className="text-5xl font-orbitron font-bold text-white neon"
        >
          0.00
        </span>
        <span className="text-lg font-semibold text-graphite-silver">/ 5.00</span>
      </div>
    </div>
  );
}