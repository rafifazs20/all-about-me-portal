import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "C (Programming Language)", "Python (Pandas)", "Microsoft Office",
  "HTML, CSS, JavaScript (Next.js, Express.js)", "C++ (Programming Language)",
  "Product Knowledge & Product Marketing", "Figma", "CI/CD",
  "Deployment", "Critical Thinking", "Collaboration",
  "Strategic Thinking", "Canva", "Spline", "GitHub", "Miro"
];

const duplicatedSkills = [...skills, ...skills, ...skills];

export default function RunningSkills() {
  return (
    <div className="relative w-full overflow-hidden py-3">
      

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="card-glass rounded-lg border border-white/10 py-2 px-5 mx-3"
          >
            <span className="text-sm md:text-md font-semibold text-white whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}