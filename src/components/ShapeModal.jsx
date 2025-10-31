import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function ShapeModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] 
                 flex items-center justify-center 
                 bg-gray-900/80 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose} 
    >
      
      <motion.div
        layoutId={item.key}
        className="relative z-[10000] card-glass p-6 md:p-10 rounded-2xl
                   w-11/12 max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-graphite-silver hover:text-white transition-colors z-50"
          aria-label="Tutup"
        >
          <FaTimes size={24} />
        </button>
        
        <motion.div
          className="relative w-full [transform-style:preserve-3d]"
          initial={{ rotateY: 0 }} 
          animate={{ rotateY: 180 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
        >
          
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-7xl text-electric-cyan neon">{item.icon}</span>
              <h3 className="mt-4 text-3xl font-bold text-white">{item.title}</h3>
            </div>
          </div>

          <div className="w-full min-h-[300px] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {item.title}
            </h2>
            <div className="space-y-4 text-graphite-silver text-lg leading-relaxed text-justify max-h-[60vh] overflow-y-auto pr-2">
              {item.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}