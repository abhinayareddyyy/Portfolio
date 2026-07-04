'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  const paragraphs = portfolioData.about.story.split('\n\n');

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-[66px]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 xl:gap-10 items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── LEFT: Profile Image ── */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
  <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] mx-auto">
    <div className="absolute -inset-4 bg-[#F70000]/10 rounded-[2rem] blur-2xl" />
    <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[#F70000] via-[#FF3333]/60 to-[#F70000]/20 shadow-2xl shadow-[#F70000]/20 w-full">
      <div className="rounded-2xl overflow-hidden bg-[#1A1A1A]">
        <Image
          src="/images/about page.png"
          alt="Abhinaya Reddy"
          width={800}
          height={1000}
          className="w-full h-auto object-contain block"
          priority
        />
      </div>
    </div>
  </div>
</motion.div>

          {/* ── RIGHT: Text Content ── */}
          <motion.div variants={itemVariants} className="space-y-4 xl:space-y-5 max-w-3xl text-left">
            {/* Label + heading */}
            <div>
              <p className="text-[#F70000] text-sm md:text-base font-semibold tracking-[0.28em] uppercase mb-4">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#E6E6E5] leading-[0.95]">
                Developer{' '}
                <span className="text-[#F70000]">•</span>{' '}
                Designer{' '}
                <span className="text-[#F70000]">•</span>{' '}
                Engineer
              </h2>
            </div>

            {/* Story paragraphs */}
            {paragraphs.map((para, i) => (
              <p key={i} className="text-lg xl:text-xl text-[#A7A7A7] leading-relaxed">
                {para}
              </p>
            ))}

            {/* Closing with highlighted words */}
            <p className="text-lg xl:text-xl text-[#E6E6E5]/80 leading-relaxed">
              Currently, I&#39;m focused on{' '}
              <span className="text-[#F70000] font-semibold">web development</span>,{' '}
              <span className="text-[#F70000] font-semibold">software engineering</span>,
              {' '}exploring{' '}
              <span className="text-[#F70000] font-semibold">AI</span>,
              {' '}and building meaningful projects that challenge me to grow as both an engineer and a creator.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
