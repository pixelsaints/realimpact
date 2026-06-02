"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import FlipText from "@/components/ui/flipText";

export default function HeroSection() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const q = self.selector;
      const hero = heroRef.current;

      if (!hero) return;

      // NORMAL
      gsap.set(q(".wrap-heading-3d:not(.alt) .front"), {
        rotationX: 90,
        yPercent: -100,
        transformOrigin: "bottom center",
      });

      gsap.set(q(".wrap-heading-3d:not(.alt) .back"), {
        rotationX: 0,
        yPercent: 0,
        transformOrigin: "bottom center",
      });

      // ALT (opposite direction)
      gsap.set(q(".wrap-heading-3d.alt .front"), {
        rotationX: -90,
        yPercent: 100,
        transformOrigin: "top center",
      });

      gsap.set(q(".wrap-heading-3d.alt .back"), {
        rotationX: 0,
        yPercent: 0,
        transformOrigin: "top center",
      });

      gsap.set(hero, {
        opacity: 0,
      })

      const tl = gsap.timeline();

      tl.to(hero, {
        opacity: 1,
        ease: "power3.in",
        duration: 1
      })

      // NORMAL
      tl.to(q(".wrap-heading-3d:not(.alt) .front"), {
        rotationX: 0,
        yPercent: 0,
        duration: 1.4,
        ease: "back.inOut(1.4)",
      }, 0).to(q(".wrap-heading-3d:not(.alt) .back"), {
        rotationX: 90,
        yPercent: 100,
        duration: 1.4,
        ease: "back.inOut(1.4)",
      }, 0);

      // ALT
      tl.to(q(".wrap-heading-3d.alt .front"), {
        rotationX: 0,
        yPercent: 0,
        duration: 1.4,
        ease: "back.inOut(1.4)",
      }, 0).to(q(".wrap-heading-3d.alt .back"), {
        rotationX: -90,
        yPercent: -100,
        duration: 1.4,
        ease: "back.inOut(1.4)",
      }, 0);

      tl.from(q(".text-sticker"), {
        y: 80,
        rotate: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: "back.out(1.7)",
      }, 0.5);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="hero flex flex-col items-center justify-center" ref={heroRef}>
        <div className="container">
          <div className="hero-title flex flex-col gap-4 lg:gap-6">
            <FlipText>
              <div className="flex lg:flex-row lg:items-center justify-center lg:gap-6 gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative w-fit">
                    <div className="h1 text-white">Real</div>
                  </div>
                  <div className="relative w-[45%] hidden lg:flex">
                    <video autoPlay muted loop playsInline poster="/images/hero-image-1.webp" className="w-full lg:h-[12em] object-cover object-center border border-white/30 rounded-lg">
                      <source src="/videos/video-03.webm" type="video/webm" />
                      <source src="/videos/video-03.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="relative w-fit h-full">
                  <div className="h1 alt text-white">IMPACT</div>
                  <span className="text-sticker absolute right-[5%] top-[55%] lg:top-[35%] bg-cyan-400">With Strategy</span>
                </div>
              </div>
            </FlipText>
            <FlipText alt={true}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="relative lg:w-[35%]">
                  <span className="text-sticker absolute right-[75%] lg:right-[-5%] bottom-[-5%] lg:bottom-auto lg:top-[30%] -rotate-4 bg-amber-300">In</span>
                  <video autoPlay muted loop playsInline className="w-full lg:h-[14em] object-cover object-center border border-white/30 rounded-lg" poster="/images/hero-image-2.webp">
                    <source src="/videos/video-04.webm" type="video/webm" />
                    <source src="/videos/video-04.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative">
                  <div className="relative">
                    <div className="h1 alt2 text-white">Everything</div>
                    <span className="text-sticker absolute right-[5%] top-[35%] -rotate-4 bg-fuchsia-300">At Scale</span>
                  </div>
                  <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 items-center px-4 gap-6 lg:gap-0 mt-6 lg:mt-0">
                    <div className="hero-icons flex flex-row items-center">
                      <img src="/icons/sports-icon.svg" alt="" />
                      <h4>Live 4k <br /> Broadcast</h4>
                    </div>
                    <div className="hero-icons flex flex-row items-center">
                      <img src="/icons/entertainment-icon.svg" alt="" />
                      <h4>Entertainment <br /> & Tv Shows</h4>
                    </div>
                    <div className="hero-icons flex flex-row items-center">
                      <img src="/icons/4k-solutions-icon.svg" alt="" />
                      <h4>RF & 4k <br /> Solutions</h4>
                    </div>
                    <div className="hero-icons flex flex-row items-center">
                      <img src="/icons/fly-pack-icon.svg" alt="" />
                      <h4>FLY PACK & OB SOLUTIONS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </FlipText>
            <div className="grid lg:hidden grid-cols-2 lg:grid-cols-4 items-center px-4 gap-6 lg:gap-0 mt-6 lg:mt-0">
              <div className="hero-icons flex flex-row items-center">
                <img src="/icons/sports-icon.svg" alt="" />
                <h4>Live 4k <br /> Broadcast</h4>
              </div>
              <div className="hero-icons flex flex-row items-center">
                <img src="/icons/entertainment-icon.svg" alt="" />
                <h4>Entertainment <br /> & Tv Shows</h4>
              </div>
              <div className="hero-icons flex flex-row items-center">
                <img src="/icons/4k-solutions-icon.svg" alt="" />
                <h4>RF & 4k <br /> Solutions</h4>
              </div>
              <div className="hero-icons flex flex-row items-center">
                <img src="/icons/fly-pack-icon.svg" alt="" />
                <h4>FLY PACK & OB SOLUTIONS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
