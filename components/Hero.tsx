'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';

interface HeroProps {
  introComplete?: boolean;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export default function Hero({ introComplete = false }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F70000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[#F70000]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-10 lg:px-[66px] grid lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">

        {/* Left */}
        <div className="space-y-4">
          <div>
            <motion.span
              className="block text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6E6E5]"
              style={{ lineHeight: 1.1 }}
              variants={fadeUp(0)}
              initial="hidden"
              animate={introComplete ? 'visible' : 'hidden'}
            >
              Hi, I&#39;m
            </motion.span>

            <motion.div
              layoutId="intro-name"
              className="gradient-text font-bold"
              style={{
                fontSize: 'clamp(5rem, 8.5vw, 7.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                display: 'block',
              }}
            >
              {portfolioData.personal.name}
            </motion.div>
          </div>

          <motion.div
            className="flex gap-3 pt-2 flex-wrap"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={introComplete ? 'visible' : 'hidden'}
          >
            <a
              href="/Abhinaya_Reddy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download CV
            </a>

            <a
              href={portfolioData.social.email}
              className="btn btn-secondary"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-4"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={introComplete ? 'visible' : 'hidden'}
          >
            <div className="w-3 h-3 bg-[#F70000] rounded-full animate-pulse" />
            <span className="text-[#A7A7A7] text-sm">Open to Work</span>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          className="relative flex items-center justify-center py-6"
          variants={fadeUp(0.15)}
          initial="hidden"
          animate={introComplete ? 'visible' : 'hidden'}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] max-w-[560px] aspect-square rounded-full bg-[#F70000]/12 blur-3xl" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60%] max-w-[460px] aspect-square rounded-full bg-[#F70000]/10 blur-2xl" />
          </div>

          <div className="relative w-full max-w-[440px] md:w-[95%] md:max-w-[520px] lg:max-w-[600px] aspect-square rounded-full p-[6px] bg-gradient-to-br from-[#F70000] via-[#FF3333] to-[#F70000] shadow-2xl shadow-[#F70000]/20 overflow-visible">
  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0A0A0A]">
    <Image
      src="/images/Abhinaya.jpeg"
      alt="Abhinaya"
      width={600}
      height={600}
      className="w-full h-full object-cover object-top"
      priority
    />
  </div>
</div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        variants={fadeUp(0.5)}
        initial="hidden"
        animate={introComplete ? 'visible' : 'hidden'}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#F70000] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#F70000] rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}