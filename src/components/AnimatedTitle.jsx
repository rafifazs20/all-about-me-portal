import React from "react";
import { motion } from "framer-motion";

const titleContainerVariants = {
  hidden: { 
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100, 
      damping: 10 
    },
  },
};

export default function AnimatedTitle({ text, className }) {
  const words = text.split(" ");

  return (
    <motion.h2
      className={`text-3xl font-bold neon text-white ${className || ''}`}
      variants={titleContainerVariants}
      initial="hidden"
      animate="visible"
    >

      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}