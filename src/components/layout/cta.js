"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "../transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";


export default function Cta() {

  const ctaRef = useRef(null)

  return (
    <section className="cta-wrap py-24 lg:py-32">
      <div className="container relative z-10">
        <div className="flex flex-col justify-center items-center lg:w-[50%] mx-auto text-center">
          <h2 className="title text-white mb-6">Every unforgettable experience starts here</h2>
          <p className="mb-8">Every unforgettable experience begins with strategic creativity, seamless execution, and production expertise designed to deliver impact.</p>
          <TransitionLink href="/about" className="btn btn-primary">
            Let's Talk
            <span className="icon">
              <IoArrowForward className="front" />
              <IoArrowForward className="back" />
            </span>
          </TransitionLink>
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
