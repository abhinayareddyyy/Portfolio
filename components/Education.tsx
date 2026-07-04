'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const TYPE_CONFIG: Record<string, { icon: typeof GraduationCap; color: string; bg: string }> = {
  University:    { icon: GraduationCap, color: '#F70000', bg: '#F70000' },
  'Junior College': { icon: BookOpen,      color: '#A7A7A7', bg: '#A7A7A7' },
  School:        { icon: School,         color: '#7D7C7C', bg: '#7D7C7C' },
};

export default function Education() {
  return (
    <section id="education" className="py-10 bg-[#111111] relative overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-[66px]">
        {/* background glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education
          </motion.h2>

          {/* Card list with connecting line */}
          <div className="relative max-w-[1600px] mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#F70000] via-[#2A2A2A] to-transparent" />

            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => {
                const cfg = TYPE_CONFIG[edu.type] ?? TYPE_CONFIG.School;
                const Icon = cfg.icon;
                const isFirst = index === 0;

                return (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-3 top-6 w-6 h-6 rounded-full flex items-center justify-center border-2"
                      style={{
                        background: isFirst ? '#F70000' : '#1A1A1A',
                        borderColor: isFirst ? '#F70000' : '#2A2A2A',
                        boxShadow: isFirst ? '0 0 12px rgba(247,0,0,0.5)' : 'none',
                      }}
                    >
                      {isFirst && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>

                    {/* Card */}
                    <motion.div
                      className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 lg:p-7 hover:border-[#F70000]/50 hover:shadow-lg hover:shadow-[#F70000]/8 transition-all duration-300 relative overflow-hidden w-full"
                      whileHover={{ x: 4 }}
                    >
                      {/* Animated left accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F70000] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                        <div className="flex items-center gap-3">
                          {/* Icon badge */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}30` }}
                          >
                            <Icon size={18} style={{ color: cfg.color }} />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-[#E6E6E5] leading-tight">
                              {edu.institution}
                            </h3>
                            <p className="text-[#A7A7A7] text-base mt-0.5">{edu.degree}</p>
                          </div>
                        </div>

                        {/* Right meta */}
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {/* Score badge */}
                          <span
                            className="text-sm font-bold px-3 py-1 rounded-full"
                            style={{
                              color: cfg.color,
                              background: `${cfg.color}14`,
                              border: `1px solid ${cfg.color}35`,
                            }}
                          >
                            {edu.score}
                          </span>
                          {/* Period */}
                          <span className="text-[#7D7C7C] text-xs font-mono">{edu.period}</span>
                        </div>
                      </div>

                      {/* Coursework chips (only for GCET) */}
                      {edu.coursework.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                          <p className="text-[#7D7C7C] text-xs font-semibold uppercase tracking-widest mb-3">
                            Relevant Coursework
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1 bg-[#0A0A0A] border border-[#2A2A2A] text-[#A7A7A7] text-xs rounded-full font-medium hover:border-[#F70000]/50 hover:text-[#F70000] transition-colors duration-200"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
