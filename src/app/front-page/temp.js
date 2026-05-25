"use client";
import { useEffect } from "react";
import TextMarquee from "@/components/ui/text-marquee";
import gsap from "@/lib/gsap";
import { horizontalScroll } from "@/lib/animations/scrollTrigger";

export default function AboutSection() {

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
