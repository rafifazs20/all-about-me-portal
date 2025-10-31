import React, { useEffect } from 'react';
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

export default function SongModal({ song, onClose }) {
  
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
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose} 
    >
      
      <motion.div
        variants={modalVariants} 
        className="relative z-[10000] card-glass p-6 md:p-8 rounded-2xl
                   w-11/12 max-w-3xl 
                   flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-graphite-silver hover:text-white transition-colors z-50"
          aria-label="Tutup"
        >
          <FaTimes size={24} />
        </button>
        
        <div className="flex-shrink-0">
          <h2 className="text-3xl font-bold text-white mb-1 pr-8">{song.title}</h2>
          <h3 className="text-xl text-graphite-silver mb-4">{song.artist}</h3>
        </div>

        <div className="w-full h-80 rounded-lg overflow-hidden my-4 flex-shrink-0">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1`}
            title={song.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-2"> 
          <h4 className="text-2xl font-bold text-white mb-3 
                         sticky top-0 bg-gray-900/50 backdrop-blur-sm py-2"> 
            Lirik
          </h4>
          <div className="space-y-1 text-graphite-silver leading-relaxed">
            
            {song.fullLyrics.split('\n').map((line, index) => {
              const isLabel = line.startsWith('[') && line.endsWith(']');

              if (line === '') return <div key={index} className="h-4" />;
              

              return (
                <p 
                  key={index} 
                  className={
                    isLabel 
                      ? 'font-semibold text-electric-cyan text-lg mt-3 mb-1'
                      : '' 
                  }
                >
                  {line}
                </p>
              );
            })}

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}