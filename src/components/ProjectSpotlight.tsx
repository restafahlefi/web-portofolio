"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Code2, Globe, Cpu, Zap, Github } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectSpotlightProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onLinkClick: (e: React.MouseEvent, project: Project, type: 'live' | 'github') => void;
  initialTab?: 'overview' | 'code';
}

const ProjectSpotlight = ({ project, isOpen, onClose, onLinkClick, initialTab = 'overview' }: ProjectSpotlightProps) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'code'>(initialTab);
  const [activeImage, setActiveImage] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
        setActiveTab(initialTab);
        setActiveImage(0);
    }
  }, [isOpen, initialTab]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-full bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/20 hover:text-red-500 transition-all"
            >
              <X size={24} />
            </button>

            {/* Left: Visual & Quick Stats */}
            <div className="md:w-1/2 relative bg-zinc-950 p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full" />
                </div>
                
                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20 inline-block">
                            Project Spotlight
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            {project.title.split(' — ')[0]}
                        </h2>
                        <p className="text-blue-500 font-bold text-lg">{project.title.split(' — ')[1]}</p>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group/img">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image 
                                    src={project.images[activeImage]} 
                                    alt={`${project.title} screenshot ${activeImage + 1}`} 
                                    fill 
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Image Navigation */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImage(prev => prev === 0 ? project.images.length - 1 : prev - 1);
                                }}
                                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImage(prev => prev === project.images.length - 1 ? 0 : prev + 1);
                                }}
                                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {project.images.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeImage === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Status</p>
                        <p className="text-white font-bold">{project.status}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Year</p>
                        <p className="text-white font-bold">{project.year}</p>
                    </div>
                </div>
            </div>

            {/* Right: Deep Dive Details */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-zinc-900/50">
                <div className="flex gap-4 mb-12 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                    <button 
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-zinc-500 hover:text-white'
                        }`}
                    >
                        Project Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab('code')}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeTab === 'code' ? 'bg-zinc-800 text-white border border-white/10' : 'text-zinc-500 hover:text-white'
                        }`}
                    >
                        Source Code
                    </button>
                </div>

                <div className="space-y-12">
                    {activeTab === 'overview' ? (
                        <>
                            <section className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                    <Globe size={16} className="text-blue-500" />
                                    Kegunaan & Dampak
                                </h3>
                                <p className="text-zinc-400 leading-relaxed italic">
                                    "{project.description}"
                                </p>
                                <p className="text-zinc-300 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                    <Zap size={16} className="text-yellow-500" />
                                    Fitur Unggulan
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features.map((feature, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5"
                                        >
                                            <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                            <span className="text-[11px] font-medium text-zinc-200">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                    <Cpu size={16} className="text-purple-500" />
                                    Teknologi yang Digunakan
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-zinc-800 rounded-xl text-xs font-bold text-zinc-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                                    <Code2 size={16} className="text-green-500" />
                                    Source Code Explorer
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-black text-green-500/80 tracking-widest">LIVE EDITOR</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col lg:flex-row gap-4 h-[400px]">
                                {/* File Explorer Panel */}
                                <div className="w-full lg:w-48 bg-black/40 border border-white/5 rounded-2xl p-4 overflow-y-auto custom-scrollbar">
                                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Explorer</p>
                                    <div className="space-y-2">
                                        {project.fileTree.map((file, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-[10px] text-zinc-400 hover:text-blue-400 cursor-pointer transition-colors overflow-hidden truncate">
                                                <div className="w-3 h-3 bg-blue-500/20 rounded flex items-center justify-center shrink-0">
                                                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                                </div>
                                                {file.split('/').pop()}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Code Editor */}
                                <div className="flex-grow relative group overflow-hidden rounded-2xl border border-white/5">
                                    <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/80 backdrop-blur-sm p-6 md:p-8 overflow-auto custom-scrollbar font-mono text-[11px] md:text-xs leading-relaxed">
                                        <pre className="text-zinc-400">
                                            <code dangerouslySetInnerHTML={{ 
                                                __html: project.codeSnippet
                                                    .replace(/\/\/ (.*)/g, '<span class="text-zinc-600">// $1</span>')
                                                    .replace(/export|async|function|await|const|return|import|from|try|catch|if|else/g, '<span class="text-purple-400">$&</span>')
                                                    .replace(/NextResponse|Response|db|process|console|Error|req/g, '<span class="text-blue-400">$&</span>')
                                                    .replace(/'(.*?)'/g, '<span class="text-green-400">\'$1\'</span>')
                                                    .replace(/`|\\|\${/g, '<span class="text-orange-400">$&</span>')
                                            }} />
                                        </pre>
                                    </div>
                                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-[9px] font-black text-zinc-500 uppercase tracking-widest pointer-events-none">
                                        Read-Only Preview
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-blue-600/5 rounded-2xl border border-blue-500/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                                        <Cpu size={14} />
                                    </div>
                                    <div className="text-[10px]">
                                        <p className="font-black text-zinc-300 uppercase tracking-widest">Environment</p>
                                        <p className="text-zinc-500">Node.js v20.x • Production Stable</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">99.9% Uptime</p>
                                </div>
                            </div>
                        </section>
                    )}

                    <div className="pt-8 border-t border-white/5 flex gap-4">
                        <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => onLinkClick(e, project, 'github')}
                            className="flex-grow flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/10 text-white"
                        >
                            <Github size={18} />
                            Full Repo
                        </a>
                        <a 
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => onLinkClick(e, project, 'live')}
                            className="flex-grow flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 text-white"
                        >
                            <Globe size={18} />
                            Live App
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Helper component for icon
const ExternalLink = ({ size }: { size: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

export default ProjectSpotlight;
