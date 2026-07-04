'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import AnimatedName from '@/components/AnimatedName';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#2A2A2A]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-10 lg:px-[66px]">
        <div className="flex justify-between items-center h-16">

          {/* LEFT: Animated Name */}
          <div className="hidden xl:block flex-shrink-0 whitespace-nowrap">
            <AnimatedName />
          </div>

          <div className="hidden md:flex xl:hidden flex-shrink-0 items-center">
            <span className="text-sm font-bold tracking-[0.35em] text-[#E6E6E5] whitespace-nowrap">
              ABHINAYA REDDY
            </span>
          </div>

          {/* RIGHT: Desktop Navigation */}
<ul className="hidden md:flex items-center gap-6 lg:gap-8 flex-nowrap shrink-0 ml-auto">
  {portfolioData.navigation
    .filter((item) =>
      ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].includes(item.label)
    )
    .map((item) => (
      <li key={item.href}>
        <a
          href={item.href}
          className="text-[#A7A7A7] hover:text-[#F70000] transition-colors text-sm font-medium tracking-wide whitespace-nowrap"
        >
          {item.label}
        </a>
      </li>
    ))}

  {/* More Dropdown */}
  <li className="relative group">
    <button className="text-[#A7A7A7] hover:text-[#F70000] transition-colors text-sm font-medium tracking-wide flex items-center gap-1">
      More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div className="absolute right-0 mt-3 w-52 rounded-xl bg-[#111111] border border-[#2A2A2A] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {portfolioData.navigation
        .filter((item) =>
          ['Achievements', 'Volunteering', 'Education'].includes(item.label)
        )
        .map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-5 py-3 text-sm text-[#A7A7A7] hover:text-[#F70000] hover:bg-white/5 transition-colors"
          >
            {item.label}
          </a>
        ))}
    </div>
  </li>
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
