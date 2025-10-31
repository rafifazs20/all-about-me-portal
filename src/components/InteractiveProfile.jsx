import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import profilePic from "../assets/profile.jpg"; 



export default function InteractiveProfile() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const stringRotate = useTransform(x, [-150, 150], [-30, 30]);
  const stringScaleY = useTransform(y, [0, 150], [1, 3]);


  const shadowOpacity = useTransform(
    [rotateX, rotateY],
    ([-10, 10], [-10, 10]),
    [0.1, 0.7]
  );
  const shadowY = useTransform(y, [0, 100], [0, 20]);

  function handleMouseMove(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    

    const relativeX = e.clientX - (rect.left + rect.width / 2);
    const relativeY = e.clientY - (rect.top + rect.height / 2);

    rotateX.set(relativeY / -10);
    rotateY.set(relativeX / 10);

    x.set(relativeX / 2); 
    y.set(relativeY / 2);
  }


  function handleMouseLeave() {
    const springConfig = { type: "spring", stiffness: 200, damping: 15 };
    animate(x, 0, springConfig);
    animate(y, 0, springConfig);
    animate(rotateX, 0, springConfig);
    animate(rotateY, 0, springConfig);
  }

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }} 
    >

      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-d",
        }}
        className="relative w-40 h-56 rounded-xl card-glass p-3 border border-white/10 shadow-2xl" // UKURAN LEBIH KECIL
      >
        <img 
          src={profilePic} 
          alt="Profile" 
          className="w-full h-full object-cover rounded-md" 
        />
        

        <div className="absolute bottom-3 left-3 z-10" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-orbitron font-bold text-white text-md">RAFIF</h3>
          <p className="text-xs text-electric-cyan -mt-1">II2100 PORTAL</p>
        </div>


        <motion.div 
          className="absolute inset-0 rounded-xl"
          style={{
            opacity: shadowOpacity,
            y: shadowY,
            boxShadow: "0 10px 35px 8px #00BFFF",
            transform: "translateZ(-10px)",
          }}
        />
      </motion.div>
    </div>
  );
}