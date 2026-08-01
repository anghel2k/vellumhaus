"use client";

import { useEffect, useRef } from "react";

export default function BouncingMark() {
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mark = markRef.current;
    const surface = mark?.parentElement;
    if (!mark || !surface) return;

    let frame = 0;
    let previous = performance.now();
    let x = 0;
    let y = 0;
    let velocityX = 112;
    let velocityY = 83;
    let initialized = false;

    const measure = () => {
      const surfaceRect = surface.getBoundingClientRect();
      const markRect = mark.getBoundingClientRect();
      return { maxX: Math.max(0, surfaceRect.width - markRect.width), maxY: Math.max(0, surfaceRect.height - markRect.height) };
    };

    let bounds = measure();
    const place = () => {
      if (!initialized) { x = bounds.maxX * .68; y = bounds.maxY * .14; initialized = true; }
      x = Math.min(bounds.maxX, Math.max(0, x));
      y = Math.min(bounds.maxY, Math.max(0, y));
      mark.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    place();

    const refresh = () => { bounds = measure(); place(); };
    const observer = new ResizeObserver(refresh);
    observer.observe(surface);
    observer.observe(mark);
    window.addEventListener("orientationchange", refresh);
    window.visualViewport?.addEventListener("resize", refresh);

    const animate = (now: number) => {
      const delta = Math.min((now - previous) / 1000, .05);
      previous = now;
      x += velocityX * delta;
      y += velocityY * delta;
      if (x <= 0) { x = 0; velocityX = Math.abs(velocityX); }
      else if (x >= bounds.maxX) { x = bounds.maxX; velocityX = -Math.abs(velocityX); }
      if (y <= 0) { y = 0; velocityY = Math.abs(velocityY); }
      else if (y >= bounds.maxY) { y = bounds.maxY; velocityY = -Math.abs(velocityY); }
      mark.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("orientationchange", refresh);
      window.visualViewport?.removeEventListener("resize", refresh);
    };
  }, []);

  return (
    <div className="heroMark" ref={markRef} aria-hidden="true">
      <div className="heroMarkSpin"><img src="/brand/vh_mark_paper.svg" alt="" /></div>
    </div>
  );
}
