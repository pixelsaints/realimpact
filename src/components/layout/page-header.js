"use client";

import { useRef, useEffect, useReducer } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { fadeInUp, introScaleUp } from "@/lib/animations/gsapProps";
import { BsStars } from "react-icons/bs";
import TransitionLink from "../transitions/TransitionLink";
import { IoArrowBack } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function PageHeader({ subtitle, titleFirst, titleSecond, desc, video, fullTitle, backLink }) {

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

      if (subtitle) {
        tl.from(subtitle, {
          y: 32,
          opacity: 0,
          stagger: 0.1,
          ease: "back.inOut(1.4)",
          duration: 1,
        }, "-=1")
      }

      tl.from(
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
      <div className="container relative" ref={heroRef}>
        <div className="w-full flex flex-col item-start justify-start" >
          <div className="intro flex flex-col relative z-20">
            <div className="intro-subtitle">
              {backLink &&
                <TransitionLink href={backLink} className="flex items-center gap-2">
                  <IoArrowBack /> Back to Services
                </TransitionLink>
              }
              {
                subtitle &&
                <span><BsStars /> {subtitle}</span>
              }
            </div>

            {/* {fullTitle && <h1 className="intro-heading">
            </h1>}

            {titleFirst && <h1 className="intro-heading">{titleFirst} <br /> {titleSecond} </h1>} */}

            {titleFirst ? (
              <h1 className="intro-heading">
                {titleFirst} <br /> {titleSecond}
              </h1>
            ) : (
              <h1 className="intro-heading w-[60%]">
                {fullTitle}
              </h1>
            )}

            <h1 className="intro-heading lg:w-[95%]">
            </h1>

            {desc && <p className="intro-desc mt-4 lg:w-[60%] mb-8">{desc}</p>}
          </div>

          {video &&
            <div className="video-player lg:absolute lg:right-0 lg:top-[-20%] lg:w-[50%] lg:h-[60vh] rounded-2xl overflow-hidden">
              <div className="absolute bg-black/50 w-full h-full inset-0 z-10"></div>
              <video autoPlay muted loop playsInline className="lg:absolute w-full h-full object-cover">
                <source src={`${video}.webm`} type="video/webm" />
                <source src={`${video}.mp4`} type="video/mp4" />
              </video>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
