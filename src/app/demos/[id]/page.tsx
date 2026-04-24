"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Monitor, Smartphone, Info } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

// Import Demos
import MobileDemo from '@/components/demos/MobileDemo';
import FitTrackDemo from '@/components/demos/FitTrackDemo';
import TravelGoDemo from '@/components/demos/TravelGoDemo';
import ShopDashDemo from '@/components/demos/ShopDashDemo';

const DemoViewer = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Not Found</div>;

  const renderDemo = () => {
    switch (id) {
      case 'fittrack':
        return <MobileDemo title={project.title}><FitTrackDemo /></MobileDemo>;
      case 'travelgo':
        return <MobileDemo title={project.title}><TravelGoDemo /></MobileDemo>;
      case 'shopdash':
        return (
          <div className="w-full max-w-5xl mx-auto bg-zinc-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/10]">
            <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-6 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-grow flex justify-center">
                    <div className="bg-white/5 px-10 py-1 rounded-md text-[10px] text-zinc-500 font-mono">
                        shopdash.rf.dev/analytics
                    </div>
                </div>
            </div>
            <div className="h-[calc(100%-40px)] overflow-y-auto custom-scrollbar">
                <ShopDashDemo />
            </div>
          </div>
        );
      default:
        return <div className="text-white text-center p-20">Demo for this project is coming soon.</div>;
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      {/* Header Bar */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-[100]">
        <div className="flex items-center gap-6">
            <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest">Back</span>
            </button>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    {project.category === 'mobile' ? <Smartphone size={16} /> : <Monitor size={16} />}
                </div>
                <div>
                    <h1 className="text-sm font-bold leading-none">{project.title}</h1>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Interactive Live Demo</p>
                </div>
            </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <Info size={14} className="text-blue-500" />
                This is an interactive prototype
            </div>
            <Link 
                href={`/projects/${id}`}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
            >
                View Case Study
            </Link>
        </div>
      </nav>

      {/* Demo Display Area */}
      <div className="flex-grow flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-full h-full flex items-center justify-center"
        >
            {renderDemo()}
        </motion.div>
      </div>
      
      {/* Footer / Controls (Mobile Only) */}
      <div className="md:hidden p-6 border-t border-white/5 flex gap-4">
            <Link 
                href={`/projects/${id}`}
                className="flex-grow py-4 bg-blue-600 rounded-2xl text-center text-xs font-black uppercase tracking-widest"
            >
                Case Study
            </Link>
      </div>
    </main>
  );
};

export default DemoViewer;
