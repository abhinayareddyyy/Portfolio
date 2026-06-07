'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function DietCokeScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const rafId = useRef<number>(undefined);

  // Smooth animated values
  const currentY = useRef(0);
  const targetY = useRef(0);
  const currentRot = useRef(0);
  const targetRot = useRef(0);
  const prefersReduced = useRef(false);

  const getScrollFraction = () => {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - doc.clientHeight;
    return maxScroll <= 0 ? 0 : Math.min(1, window.scrollY / maxScroll);
  };

  const getTrackHeight = () => {
    if (!trackRef.current || !thumbRef.current) return { track: 0, thumb: 0 };
    return {
      track: trackRef.current.clientHeight,
      thumb: thumbRef.current.clientHeight,
    };
  };

  const updateTargets = useCallback(() => {
    const frac = getScrollFraction();
    const { track, thumb } = getTrackHeight();
    targetY.current = frac * (track - thumb);
    // Rotation tied directly to scroll progress: 0° at top → 90° at bottom
    targetRot.current = frac * 90;
  }, []);

  const animate = useCallback(() => {
    if (!thumbRef.current) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const speed = prefersReduced.current ? 1 : 0.1;

    currentY.current = lerp(currentY.current, targetY.current, speed);
    currentRot.current = lerp(currentRot.current, targetRot.current, speed);

    thumbRef.current.style.transform =
      `translateY(${currentY.current.toFixed(2)}px) rotate(${currentRot.current.toFixed(2)}deg)`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartScroll.current = window.scrollY;
    document.body.style.userSelect = 'none';
    if (thumbRef.current) thumbRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartY.current = e.touches[0].clientY;
    dragStartScroll.current = window.scrollY;
  }, []);

  useEffect(() => {
    prefersReduced.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => updateTargets();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !trackRef.current || !thumbRef.current) return;
      const { track, thumb } = getTrackHeight();
      const dy = e.clientY - dragStartY.current;
      const frac = dy / (track - thumb);
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      window.scrollTo({ top: dragStartScroll.current + frac * maxScroll, behavior: 'instant' });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !trackRef.current || !thumbRef.current) return;
      const { track, thumb } = getTrackHeight();
      const dy = e.touches[0].clientY - dragStartY.current;
      const frac = dy / (track - thumb);
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      window.scrollTo({ top: dragStartScroll.current + frac * maxScroll, behavior: 'instant' });
    };

    const stopDrag = () => {
      isDragging.current = false;
      document.body.style.userSelect = '';
      if (thumbRef.current) thumbRef.current.style.cursor = 'grab';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', stopDrag);

    updateTargets();
    currentY.current = targetY.current;
    currentRot.current = targetRot.current;
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDrag);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateTargets, animate]);

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="fixed top-6 bottom-6 z-[99990] flex flex-col items-center pointer-events-none"
      style={{ right: 'clamp(12px, 2vw, 24px)', width: 'clamp(32px, 4vw, 58px)' }}
    >
      {/* Track line */}
      <div
        className="absolute inset-x-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #2A2A2A 12%, #2A2A2A 88%, transparent)',
        }}
      />

      {/* Thumb */}
      <div
        ref={thumbRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        className="absolute top-0 left-1/2 -translate-x-1/2 will-change-transform"
        style={{
          width: 'clamp(32px, 4vw, 58px)',
          cursor: 'grab',
          pointerEvents: 'auto',
          padding: '4px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/diet coke scroll bar.png"
          alt=""
          draggable={false}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 2px 10px rgba(247,0,0,0.2))',
            transition: 'filter 0.25s ease',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLImageElement).style.filter =
              'drop-shadow(0 4px 18px rgba(247,0,0,0.55))';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLImageElement).style.filter =
              'drop-shadow(0 2px 10px rgba(247,0,0,0.2))';
          }}
        />
      </div>
    </div>
  );
}
