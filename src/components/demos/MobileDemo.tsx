"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, Signal, ArrowLeft, Home, Search, User, Play, Calendar } from 'lucide-react';

interface MobileDemoProps {
  children: React.ReactNode;
  title: string;
}

const MobileDemo = ({ children, title }: MobileDemoProps) => {
  return (
    <div className="relative mx-auto w-[320px] h-[650px] bg-zinc-950 rounded-[3rem] border-[8px] border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-800 rounded-b-2xl z-50 flex items-center justify-center">
         <div className="w-10 h-1 bg-zinc-900 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full px-8 pt-3 pb-1 flex justify-between items-center text-[10px] font-bold text-white z-40 bg-transparent">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={10} />
          <Wifi size={10} />
          <Battery size={10} className="rotate-90" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-[#0a0a0f] overflow-y-auto pt-12 pb-20 custom-scrollbar">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#12121a]/80 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-6 z-40">
        <button className="text-blue-500 flex flex-col items-center gap-1">
          <Home size={20} />
          <span className="text-[8px] font-black uppercase">Home</span>
        </button>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
          <Search size={20} />
          <span className="text-[8px] font-black uppercase">Search</span>
        </button>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
          <Calendar size={20} />
          <span className="text-[8px] font-black uppercase">Plan</span>
        </button>
        <button className="text-zinc-500 flex flex-col items-center gap-1">
          <User size={20} />
          <span className="text-[8px] font-black uppercase">Profile</span>
        </button>
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-50" />
    </div>
  );
};

export default MobileDemo;
