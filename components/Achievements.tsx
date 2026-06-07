'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import { X, Eye, Award, GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const ICONS = [Award, GraduationCap];

export default function Achievements() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Achievements
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 relative z-10"
            variants={containerVariants}
          >
            {portfolioData.achievements.map((achievement, idx) => {
              const Icon = ICONS[idx] ?? Award;
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 transition-all duration-300 hover:border-[#F70000]/60 hover:shadow-xl hover:shadow-[#F70000]/10 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F70000] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* View certificate button */}
                  {achievement.certificate && (
                    <button
                      onClick={() => setLightbox(achievement.certificate)}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 bg-[#F70000] text-white text-xs font-bold rounded-lg z-10"
                    >
                      <Eye size={11} /> View
                    </button>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#F70000]/12 border border-[#F70000]/20 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-[#F70000]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#E6E6E5] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-[#F70000] text-sm font-semibold mb-1">
                    {achievement.issuer}
                  </p>
                  <p className="text-[#7D7C7C] text-xs font-mono mb-4">
                    {achievement.date}
                  </p>
                  <p className="text-[#A7A7A7] text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {achievement.certificate && (
                    <p className="mt-5 text-xs text-[#7D7C7C] flex items-center gap-1">
                      <Eye size={10} /> Hover to view certificate
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-[#F70000] transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X size={28} />
              </button>
              <Image
                src={lightbox}
                alt="Certificate"
                width={900}
                height={650}
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
