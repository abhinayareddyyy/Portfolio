'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import AnimatedName from '@/components/AnimatedName';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LEFT: Animated Name */}
          <div className="hidden md:block">
            <AnimatedName />
          </div>

          {/* RIGHT: Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {portfolioData.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#A7A7A7] hover:text-[#F70000] transition-colors text-sm font-medium tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile – name left, menu right */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-sm font-bold tracking-widest text-[#E6E6E5]">
              ABHINAYA REDDY
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#2A2A2A] mt-4">
            <ul className="flex flex-col gap-4">
              {portfolioData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#A7A7A7] hover:text-[#F70000] transition-colors font-medium block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
