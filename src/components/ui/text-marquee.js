"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const marqueeItems = [
  "30+ Years of excellence",
  "Trusted by the world's biggest brands",
  "Powered by passion",
  "Delivered with precision",
];

export default function TextMarquee() {

  const marqueeRef = useRef(null);

  useEffect(() => {

    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 24,
      ease: "none",
      repeat: -1,
    });

  }, []);

  return (
    <section className="text-marquee">
      <div ref={marqueeRef} className="flex w-max items-center running-text">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0"
          >
            <h3 className="px-8 text-white">
              {item}
            </h3>
            <div className="h-3 w-3 rounded-full bg-pri-300 shrink-0" />
          </div>
        ))}
      </div>
      <div className="running-bg"></div>
    </section>
  );
}