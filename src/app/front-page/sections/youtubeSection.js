"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function YoutubeSection() {

  const ytSection = useRef(null);

  useEffect(() => {
    if (ytSection.current) {

      const videoContainer = ytSection.current.querySelector('.sticky');

      // const shrink = gsap.utils.toArray(ytSection.current.querySelector('.shrink'))

      // shrink.forEach(element => {
      //   gsap.to(element, {
      //     scaleX: -1,
      //     scrollTrigger: {
      //       trigger: ytSection.current,
      //       start: "top bottom",
      //       end: "bottom bottom",
      //       toggleActions: "play none none reverse",
      //       scrub: 1
      //     }
      //   })
      // });

      // gsap.set(videoContainer, {
      //   clipPath: "inset(0 0 100% 0)",
      //   // x: -300,
      //   opacity: 0,
      //   scale: 1,
      //   transformOrigin: "center center"
      // })

      // gsap.to(videoContainer, {
      //   clipPath: "inset(0 0 0% 0)",
      //   x: 0,
      //   opacity: 1,
      //   duration: 3,
      //   ease: "expo.inOut",
      //   scrollTrigger: {
      //     trigger: ytSection.current,
      //     start: "top 75%",
      //     toggleActions: "play none none reverse",
      //   }
      // })

      const introVideo = ytSection.current.querySelector('.intro-video');

      gsap.set(introVideo, {
        scale: 0.5,
        y: 100
        // rotate: 45,
      })

      gsap.to(introVideo, {
        scale: 1,
        y: 0,
        // rotate: 0,
        scrollTrigger: {
          trigger: ytSection.current,
          start: "25% bottom",
          end: "75% bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        }
      })

    }
  })
  return (
    <section className="relative h-[150vh]" ref={ytSection}>
      <div className="sticky top-0">
        {/* <div className="left absolute left-0 top-0 w-1/2 z-50 h-full bg-black-900 shrink origin-left"></div> */}
        <div className="relative w-[90%] lg:w-full lg:h-screen mx-auto overflow-hidden">
          <video autoPlay muted loop playsInline className="top-0 intro-video relative lg:absolute lg:inset-0 h-full w-full object-cover m-auto" poster="/images/intro-poster.webp">
            <source src="/videos/intro.webm" type="video/webm" />
          </video>
        </div>
        {/* <div className="right absolute right-0 top-0 w-1/2 z-50 h-full bg-black-900 shrink origin-right"></div> */}
      </div>
    </section>
  )
}
