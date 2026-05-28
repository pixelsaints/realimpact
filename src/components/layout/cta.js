"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";
import { fadeInUp, scaleUp } from "@/lib/animations/gsapProps";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {

  const ctaRef = useRef(null)

  useEffect(() => {

    if (!ctaRef.current) return;

    const title = new SplitType(ctaRef.current.querySelector(".title"), {
      types: "chars,lines",
      lineClass: "line"
    });

    const desc = new SplitType(ctaRef.current.querySelector("p"), {
      types: "lines",
      lineClass: "line"
    });

    const btnWrap = ctaRef.current.querySelector(".btn-wrap");

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

      tl.from(title.chars, { ...scaleUp })
        .from(desc.lines, { ...fadeInUp }, "-=1.2")
        .from(btnWrap, { ...scaleUp }, "-=1.4")
    });

    return () => ctx.revert();
  }, [])

  return (
    <section className="cta-wrap py-24 lg:py-32" ref={ctaRef}>
      <div className="container relative z-10">
        <div className="flex flex-col justify-center items-center lg:w-[60%] mx-auto text-center">
          <h2 className="title text-white mb-6">Every unforgettable experience starts here</h2>
          <p className="mb-8 lg:w-[90%]">Every unforgettable experience begins with strategic creativity, seamless execution, and production expertise designed to deliver impact.</p>
          <div className="btn-wrap">
            <TransitionLink href="/about" className="btn btn-primary">
              Let's Talk
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>
      <div className="bg-video">
        <video autoPlay muted loop playsInline>
          <source src="/videos/video-1.webm" />
          <source src="/videos/video-1.mp4" />
        </video>
      </div>
    </section>
  )
}
