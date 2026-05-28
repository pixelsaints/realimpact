"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Counter from "@/components/ui/couner";
import { fadeInUp, fadeUp, revealLeftFrom, revealLeftTo, scaleUp } from "@/lib/animations/gsapProps";
import { MdBroadcastOnPersonal } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {

    const image = sectionRef.current.querySelector(".image-left");

    const subtitle = new SplitType(contentRef.current.querySelector(".subtitle"), { types: "chars, lines" });
    const title = new SplitType(contentRef.current.querySelector("h3"), { types: "lines, chars" });
    const desc = gsap.utils.toArray(contentRef.current.querySelectorAll(".desc p"));
    const list = gsap.utils.toArray(contentRef.current.querySelectorAll(".list li"))

    const ctx = gsap.context(() => {

      gsap.fromTo(image,
        { ...revealLeftFrom },
        {
          ...revealLeftTo,
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
            // markers: true
          }
        }
      )

      const tlContent = gsap.timeline({

        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }

      });

      tlContent
        .from(subtitle.chars, {
          opacity: 0,
          y: 24,
          scale: 0.92,
          duration: 0.7,
          stagger: 0.015,
          ease: "power3.out"
        })
        .from(title.lines, {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          stagger: 0.08,
          ease: "expo.out"
        }, "-=0.45")

        .from(desc, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.75")


      gsap.from(list, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "ul.list",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }, "-=0.65");
    })



    return () => ctx.revert();
  }, [])

  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center" ref={sectionRef}>
          <div className="lg:w-[45%] image-left">
            <img src="/images/55.jpg" alt="" className="w-full object-cover object-center h-[40em] lg:h-auto" />
          </div>
          <div className="lg:w-[50%]" ref={contentRef}>
            <div className="subtitle mb-4">Our Story</div>
            <h3 className="title text-white mb-6">Built Through Experience, Refined Through Execution.</h3>
            <div className="desc overflow-hidden">
              <p className="mb-4">We are India's leading Professional Broadcast Company. We specialise in coverage of Live Sports, Entertainment, Reality shows, and Events; with an unmatched professional experience of more than 20 years</p>
              <p className="mb-16">Over the years we've built a fine reputation for our cost-effective integrated engineering, turnkey system integration, custom made solutions & production services for Television Channels, Entertainment & Sports Event Organizers, Reality Shows, and Production Companies.</p>
            </div>
            <ul className="list flex flex-col divide-y divide-black-700 text-white/70">
              <li className="flex flex-col lg:flex-row items-center gap-8 pb-6 mb-8">
                <img src="/images/hero-image-1.webp" alt="" className="w-[30%] h-[6em] object-cover object-center" />
                <div className="w-[80%]">
                  Delivering seamless live broadcast experiences with precision engineering, technical expertise, and dependable production support.
                </div>
              </li>
              <li className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-[80%]">
                  Trusted by broadcasters and event organizers for scalable production, seamless execution, and integrated broadcast technology solutions.
                </div>
                <img src="/images/about-image-2.webp" alt="" className="w-[30%] h-[6em] object-cover object-center" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}