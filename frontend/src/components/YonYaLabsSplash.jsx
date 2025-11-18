import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * YonYaLabsSplash
 * Fullscreen splash / preloader overlay that fades out after ~1500ms.
 * Styling uses Tailwind; animation handled by Framer Motion.
 */
export default function YonYaLabsSplash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="yonyalabs-splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white select-none"
        >
          <div className="flex flex-col items-center px-6 text-center">
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-medium text-cyan-400 mb-3">
              Performance & Design
            </p>
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-cyan-400 bg-clip-text text-transparent">
                YonYa Labs
              </span>
            </h1>
            {/* Loading indicator (animated accent line) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="origin-left h-0.5 mt-6 bg-cyan-400/80 w-48 rounded"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
