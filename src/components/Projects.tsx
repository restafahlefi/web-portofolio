"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projects, Project } from '@/data/projects';
import ProjectSpotlight from './ProjectSpotlight';
import Toast from './Toast';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [spotlightTab, setSpotlightTab] = useState<'overview' | 'code'>('overview');
  const [toast, setToast] = useState({ show: false, message: '', type: 'error' as 'success' | 'error' });
  const router = useRouter();

  const handleOpenSpotlight = (project: Project, tab: 'overview' | 'code' = 'overview') => {
    setSelectedProject(project);
    setSpotlightTab(tab);
    setIsSpotlightOpen(true);
  };

  const handleLinkClick = (e: React.MouseEvent, project: Project, type: 'live' | 'github') => {
    const link = type === 'live' ? project.links.live : project.links.github;

    if (project.isPrivate || link === '#') {
      e.preventDefault();
      
      if (project.isPrivate) {
        setToast({
          show: true,
          message: `Akses ditutup: Proyek ini bersifat Private/NDA.`,
          type: 'error'
        });
      } else {
        setToast({
          show: true,
          message: `Link demo/source code belum tersedia untuk proyek ini.`,
          type: 'error'
        });
      }
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black/40">
      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast(prev => ({ ...prev, show: false }))} 
      />
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block border border-blue-500/20">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Proyek <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Karya terbaik yang telah saya bangun dari konsep hingga production
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
                { id: 'all', label: 'Semua' },
                { id: 'web', label: 'Web App' },
                { id: 'mobile', label: 'Mobile' },
                { id: 'design', label: 'Design' }
            ].map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id as any)}
                    className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                        filter === cat.id 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/40' 
                        : 'bg-white/5 border-white/5 text-zinc-500 hover:border-zinc-700 hover:text-white'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                        className="glass-card rounded-[2.5rem] overflow-hidden group border border-white/5 flex flex-col h-full"
                    >
                        <div className="flex flex-col h-full">
                            {/* Image Wrapper */}
                            <div 
                                onClick={() => handleOpenSpotlight(project)}
                                className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                            >
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                                        View Details
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                {/* Fixed height for tags to ensure titles align perfectly */}
                                <div className="flex flex-wrap gap-2.5 mb-6 h-[90px] content-start overflow-hidden">
                                    {project.tags.map(tag => {
                                        const iconMap: { [key: string]: string } = {
                                            'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                                            'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                                            'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                                            'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
                                            'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                                            'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                                            'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                                            'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                                            'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                                            'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                                        };
                                        const icon = iconMap[tag];
                                        return (
                                            <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-blue-400 text-[10px] font-black uppercase tracking-widest group-hover:border-blue-500/30 transition-all shadow-sm">
                                                {icon && <img src={icon} alt={tag} className="w-3.5 h-3.5 brightness-125" />}
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                                
                                <h3 
                                    onClick={() => handleOpenSpotlight(project)}
                                    className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors leading-tight cursor-pointer line-clamp-2 min-h-[3.5rem]"
                                >
                                    {project.title}
                                </h3>
                                
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                {/* Action Buttons - Pushed to bottom */}
                                <div className="mt-auto">
                                    <div className="grid grid-cols-2 gap-3 mb-8 relative z-20">
                                        <a 
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => handleLinkClick(e, project, 'live')}
                                            className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                                        >
                                            <ExternalLink size={14} />
                                            <span>Live Demo</span>
                                        </a>
                                        <a 
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => handleLinkClick(e, project, 'github')}
                                            className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
                                        >
                                            <Github size={14} />
                                            <span>Source Code</span>
                                        </a>
                                    </div>

                                    <div 
                                        onClick={() => handleOpenSpotlight(project)}
                                        className="group/link inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide cursor-pointer"
                                    >
                                        <span>Lihat Detail</span>
                                        <div className="w-8 h-[2px] bg-blue-500 group-hover:w-12 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>

      <ProjectSpotlight 
        project={selectedProject}
        isOpen={isSpotlightOpen}
        initialTab={spotlightTab}
        onClose={() => setIsSpotlightOpen(false)}
        onLinkClick={handleLinkClick}
      />
    </section>
  );
};

export default Projects;
