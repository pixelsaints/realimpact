"use client";

import { useEffect } from "react";
import gsap from "gsap";


export default function FrontPage() {

  useEffect(() => {

    const hero = document.querySelector(".hero");

    // NORMAL
    gsap.set(".wrap-heading-3d:not(.alt) .front", {
      rotationX: 90,
      yPercent: -100,
      transformOrigin: "bottom center",
    });

    gsap.set(".wrap-heading-3d:not(.alt) .back", {
      rotationX: 0,
      yPercent: 0,
      transformOrigin: "bottom center",
    });

    // ALT (opposite direction)
    gsap.set(".wrap-heading-3d.alt .front", {
      rotationX: -90,
      yPercent: 100,
      transformOrigin: "top center",
    });

    gsap.set(".wrap-heading-3d.alt .back", {
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
    tl.to(".wrap-heading-3d:not(.alt) .front", {
      rotationX: 0,
      yPercent: 0,
      duration: 1.4,
      ease: "back.inOut(1.4)",
    }, 0).to(".wrap-heading-3d:not(.alt) .back", {
      rotationX: 90,
      yPercent: 100,
      duration: 1.4,
      ease: "back.inOut(1.4)",
    }, 0);

    // ALT
    tl.to(".wrap-heading-3d.alt .front", {
      rotationX: 0,
      yPercent: 0,
      duration: 1.4,
      ease: "back.inOut(1.4)",
    }, 0).to(".wrap-heading-3d.alt .back", {
      rotationX: -90,
      yPercent: -100,
      duration: 1.4,
      ease: "back.inOut(1.4)",
    }, 0);

    gsap.from(".text-sticker", {
      y: 80,
      rotate: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 1.4,
      ease: "back.out(1.7)",
    }, 0.5);

    // gsap.from(".hero img", {
    //   scale: 1.3,
    //   duration: 2,
    //   ease: "power3.out",
    // }, 0);

  }, []);

  return (
    <>
      <div className="hero flex flex-col items-center justify-center">
        <div className="container">
          <div className="hero-title flex flex-col gap-6">

            <div className="wrap-heading-3d">
              <div className="front">
                <div className="flex flexrow items-center justify-between gap-6">
                  <div className="relative w-fit">
                    <div className="h1 text-white">Real</div>
                  </div>
                  <div className="relative w-[45%]">
                    <img src="/images/hero-image-1.webp" className="w-full h-[12em] object-cover object-center" alt="" />
                  </div>
                  <div className="relative w-fit">
                    <div className="h1 text-white">IMPACT</div>
                    <span className="text-sticker text-sticker-cyan bg-cyan-400 p-3 ">With Strategy</span>
                  </div>
                </div>
              </div>

              <div className="back">
                <div className="flex flex-row items-center justify-between gap-6">
                  <div className="relative w-fit">
                    <div className="h1 text-white">Real</div>
                  </div>
                  <div className="relative w-[45%]">
                    <img src="/images/hero-image-1.webp" className="w-full h-[12em] object-cover object-center" alt="" />
                  </div>
                  <div className="relative w-fit">
                    <div className="h1 text-white">IMPACT</div>
                    <span className="text-sticker text-sticker-cyan bg-cyan-400 p-3 ">With Strategy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-heading-3d alt">
              <div className="front">
                <div className="flex flex-row items-center gap-6">
                  <div className="relative w-[35%]">
                    <img src="/images/hero-image-2.webp" className="w-full h-[15em] object-cover object-center" alt="" />
                  </div>
                  <div className="relative">
                    <div className="relative">
                      <div className="h1 text-white">Everything</div>
                      <span className="text-sticker absolute right-0 top-[35%] rotate-8 bg-fuchsia-300 p-3 ">At Scale</span>
                    </div>
                    <div className="grid grid-cols-4 items-center px-4">
                      <div className="hero-icons flex flex-row items-center">
                        <img src="/icons/sports-icon.svg" alt="" />
                        <h4>Live Sports <br /> Production</h4>
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
              <div className="back">
                <div className="flex flex-row items-center gap-6">
                  <div className="relative w-[35%]">
                    <img src="/images/hero-image-2.webp" className="w-full h-[15em] object-cover object-center" alt="" />
                  </div>
                  <div className="relative">
                    <div className="relative">
                      <div className="h1 text-white">Everything</div>
                      <span className="text-sticker absolute right-0 top-[35%] rotate-8 bg-fuchsia-300 p-3 ">At Scale</span>
                    </div>
                    <div className="grid grid-cols-4 items-center px-4">
                      <div className="hero-icons flex flex-row items-center">
                        <img src="/icons/sports-icon.svg" alt="" />
                        <h4>Live Sports <br /> Production</h4>
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
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="container mx-auto h-screen"></div>
      </div>
    </>
  )
}
