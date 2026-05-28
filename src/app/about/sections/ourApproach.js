"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {

  const process = [
    {
      title: "Strategic Planning",
      description: "Production planning aligned with logistics, timelines, and technical execution.",
      icon: "/icons/strategic.svg",
    },
    {
      title: "Technical Integration",
      description: "Broadcast infrastructure optimized for seamless real-time production workflows.",
      icon: "/icons/videography.svg",
    },
    {
      title: "On-Ground Execution",
      description: "Experienced crews ensuring precision across live production environments.",
      icon: "/icons/event.svg"
    },
    {
      title: "Real-Time Support",
      description: "Continuous technical oversight ensuring seamless production across every execution stage.",
      icon: "/icons/technical-integration.svg",
    },
  ];

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {

    const subtitle = new SplitType(sectionRef.current.querySelector(".subtitle"), { types: "chars" });
    const title = new SplitType(sectionRef.current.querySelector("h3.title"), { types: "words, lines" });
    const cards = gsap.utils.toArray(cardRef.current.querySelectorAll(".step"));

    const ctx = gsap.context(() => {

      const tlContent = gsap.timeline({

        scrollTrigger: {
          trigger: sectionRef.current,
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
        .from(title.words, {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          stagger: 0.08,
          ease: "expo.out"
        }, "-=0.45");

      gsap.from(cards, {
        opacity: 0,
        xPercent: -35,
        duration: 1.4,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => ctx.revert();

  }, [])

  return (
    <>
      <section className="py-24 lg:py-32 bg-black-800/30" ref={sectionRef}>
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-24">
            <div className="subtitle mb-5">Our Approach</div>
            <div className="lg:w-[65%] text-center">
              <h3 className="title text-white">Structured Processes Behind Seamless Productions</h3>
            </div>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-4" ref={cardRef}>
            {
              process.map((item) => {
                // const Icon = item.icon;

                return (
                  <li key={item.title} className="step">
                    <span className=""></span>
                    <div className="step-icon">
                      {item.icon && <img src={item.icon} alt="" />}
                    </div>
                    <div className="step-content">
                      <h4> {item.title} </h4>
                      <p> {item.description} </p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}
