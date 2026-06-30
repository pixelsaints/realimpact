"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function YoutubeSection() {

  const ytSection = useRef(null);

  useEffect(() => {
    if (ytSection.current) {

      const videoContainer = ytSection.current.querySelector('.sticky');

      gsap.set(videoContainer, {
        clipPath: "inset(0% 100% 0% 0%)",
        x: -300,
        opacity: 0,
        scale: 1,
        transformOrigin: "center center"
      })

      gsap.to(videoContainer, {
        clipPath: "inset(0% 0% 0% 0%)",
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ytSection.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      })
    }
  })
  return (
    <section className="relative yt-section" ref={ytSection}>
      <div className="sticky top-32">
        <div className="relative w-[90%] lg:w-full lg:h-screen mx-auto overflow-hidden">
          <video autoPlay muted loop playsInline className="relative lg:absolute lg:inset-0 h-full w-full object-cover m-auto" poster="/images/intro-poster.webp">
            <source src="/videos/intro.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  )
}
