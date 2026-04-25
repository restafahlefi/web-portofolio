"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-[300] min-w-[320px]"
        >
          <div className={`p-5 rounded-2xl flex items-center gap-4 backdrop-blur-xl border ${
            type === 'success' 
            ? 'bg-green-500/10 border-green-500/20 text-green-400' 
            : 'bg-red-500/10 border-red-500/20 text-red-400'
          } shadow-2xl`}>
            {type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
            <p className="text-sm font-bold tracking-tight flex-grow">{message}</p>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
            
            {/* Progress Bar */}
            <motion.div 
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-1 w-full origin-left ${
                type === 'success' ? 'bg-green-500/40' : 'bg-red-500/40'
              }`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
