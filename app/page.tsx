'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Volunteering from '@/components/Volunteering';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AnimationProvider from '@/components/AnimationProvider';
import CustomCursor from '@/components/CustomCursor';
import DietCokeScrollbar from '@/components/DietCokeScrollbar';
import IntroOverlay from '@/components/IntroOverlay';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleDone = useCallback(() => setIntroComplete(true), []);

  return (
    <AnimationProvider>
      {/*
        IntroOverlay lives OUTSIDE SmoothScroll / AnimationProvider
        so Lenis and stagger animations don't interfere.
        AnimatePresence lets layoutId run the shared-element transition
        when the overlay exits.
      */}
      <AnimatePresence>
        {!introComplete && <IntroOverlay key="intro" onComplete={handleDone} />}
      </AnimatePresence>

      <SmoothScroll>
        <CustomCursor />
        <DietCokeScrollbar />
        <Navbar />
        <Hero introComplete={introComplete} />
        <MarqueeBanner />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Volunteering />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </SmoothScroll>
    </AnimationProvider>
  );
}
