import { motion } from 'framer-motion';

const animations = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  }, 
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    y: -20,
    transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
  },
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}