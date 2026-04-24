"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  'booting RF.dev',
  '> Initializing neural core...',
  '> Synchronizing systems...',
  '> Role : Software Engineer',
  '> Status : System Ready'
];

const TerminalLoadingScreen = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState(['', '', '', '', '']);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Progress counter simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (currentLine < lines.length) {
      let charIndex = 0;
      const targetText = lines[currentLine];

      const typingInterval = setInterval(() => {
        if (charIndex <= targetText.length) {
          setDisplayText(prev => {
            const newState = [...prev];
            newState[currentLine] = targetText.slice(0, charIndex);
            return newState;
          });
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
          }, 400);
        }
      }, 25);

      return () => clearInterval(typingInterval);
    } else {
      setTimeout(() => setIsComplete(true), 800);
    }
  }, [currentLine]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020205] font-mono overflow-hidden"
        >
          {/* Background Layer: Animated Particles/Data */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
            {hasMounted && Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: "110%", 
                  opacity: Math.random() 
                }}
                animate={{ 
                  y: "-10%",
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity, 
                  delay: Math.random() * 5 
                }}
                className="absolute w-[1px] h-20 bg-blue-500/50"
              />
            ))}
          </div>

          {/* Cyber HUD Orb Spinner */}
          <div className="relative w-48 h-48 mb-16 flex items-center justify-center z-20">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-l-2 border-blue-500/20 rounded-full"
            />
            
            {/* Middle Counter-Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-b-2 border-r-2 border-purple-500/30 rounded-full"
            />

            {/* Inner Glitchy Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity },
                opacity: { duration: 0.5, repeat: Infinity }
              }}
              className="absolute inset-8 border-t-4 border-blue-400 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />

            {/* Progress Percentage */}
            <div className="relative z-30 flex flex-col items-center">
              <motion.span 
                className="text-4xl font-black text-white tracking-tighter"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              >
                {progress}%
              </motion.span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-blue-400 font-bold mt-1">
                Syncing
              </span>
            </div>

            {/* Ambient Core Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full animate-pulse" />
          </div>

          {/* Terminal Window with Glitch Effect */}
          <div className="w-full max-w-sm px-8 py-6 bg-[#0a0a0f]/90 backdrop-blur-xl rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="flex flex-col gap-2.5">
              {displayText.map((text, index) => (
                <div
                  key={index}
                  className={`text-xs md:text-sm flex items-center gap-3 ${
                    index === 0 ? 'text-blue-400 font-black tracking-widest' : 'text-zinc-400 font-medium'
                  } ${index > currentLine ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                >
                  <span className="text-[10px] text-zinc-600">0{index + 1}</span>
                  <span className={index === currentLine ? 'glitch-text' : ''}>{text}</span>
                  {index === currentLine && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className="w-1.5 h-4 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"
                    />
                  )}
                  {index < currentLine && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-[9px] font-black text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded uppercase tracking-tighter"
                    >
                      Done
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="absolute bottom-12 flex flex-col items-center opacity-30">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent mb-2" />
            <span className="text-[8px] uppercase tracking-[1em] text-zinc-500">Secure Environment</span>
          </div>

          <style jsx>{`
            .glitch-text {
              animation: glitch 0.3s infinite;
              text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
            }
            @keyframes glitch {
              0% { transform: translate(0); }
              20% { transform: translate(-1px, 1px); }
              40% { transform: translate(-1px, -1px); }
              60% { transform: translate(1px, 1px); }
              80% { transform: translate(1px, -1px); }
              100% { transform: translate(0); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalLoadingScreen;
