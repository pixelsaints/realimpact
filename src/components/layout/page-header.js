"use client";

import { useRef, useEffect, useReducer } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { scaleUp } from "@/lib/animations/gsapProps";

gsap.registerPlugin(ScrollTrigger);

export default function PageHeader({ titleFirst, titleSecond, desc, image }) {

  const heroRef = useRef(null);

  useEffect(() => {

    const title = new SplitType(heroRef.current.querySelector('h1'), {
      types: "lines, chars",
    });

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          toggleActions: "play none none none"
        }
      })

      tl.from(
        title.char, {
        ...scaleUp
      }
      )
    })

    return () => ctx.revert();

  }, [])


  return (
    <div className="page-header min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-t from-black-900 via-black-900/20 to-black/30" />
      <div className="container relative">
        <div className="w-full flex flex-col item-start justify-start" >
          <div className="intro flex flex-col" ref={heroRef}>
            <h1 className="text-white leading-none">{titleFirst} <br /> {titleSecond} </h1>
          </div>
          <p className="desc mt-4 lg:w-[70%] text-white/72">{desc}</p>
        </div>
      </div>
    </div>
  )
}
