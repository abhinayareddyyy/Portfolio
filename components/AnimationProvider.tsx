'use client';

import { useEffect } from 'react';

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import GSAP
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    script2.async = true;

    script1.onload = () => {
      document.body.appendChild(script2);
      
      script2.onload = () => {
        const gsap = (window as any).gsap;
        if (gsap) {
          gsap.registerPlugin((window as any).ScrollTrigger);
        }
      };
    };

    document.body.appendChild(script1);

    return () => {
      try {
        if (document.body.contains(script1)) document.body.removeChild(script1);
        if (document.body.contains(script2)) document.body.removeChild(script2);
      } catch (e) {
        // Handle error silently
      }
    };
  }, []);

  return <>{children}</>;
}
