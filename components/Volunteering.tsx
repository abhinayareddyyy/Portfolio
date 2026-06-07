'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Cpu, FlaskConical, Mic2, Heart, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CATEGORY_STYLES: Record<string, { color: string; bg: string; label: string }> = {
  Hackathon: { color: '#F70000', bg: '#F70000/12', label: 'Hackathon' },
  Anchoring: { color: '#F59E0B', bg: '#F59E0B/12', label: 'Anchoring' },
  Volunteering: { color: '#22C55E', bg: '#22C55E/12', label: 'Volunteering' },
};

const ICONS = [Cpu, FlaskConical, Mic2, Heart, Star];

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Participations & Volunteering
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10"
            variants={containerVariants}
          >
            {portfolioData.volunteering.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              const style = CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.Volunteering;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F70000]/50 hover:shadow-lg hover:shadow-[#F70000]/8 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${style.color}, transparent)` }}
                  />

                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${style.color}18` }}
                    >
                      <Icon size={18} style={{ color: style.color }} />
                    </div>

                    {/* Category pill */}
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{
                        color: style.color,
                        borderColor: `${style.color}40`,
                        background: `${style.color}10`,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#E6E6E5] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A7A7A7] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
