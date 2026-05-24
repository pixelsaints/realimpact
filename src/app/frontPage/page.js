"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/lib/gsap";
import { reveal } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function FrontPage() {
  const scope = useGSAP(() => {
    gsap.from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top 80%",
        toggleActions: "play none play reverse",
      },
    });

    const infoBoxes = document.querySelectorAll(".info-box");

    gsap.utils.toArray(infoBoxes).forEach((box) => {
      gsap.from(box, {
        ...reveal,
        scrollTrigger: {
          trigger: box,
          start: "top 75%",
          markers: true,
        },
      });
    })
  });

  return (
    <section ref={scope} style={{ padding: "80px 24px" }}>
      <h1 className="hero-title">Front Page GSAP Demo</h1>

      <div className="box-wrap flex flex-col items-center justify-center gap-8 mt-12">
        <div className="info-box h-screen bg-red-300">
          First div
        </div>

        <div className="info-box h-screen bg-red-500">
          Second div
        </div>

        <div className="info-box h-screen bg-red-600">
          Third div
        </div>
      </div>
    </section>
  );
}