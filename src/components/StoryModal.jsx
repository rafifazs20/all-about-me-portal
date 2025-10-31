import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3, ease: 'easeIn' } }
};


export default function StoryModal({ story, onClose }) {
  
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play();
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
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
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose} 
    >
      
      <motion.div
        variants={modalVariants} 
        className="relative z-[10000] card-glass p-6 md:p-8 rounded-2xl
                   w-11/12 max-w-3xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-graphite-silver hover:text-white transition-colors z-50"
          aria-label="Tutup cerita"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 pr-8">
          {story.title}
        </h2>
        
        <div className="space-y-4 text-graphite-silver text-lg leading-relaxed text-justify">
          {story.fullText.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <audio ref={audioRef} src={story.musicUrl} loop>
          Browser kamu tidak mendukung elemen audio.
        </audio>

      </motion.div>
    </motion.div>
  );
}