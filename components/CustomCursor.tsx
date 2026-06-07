'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(undefined);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX}px`;
        innerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.12);
      if (outerRef.current) {
        outerRef.current.style.left = `${outerPos.current.x}px`;
        outerRef.current.style.top = `${outerPos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    document.addEventListener('mousemove', move);
    rafId.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label, .card'
    );
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    // Observe DOM for new interactive elements
    const observer = new MutationObserver(() => {
      const newInteractables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, .card'
      );
      newInteractables.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className={`cursor-outer ${hovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className={`cursor-inner ${hovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
