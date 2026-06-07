'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const LETTERS = ['A', 'b', 'h', 'i', 'n', 'a', 'y', 'a'];
const STAGGER      = 0.13;   // delay between each letter
const LETTER_DUR   = 0.22;   // duration of each letter animation
const HOLD_MS      = 900;    // hold after last letter
const TOTAL_REVEAL = (LETTERS.length - 1) * STAGGER * 1000 + LETTER_DUR * 1000;
const EXIT_AT      = TOTAL_REVEAL + HOLD_MS;        // when overlay starts exiting
const DONE_AT      = EXIT_AT + 600;                 // when onComplete fires (after exit)

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), EXIT_AT);
    const t2 = setTimeout(onComplete,              DONE_AT);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/*
            layoutId="intro-name" — this whole block will animate to its
            matching element in Hero when the overlay exits.
          */}
          <motion.div
            layoutId="intro-name"
            style={{ display: 'flex', alignItems: 'flex-end', lineHeight: 1 }}
          >
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * STAGGER,
                  duration: LETTER_DUR,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                  fontWeight: 700,
                  color: '#F5F5F5',
                  letterSpacing: '-0.025em',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  userSelect: 'none',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
