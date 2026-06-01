"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";
import { scaleUp, fadeInUp } from "@/lib/animations/gsapProps";
import { servicesData } from "@/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesList() {

  const introRef = useRef(null);

  useEffect(() => {

    const cards = document.querySelectorAll(".services-card");

    cards.forEach((card) => {

      const titleSplit = new SplitType(card.querySelector(".services-name"), {
        types: "lines, words, chars",
        lineClass: "line-child",
      });

      const descSplit = new SplitType(card.querySelector(".services-description p"), {
        types: "lines",
        lineClass: "line-child",
      });

      const btnWrap = card.querySelector(".services-description .btn-wrap");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 82%",
          toggleActions: "play none none reverse",
        }
      });

      // Image reveal
      tl.fromTo(card.querySelector(".image-wrapper"), {
        x: 100,
        clipPath: "inset(0 100% 0 0)",
      }, {
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power2.out",
      })
        // Title words
        .from(titleSplit.chars, {
          scaleY: 0,
          transformOrigin: "bottom center",
          perspective: 1200,
          opacity: 0,
          stagger: 0.04,
          duration: 1,
          ease: "power2.out",
        }, "-=1.2")

        // Description lines
        .from(descSplit.lines, {
          y: 24,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        }, "-=1")

        // Tags
        .from(btnWrap, {
          scaleY: 0,
          transformOrigin: "bottom center",
          perspective: 1200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=1");

    });

  }, []);

  return (
    <>
      <section className="pb-24 lg:pb-32 pt-28 lg:pt-0">
        <div className="container">

          <div className="services-grid flex flex-col gap-16 lg:gap-20">
            {servicesData.map((service, index) => (
              <div key={index} className="services-card flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
                <div className={`image-wrapper lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <TransitionLink href={service.link}>
                    <img src={service.image} alt={service.name} className="services-image" />
                  </TransitionLink>
                </div>
                <div className={`content-wrapper lg:w-1/2  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} >
                  <h3 className="services-name text-white font-serif">{service.title}</h3>
                  <div className="services-description text-gray-300 mt-4">
                    <p className="services-description my-4 overflow-hidden">{service.description}</p>

                    {service.link &&
                      <div className="btn-wrap flex">
                        <TransitionLink href={service.link} className="btn btn-link text-pri-400">
                          Learn More
                          <span className="icon">
                            <IoArrowForward className="front" />
                            <IoArrowForward className="back" />
                          </span>
                        </TransitionLink>
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
