'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';

/* ─── Devicon class map ─── */
const DEVICON: Record<string, string> = {
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  React: 'devicon-react-plain colored',
  Java: 'devicon-java-plain colored',
  Python: 'devicon-python-plain colored',
  C: 'devicon-c-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-plain',
  'VS Code': 'devicon-vscode-plain colored',
  Canva: 'devicon-canva-plain colored',
  Figma: 'devicon-figma-plain colored',
  'MERN Stack': 'devicon-mongodb-plain colored',
};

/* ─── Category definitions ─── */
const TABS = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'MERN Stack'],
  },
  {
    id: 'programming',
    label: 'Programming',
    skills: ['C', 'Java', 'Python', 'MySQL'],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    skills: ['DSA', 'DBMS', 'Operating Systems', 'Web Technologies', 'Object Oriented Programming', 'Software Engineering', 'Artificial Intelligence'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Canva', 'Figma'],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    skills: ['Communication', 'Leadership', 'Problem Solving', 'Public Speaking', 'Event Management', 'Teamwork'],
  },
];

const ALL_SKILLS = TABS.flatMap((t) => t.skills);

/* ─── Letter badge fallback ─── */
function LetterBadge({ name }: { name: string }) {
  const abbr = name.split(/[\s&/()]+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
  return (
    <span className="text-xl font-black text-[#F70000]" style={{ fontFamily: 'monospace' }}>
      {abbr}
    </span>
  );
}

/* ─── Skill card ─── */
function SkillCard({ name }: { name: string }) {
  const iconClass = DEVICON[name];
  return (
    <motion.div
      className="group bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 aspect-square w-full max-w-[180px]
                 hover:border-[#F70000]/60 hover:bg-[#1c1c1c] transition-all duration-300 cursor-default"
      whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(247,0,0,0.15)' }}
      layout
    >
      <div className="w-16 h-16 flex items-center justify-center">
        {iconClass ? (
          <i className={`${iconClass} text-5xl leading-none`} />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-[#F70000]/12 border border-[#F70000]/20 flex items-center justify-center">
            <LetterBadge name={name} />
          </div>
        )}
      </div>
      <span className="text-[#E6E6E5] text-sm font-medium text-center leading-tight group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

/* ─── Marquee row ─── */
function MarqueeRow({ skills, reverse = false, speed = 65 }: { skills: string[]; reverse?: boolean; speed?: number }) {
  const repeated = [...skills, ...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-4 w-max"
        style={{ animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite` }}
      >
        {repeated.map((s, i) => (
          <span
            key={i}
            className="px-5 py-2.5 rounded-full border border-[#2A2A2A] bg-[#0A0A0A] text-[#A7A7A7] text-base font-medium whitespace-nowrap hover:border-[#F70000] hover:text-[#F70000] transition-colors duration-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: 'easeOut' },
  }),
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="skills" className="py-10 bg-[#0A0A0A] relative overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-[66px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-[#A7A7A7] text-lg max-w-2xl mx-auto">
            Technologies, concepts and tools I actively work with.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          className="flex flex-wrap gap-3 mb-7 justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#F70000] text-white shadow-lg shadow-[#F70000]/30 scale-105'
                  : 'bg-transparent border border-[#2A2A2A] text-[#A7A7A7] hover:border-[#F70000]/50 hover:text-[#E6E6E5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={`grid gap-5 mb-10 mx-auto justify-items-center items-stretch ${
              activeTab === 'soft'
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 max-w-[1100px]'
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-[1320px]'
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {active.skills.map((skill, i) => (
              <motion.div key={skill} custom={i} variants={cardVariants} initial="hidden" animate="visible">
                <SkillCard name={skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Marquee full-bleed */}
      <div className="border-t border-[#2A2A2A] pt-7 space-y-3">
        <p className="text-center text-[#7D7C7C] text-sm tracking-widest uppercase font-semibold mb-6">
          All Skills
        </p>
        <MarqueeRow skills={ALL_SKILLS} reverse={false} speed={70} />
        <MarqueeRow skills={[...ALL_SKILLS].reverse()} reverse={true} speed={85} />
      </div>
    </section>
  );
}
