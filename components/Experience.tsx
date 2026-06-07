'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F70000] via-[#F70000]/40 to-transparent" />

            <div className="space-y-10">
              {portfolioData.experience.map((exp) => (
                <motion.div key={exp.id} variants={itemVariants} className="relative pl-24">
                  <div className="absolute left-5 top-6 w-6 h-6 bg-[#F70000] rounded-full border-4 border-[#111111] shadow-lg shadow-[#F70000]/30" />

                  <motion.div
                    className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#F70000]/60 hover:shadow-lg hover:shadow-[#F70000]/10 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#E6E6E5]">{exp.company}</h3>
                        <p className="text-[#F70000] font-semibold text-sm mt-0.5">{exp.role}</p>
                      </div>
                      <div className="flex gap-2 items-center flex-wrap">
                        <span className="px-3 py-1 bg-[#F70000]/10 border border-[#F70000]/20 text-[#F70000] text-xs rounded-full font-medium">
                          {exp.type}
                        </span>
                        <span className="text-[#A7A7A7] text-xs font-mono">{exp.date}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 text-[#A7A7A7] text-sm leading-relaxed">
                          <span className="text-[#F70000] mt-0.5 shrink-0">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
