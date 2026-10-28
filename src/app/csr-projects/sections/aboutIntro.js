"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Counter from "@/components/ui/couner";
import { counterUp, scaleUp } from "@/lib/animations/gsapProps";
import { counterStat } from "@/data/counterStat";
gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {

  const sectionRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {

    const titleText = new SplitType(sectionRef.current.querySelector('h2.title'), { types: "words,lines" });
    const counter = counterRef.current.querySelectorAll(".counter-grid .counter-item");
    const counterSubtitle = counterRef.current.querySelector(".subtitle");

    const ctx = gsap.context(() => {

      gsap.from(titleText.words, {
        ...scaleUp,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      })

      const tlCounter = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      tlCounter
        .from(counterSubtitle, { ...scaleUp })
        .from(counter, { ...counterUp, stagger: 0.2, }, "-=1.2")
    })

    return () => ctx.revert();

  }, [])

  return (
    <>
      <section className="py-32 bg-[url(/images/bg-about.webp)] bg-center">
        <div className="lg:w-[90%] mx-auto wrapper">
          <div className="container">
            <div ref={sectionRef}>
              <h2 className="title alt text-white text-center">Real Impact is India's trusted broadcast equipment rental and production company, delivering world-class events through expert creative, technical, and production execution.</h2>
            </div>

            <div className="pt-32" ref={counterRef}>
              <div className="subtitle mb-16 text-center">
                Real Impact In Numbers
              </div>
              <div className="counter-grid w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
                {counterStat.map((item, index) => (
                  <Counter
                    key={index}
                    count={item.count}
                    suffix={item.suffix}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}