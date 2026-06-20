import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor="hover"
          aria-label="Back to top"
          className="glass fixed bottom-7 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-cyan-300 shadow-glow-cyan transition-transform hover:-translate-y-1 sm:right-8"
        >
          <FiArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
