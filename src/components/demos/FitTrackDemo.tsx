"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Flame, Timer, Footprints, ChevronRight, Activity } from 'lucide-react';

const FitTrackDemo = () => {
  const [steps, setSteps] = useState(8420);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);

  return (
    <div className="p-6 space-y-8">
      {/* User Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Good Morning</h2>
          <h1 className="text-xl font-bold text-white">Resta Fahlefi</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Activity size={20} />
        </div>
      </div>

      {/* Main Circle Progress */}
      <div className="relative flex items-center justify-center py-4">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray="552.92"
            initial={{ strokeDashoffset: 552.92 }}
            animate={{ strokeDashoffset: 552.92 - (552.92 * (steps / 10000)) }}
            className="text-blue-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white">{steps}</span>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Steps</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-orange-400 mb-2">
            <Flame size={16} />
            <span className="text-[10px] font-bold uppercase">Calories</span>
          </div>
          <p className="text-lg font-bold text-white">420 <span className="text-xs text-zinc-500">kcal</span></p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Timer size={16} />
            <span className="text-[10px] font-bold uppercase">Active</span>
          </div>
          <p className="text-lg font-bold text-white">45 <span className="text-xs text-zinc-500">min</span></p>
        </div>
      </div>

      {/* Workout Card */}
      <div className="bg-blue-600 p-6 rounded-[2rem] shadow-xl shadow-blue-600/20 relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <h3 className="text-sm font-black uppercase tracking-widest text-blue-100 mb-1">Current Session</h3>
        <p className="text-xl font-bold text-white mb-6">Heavy Lifting — Day 4</p>
        <button 
          onClick={() => setIsWorkoutActive(!isWorkoutActive)}
          className="w-full py-3 bg-white text-blue-600 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all"
        >
          {isWorkoutActive ? 'Pause Workout' : 'Start Workout'}
        </button>
      </div>

      {/* Recommended List */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Recommended</h3>
        {[
          { name: 'Yoga for Beginners', time: '15 min', icon: <Play size={14} /> },
          { name: 'Core Strength', time: '25 min', icon: <Play size={14} /> }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{item.name}</p>
                <p className="text-[10px] text-zinc-500 font-medium">{item.time}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-zinc-600 group-hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitTrackDemo;
