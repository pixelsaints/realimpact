"use client";
import { useEffect } from "react";
import TextMarquee from "@/components/ui/text-marquee";
import gsap from "@/lib/gsap";
import { horizontalScroll } from "@/lib/animations/scrollTrigger";

export default function AboutSection() {

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const track = sectionRef.current.querySelector(".services-track");

  //     if (!track) return;

  //     const maxScroll =
  //       track.scrollWidth - window.innerWidth;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: `+=${maxScroll}`,
  //         scrub: 1,
  //         pin: true,
  //       }
  //     });

  //     // Horizontal movement
  //     tl.to(track, {
  //       x: -maxScroll,
  //       ease: "none",
  //     });

  //     // Progress bar
  //     tl.to(".services-progress-bar", {
  //       width: "100%",
  //       ease: "none",
  //     }, 0);

  //     // Image parallax
  //     gsap.to(".service-image", {
  //       scale: 1,
  //       stagger: 0.2,

  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: `+=${maxScroll}`,
  //         scrub: true,
  //       }
  //     });

  //     // Active card depth
  //     gsap.to(".service-card", {
  //       rotateY: 0,
  //       z: 0,

  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: `+=${maxScroll}`,
  //         scrub: true,
  //       }
  //     });

  //   }, sectionRef);

  //   return () => {
  //     ctx.revert();
  //   };

  // }, []);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     horizontalScroll(
  //       ".horizontal-section",
  //       ".horizontal-wrapper"
  //     );
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <section className=" bg-[url('/images/bg-about.webp')] bg-center bg-cover bg-fixed">
      <div className="overflow-x-clip z-10 py-4">
        <TextMarquee />
      </div>
      <div className="py-32">

      </div>

      {/* <section className="horizontal-section overflow-hidden">

        <div className="horizontal-wrapper flex">

          <div className="panel min-w-screen h-screen bg-black text-white flex items-center justify-center">
            <h2 className="text-7xl">
              Real Impact
            </h2>
          </div>

          <div className="panel min-w-screen h-screen bg-zinc-900 text-white flex items-center justify-center">
            <h2 className="text-7xl">
              Broadcast Solutions
            </h2>
          </div>

          <div className="panel min-w-screen h-screen bg-neutral-800 text-white flex items-center justify-center">
            <h2 className="text-7xl">
              Live Production
            </h2>
          </div>

          <div className="panel min-w-screen h-screen bg-stone-900 text-white flex items-center justify-center">
            <h2 className="text-7xl">
              Everything At Scale
            </h2>
          </div>

        </div>
      </section> */}
    </section>
  )
}
