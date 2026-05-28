"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  count = 0,
  suffix = "",
  text = "",
  className = "",
}) {
  const counterRef = useRef(null);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const counter = counterRef.current;
    const target = Number(count) || 0;
    let frame;

    if (!counter) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1400;
        const startTime = performance.now();

        const updateCount = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setDisplayCount(Math.round(target * easedProgress));

          if (progress < 1) {
            frame = requestAnimationFrame(updateCount);
          }
        };

        frame = requestAnimationFrame(updateCount);
        observer.unobserve(counter);
      },
      { threshold: 0.6 }
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <div
      ref={counterRef}
      className={`counter-item flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <div className="flex flex-row items-start gap-2 text-4xl font-bold text-white">
        <span
          className="counter-value font-mono text-8xl font-normal"
          data-target={count}
        >
          {displayCount}
        </span>
        {suffix ? (
          <span className="text-pri-400/70 font-light">{suffix}</span>
        ) : null}
      </div>
      {text ? <p className="text-white/70">{text}</p> : null}
    </div>
  );
}
