'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const LETTERS = 'ABHINAYA REDDY'.split('');

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

function AnimatedLetter({
  char,
  index,
  isHovered,
  mouseX,
  mouseY,
}: {
  char: string;
  index: number;
  isHovered: boolean;
  mouseX: number;
  mouseY: number;
  containerRef: React.RefObject<HTMLSpanElement | null>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!isHovered || !ref.current) {
      x.set(0);
      y.set(0);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const letterCx = rect.left + rect.width / 2;
    const letterCy = rect.top + rect.height / 2;
    const dx = mouseX - letterCx;
    const dy = mouseY - letterCy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRepel = 80;
    const force = Math.max(0, 1 - dist / maxRepel);
    const repelX = -dx * force * 0.45;
    const repelY = -dy * force * 0.45;
    x.set(repelX);
    y.set(repelY);
  }, [isHovered, mouseX, mouseY, x, y]);

  useEffect(() => {
    if (!isHovered) {
      x.set(0);
      y.set(0);
    }
  }, [isHovered, x, y]);

  if (char === ' ') {
    return <span className="inline-block w-3" />;
  }

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      style={{
        x: springX,
        y: springY,
        transition: `color 0.3s ease`,
        color: isHovered ? '#F70000' : '#E6E6E5',
        textShadow: isHovered
          ? '0 0 20px rgba(247,0,0,0.6), 0 0 40px rgba(247,0,0,0.3)'
          : 'none',
        transitionDelay: `${index * 0.02}s`,
        display: 'inline-block',
        scale: isHovered ? 1.04 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
    >
      {char}
    </motion.span>
  );
}

export default function AnimatedName() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springMagnetX = useSpring(magnetX, { stiffness: 200, damping: 25 });
  const springMagnetY = useSpring(magnetY, { stiffness: 200, damping: 25 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      setMouse({ x: e.clientX, y: e.clientY });
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.12;
      const dy = (e.clientY - cy) * 0.12;
      magnetX.set(dx);
      magnetY.set(dy);
    },
    [magnetX, magnetY]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    magnetX.set(0);
    magnetY.set(0);
  };

  return (
    <motion.span
      ref={containerRef}
      className="font-bold text-sm tracking-widest select-none"
      style={{
        x: prefersReducedMotion ? 0 : springMagnetX,
        y: prefersReducedMotion ? 0 : springMagnetY,
        letterSpacing: '0.12em',
        userSelect: 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {LETTERS.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          isHovered={isHovered}
          mouseX={mouse.x}
          mouseY={mouse.y}
          containerRef={containerRef}
        />
      ))}
    </motion.span>
  );
}
