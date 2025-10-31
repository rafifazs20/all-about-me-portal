import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="card-glass rounded-xl overflow-hidden">
      <motion.header
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold text-electric-cyan neon">
            {item.average.toFixed(2)} / 5
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown />
          </motion.div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-white/10"
          >
            <div className="p-5 space-y-4">
              <h4 className="text-lg font-semibold text-white mb-2">Detail Kriteria Penilaian</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.criteria.map((c, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-storm rounded-lg">
                    <span className="text-2xl mt-1">{c.icon}</span>
                    <div>
                      <h5 className="font-bold text-white">{c.name} ({c.score})</h5>
                      <p className="text-sm text-graphite-silver">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-semibold text-white pt-2">Alasan Singkat</h4>
              <p className="text-graphite-silver italic">"{item.summary}"</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ReviewAccordion({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.map(item => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}