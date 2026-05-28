"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {

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

  const whyUs = [
    {
      number: "01",
      title: "Broadcast-Grade Reliability",
      desc: "Production systems and workflows engineered to maintain consistency across large-scale live operations and broadcasts.",
      image: "/images/broadcast-reliability.webp"
    },
    {
      number: "02",
      title: "Experienced Technical Teams",
      desc: "Skilled production specialists delivering efficient coordination, technical accuracy, and dependable execution under pressure.",
      image: "/images/experienced-teams.webp"
    },
    {
      number: "03",
      title: "Scalable Production Solutions",
      desc: "Flexible production capabilities supporting corporate events, government operations, broadcasts, and remote live environments.",
      image: "/images/scalable-solutions.webp"
    },
    {
      number: "04",
      title: "Structured Operational Delivery",
      desc: "Every production is executed through disciplined workflows, proactive planning, precise coordination, and real-time technical management.",
      image: "/images/structured-delivery.webp"
    }
  ]

  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {

    const subtitle = new SplitType(
      titleRef.current.querySelector(".subtitle"),
      { types: "chars" }
    );

    const title = new SplitType(
      titleRef.current.querySelector("h3.title"),
      { types: "words, lines" }
    );

    const desc = new SplitType(
      titleRef.current.querySelector("p.desc"),
      { types: "lines" }
    );

    const btnWrap =
      titleRef.current.querySelector(".btn-wrap");

    const cards =
      cardRef.current.querySelectorAll(".why-card");

    const ctx = gsap.context(() => {

      // Initial image state
      gsap.set(".why-card-image img", {
        autoAlpha: 0,
        scale: 0.5,
      });

      // Content timeline
      const tlContent = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
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
        }, "-=0.45")
        .from(desc.lines, {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          stagger: 0.08,
          ease: "expo.out"
        }, "-=1")
        .from(btnWrap, {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          ease: "expo.out"
        }, "-=0.8");

      // Cards
      cards.forEach((card) => {

        const img =
          card.querySelector(".why-card-image img");

        // Scroll animation
        gsap.from(card, {
          opacity: 0,
          yPercent: -35,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        const isMobile = window.innerWidth < 768;

        if (isMobile) {

          // Always visible on mobile
          gsap.set(img, {
            autoAlpha: 1,
            scale: 1,
            x: 0,
          });

        } else {

          // Desktop initial state
          gsap.set(img, {
            autoAlpha: 0,
            scale: 0.5,
          });

          // Mouse move
          const handleMouseMove = (e) => {

            const cursorX =
              e.clientX / window.innerWidth - 0.5;

            gsap.to(img, {
              autoAlpha: 1,
              scale: 1.1,
              x: cursorX * 100,
              duration: 0.8,
              ease: "power3.out",
            });

          };

          // Mouse leave
          const handleMouseLeave = () => {

            gsap.to(img, {
              autoAlpha: 0,
              scale: 0.5,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
            });

          };

          card.addEventListener(
            "mousemove",
            handleMouseMove
          );

          card.addEventListener(
            "mouseleave",
            handleMouseLeave
          );

          // Cleanup
          return () => {

            card.removeEventListener(
              "mousemove",
              handleMouseMove
            );

            card.removeEventListener(
              "mouseleave",
              handleMouseLeave
            );

          };

        }

      });

    });

    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-24" ref={titleRef}>
            <div className="lg:w-[50%]">
              <div className="subtitle mb-5">Why Real Impact</div>
              <h3 className="title text-white mb-5 lg:mb-0">Reliable Production for Complex Environments.</h3>
            </div>
            <div className="lg:w-[45%] pb-4">
              <p className="mb-4 desc">We combine technical expertise, reliable operations, and scalable systems for demanding live broadcast and production environments across industries.</p>
              <div className="btn-wrap">
                <TransitionLink href="/contact" className="btn btn-link text-pri-400">
                  Lets Talk
                  <span className="icon">
                    <IoArrowForward className="front" />
                    <IoArrowForward className="back" />
                  </span>
                </TransitionLink>
              </div>
            </div>
          </div>

          <div className="why-cards  flex flex-col gap-6" ref={cardRef}>
            {whyUs.map((item, index) => {

              return (

                <div
                  key={index}
                  className={`why-card ${index === whyUs.length - 1 ? "pb-0" : "pb-6"}`}
                >
                  <div className="why-card-title">
                    <div className="sub-title">{item.number}</div>
                    <h2>{item.title}</h2>
                  </div>
                  <div className="why-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="why-card-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              );

            })}
          </div>
        </div>
      </section>
    </>
  )
}
