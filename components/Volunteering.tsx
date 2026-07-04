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
    <section id="volunteering" className="py-10 relative overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-[66px]">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Participations & Volunteering
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-5 relative z-10 max-w-[1600px] mx-auto justify-items-center items-stretch"
            variants={containerVariants}
          >
            {portfolioData.volunteering.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];
              const style = CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.Volunteering;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#F70000]/50 hover:shadow-lg hover:shadow-[#F70000]/8 transition-all duration-300 relative overflow-hidden w-full max-w-[320px] h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${style.color}, transparent)` }}
                  />

                  {/* Header row */}
                  <div className="flex items-start justify-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
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
                  <h3 className="text-2xl font-bold text-[#E6E6E5] mb-3 leading-snug text-center">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A7A7A7] text-base leading-relaxed text-center">
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
