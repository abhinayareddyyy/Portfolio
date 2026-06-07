'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-[#A7A7A7] text-sm">
            © {currentYear} Abhinaya Reddy. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className={`p-3 rounded-lg bg-[#F70000]/10 border border-[#F70000]/20 text-[#F70000] hover:bg-[#F70000]/20 transition-all ${
              showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            whileHover={{ y: -3 }}
            animate={{ opacity: showScroll ? 1 : 0 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
