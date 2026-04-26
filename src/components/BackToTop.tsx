"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[150] w-12 h-12 rounded-2xl bg-blue-600/90 backdrop-blur-sm border border-blue-500/30 text-white flex items-center justify-center shadow-2xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          
          {/* Pulse ring effect */}
          <span className="absolute inset-0 rounded-2xl border border-blue-400/30 animate-ping opacity-20" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
