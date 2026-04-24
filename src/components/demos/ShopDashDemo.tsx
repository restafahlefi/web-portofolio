"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowUpRight, LayoutDashboard } from 'lucide-react';

const ShopDashDemo = () => {
  const stats = [
    { label: 'Revenue', value: '$12,402', change: '+12.5%', icon: <DollarSign size={20} />, color: 'text-green-500' },
    { label: 'Orders', value: '842', change: '+8.2%', icon: <ShoppingBag size={20} />, color: 'text-blue-500' },
    { label: 'Customers', value: '3,201', change: '+15.3%', icon: <Users size={20} />, color: 'text-purple-500' },
  ];

  return (
    <div className="p-8 space-y-10 min-h-full">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <LayoutDashboard size={20} />
            </div>
            <div>
                <h1 className="text-xl font-bold text-white">ShopDash</h1>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Enterprise Dashboard</p>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800" />
            <div className="w-8 h-8 rounded-full bg-zinc-800" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/5 p-6 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all cursor-default group"
          >
            <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-lg">{stat.change}</span>
            </div>
            <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Chart Area (Mock) */}
      <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] space-y-6">
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
                <TrendingUp size={18} className="text-blue-500" />
                Sales Performance
            </h3>
            <select className="bg-zinc-800 text-xs border-none rounded-lg px-4 py-2 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
            </select>
        </div>
        
        {/* Mock Chart Bars */}
        <div className="flex items-end justify-between h-48 pt-4 gap-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                    className="flex-grow bg-blue-600/20 hover:bg-blue-600 transition-colors rounded-t-lg relative group"
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${h * 10}
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="flex justify-between text-zinc-600 text-[10px] font-bold uppercase tracking-widest px-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day}>{day}</span>)}
        </div>
      </div>
    </div>
  );
};

export default ShopDashDemo;
