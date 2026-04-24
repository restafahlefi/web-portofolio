"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white font-mono">
        <div className="text-center space-y-6">
            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-6xl font-black"
            >
                404
            </motion.h1>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Project Not Found</p>
            <Link href="/" className="inline-block px-8 py-3 bg-blue-600 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all">
                Back to Home
            </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.05),_transparent_40%)]" />

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Back Button */}
        <motion.button 
          onClick={() => router.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all mb-12 group"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.2em]">Kembali</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          {/* Left Column: Image & Description */}
          <div className="lg:col-span-2 space-y-16">
            {/* Project Cover */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] group"
            >
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10">
                     <span className="px-4 py-2 rounded-lg bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                        {project.category.replace('web', 'Web App')}
                     </span>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
            >
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
                        {project.title.split(' — ')[0]}
                        <br />
                        <span className="gradient-text opacity-80">{project.title.split(' — ')[1]}</span>
                    </h1>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={project.links.live} className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                        <a href={project.links.github} className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/10 active:scale-95">
                            <Github size={18} />
                            Source Code
                        </a>
                    </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <div className="w-2 h-8 bg-blue-500 rounded-full" />
                        Tentang Proyek
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                        {project.fullDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-10 rounded-[2.5rem] bg-white/[0.02]">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <CheckCircle className="text-blue-500" size={24} />
                            Fitur Utama
                        </h3>
                        <div className="space-y-4">
                            {project.features.map((f, i) => (
                                <motion.div 
                                    key={f}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 text-zinc-400 text-sm font-bold"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                    {f}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="space-y-8 sticky top-32">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01]"
             >
                <div className="space-y-12">
                    <div>
                        <div className="flex items-center gap-2 text-blue-400 mb-6">
                            <Tag size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-zinc-300 text-[10px] font-black uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                        <div>
                            <div className="flex items-center gap-2 text-zinc-500 mb-3">
                                <Calendar size={14} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Tahun</span>
                            </div>
                            <p className="text-white font-black text-lg">{project.year}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-zinc-500 mb-3">
                                <CheckCircle size={14} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Status</span>
                            </div>
                            <p className="text-blue-500 font-black text-lg">{project.status}</p>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5">
                        <div className="relative mb-8">
                            <span className="text-4xl absolute -top-4 -left-2 opacity-20 font-serif font-black">"</span>
                            <p className="text-zinc-500 text-sm leading-relaxed italic relative z-10 pl-4">
                                Membangun proyek ini memberikan tantangan tersendiri dalam optimisasi performa dan manajemen state skala besar.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20">
                                <Image 
                                    src="/assets/images/profile.png" 
                                    alt="Author" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-black text-white leading-none">Resta Fahlefi</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Fullstack Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
