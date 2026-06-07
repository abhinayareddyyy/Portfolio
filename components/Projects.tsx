'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Projects
          </motion.h2>

          <div className="space-y-20 relative z-10">
            {portfolioData.projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
                  whileHover={{ scale: 1.005 }}
                >
                  {/* Image side */}
                  <div className="w-full md:w-1/2 relative">
                    <motion.div
                      className="relative rounded-xl overflow-hidden border border-[#2A2A2A] group-hover:border-[#F70000] transition-all duration-500"
                      whileHover={{
                        boxShadow: '0 0 40px rgba(247,0,0,0.25), 0 0 80px rgba(247,0,0,0.1)',
                        scale: 1.02,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <div className="aspect-video relative bg-[#1A1A1A]">
                        <Image
                          src={project.image || '/images/NeuroLift.jpg'}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>

                    {/* Timeline connector */}
                    <div className={`hidden md:block absolute top-1/2 ${isLeft ? '-right-5' : '-left-5'} w-10 h-[2px] bg-gradient-to-r from-[#F70000] to-transparent`} />
                  </div>

                  {/* Content side */}
                  <div className="w-full md:w-1/2 space-y-4">
                    {/* Index */}
                    <span className="text-[#F70000] font-mono text-sm font-bold tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-[#E6E6E5] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#A7A7A7] leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#A7A7A7]">
                          <span className="text-[#F70000]">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#F70000]/10 border border-[#F70000]/25 text-[#F70000] text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F70000] text-[#E6E6E5] hover:text-[#F70000] rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <Github size={15} /> GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-[#F70000] hover:bg-[#FF2222] text-white rounded-lg text-sm font-medium transition-all duration-300"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
