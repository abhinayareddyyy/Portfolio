'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      try {
        const LenisModule = await import('lenis');
        const Lenis = LenisModule.default || LenisModule;

        lenis = new (Lenis as any)({
          duration: 0.8,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 1.5,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch {
        // Fallback: native smooth scroll already set in CSS
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
