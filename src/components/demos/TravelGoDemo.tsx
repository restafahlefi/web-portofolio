"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search, Star, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TravelGoDemo = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hotels');

  return (
    <div className="p-6 space-y-8">
      {/* Search Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-white leading-tight">Explore the<br/>Beautiful World!</h1>
        <div className="relative pt-4">
          <Search className="absolute left-4 top-8 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Search destination..." 
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {['Hotels', 'Flights', 'Adventures', 'Food'].map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
              selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-zinc-500 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Card */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">Popular Destinations</h3>
          <button className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">See All</button>
        </div>

        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900 aspect-[4/5]">
            <Image 
                src="/assets/images/project-4.png" 
                alt="Destination" 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-xl text-white">
                <Heart size={18} />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent space-y-2">
                <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-bold text-white">4.9 (120 Reviews)</span>
                </div>
                <h4 className="text-xl font-bold text-white">Bali Luxury Villa</h4>
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <MapPin size={12} />
                    <span>Ubud, Indonesia</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <p className="text-lg font-black text-blue-400">$240 <span className="text-[10px] text-zinc-500 font-bold uppercase">/ night</span></p>
                    <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGoDemo;
