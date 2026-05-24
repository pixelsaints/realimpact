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
        {/* <div className="container text-white text-center">
          <section className="about">
            <h2 className="about-title">Real Impact</h2>
            <img
              src="https://images.unsplash.com/photo-1777971911576-de6d56a93681?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="about-image parallax-image"
            />
          </section>
        </div> */}
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
