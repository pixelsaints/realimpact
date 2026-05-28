"use client";

import { useRef, useEffect, useReducer } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { fadeInUp, introScaleUp } from "@/lib/animations/gsapProps";
import { BsStars } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function PageHeader({ subtitle, titleFirst, titleSecond, desc, video }) {

  const heroRef = useRef(null);

  useEffect(() => {

    const subtitle = heroRef.current.querySelector('.intro-subtitle span')
    const title = new SplitType(heroRef.current.querySelector('h1'), { types: "lines, chars", });
    const desc = new SplitType(heroRef.current.querySelector('p'), { types: "lines" });
    const videoPlayer = heroRef.current.querySelector('.video-player')

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      tl.fromTo(videoPlayer, {
        x: 300,
        clipPath: "inset(0 100% 0 0)",
      }, {
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.out",
      })
        .from(subtitle, {
          y: 32,
          opacity: 0,
          stagger: 0.1,
          ease: "back.inOut(1.4)",
          duration: 1,
        }, "-=1")
        .from(
          title.chars, {
          ...introScaleUp
        }, "-=1")
        .from(desc.lines, {
          y: 32,
          opacity: 0,
          stagger: 0.1,
          ease: "back.inOut(1.4)",
          duration: 1,
        }, "-=1.4")
    })

    return () => ctx.revert();

  }, [])


  return (
    <div className="page-header min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-b from-black-900 via-black-900/20 to-black/30" /> */}
      <div className="container relative" ref={heroRef}>
        <div className="w-full flex flex-col item-start justify-start" >
          <div className="intro flex flex-col relative z-20">
            <div className="intro-subtitle">
              <span><BsStars /> {subtitle}</span>
            </div>
            <h1 className="intro-heading">{titleFirst} <br /> {titleSecond} </h1>
            <p className="intro-desc mt-4 lg:w-[60%]">{desc}</p>
          </div>

          <div className="video-player lg:absolute lg:right-0 lg:top-[-25%] w-[50%] h-[60vh]">
            <div className="absolute bg-black/50 w-full h-full inset-0 z-10"></div>
            <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
              {/* <source src="/videos/video-1.webm" /> */}
              <source src={video} />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
