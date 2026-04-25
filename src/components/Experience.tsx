"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-blue-500/20">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Pengalaman <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Profesional</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Perjalanan karir saya dalam membangun solusi teknologi yang berdampak.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-500 z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-medium uppercase tracking-wider">
                          <MapPin size={12} className="text-blue-500/50" />
                          {exp.location}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((desc, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                            <ChevronRight size={14} className="text-blue-500 mt-1 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-zinc-500 uppercase tracking-tighter"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
