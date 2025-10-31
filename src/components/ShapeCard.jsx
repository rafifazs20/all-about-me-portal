import React from 'react';
import { motion } from 'framer-motion';

export default function ShapeCard({ item, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative w-full h-48 cursor-pointer group"
    >
      <div className={`absolute -inset-1.5 rounded-xl bg-electric-cyan
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-70 blur-lg`}
      ></div>

      <div
        className="relative card-glass w-full h-full rounded-xl 
                   flex flex-col items-center justify-center
                   border border-white/10"
      >
        <span className="text-5xl text-electric-cyan neon">{item.icon}</span>
        
        <h3 className="mt-4 text-2xl font-bold text-white text-center px-2">
          {item.title}
        </h3>
        
      </div>
    </div>
  );
}