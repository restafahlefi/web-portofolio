"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projects, Project } from '@/data/projects';
import ProjectSpotlight from './ProjectSpotlight';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [spotlightTab, setSpotlightTab] = useState<'overview' | 'code'>('overview');
  const router = useRouter();

  const handleOpenSpotlight = (project: Project, tab: 'overview' | 'code' = 'overview') => {
    setSelectedProject(project);
    setSpotlightTab(tab);
    setIsSpotlightOpen(true);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-black/40">
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
                    onClick={() => setFilter(cat.id)}
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
                        <div 
                            onClick={() => router.push(`/projects/${project.id}`)}
                            className="flex flex-col h-full cursor-pointer"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    <a 
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a 
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
                                    >
                                        <Github size={14} />
                                        <span>Source Code</span>
                                    </a>
                                </div>

                                <div className="mt-auto">
                                    <div className="group/link inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide">
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
      />
    </section>
  );
};

export default Projects;
