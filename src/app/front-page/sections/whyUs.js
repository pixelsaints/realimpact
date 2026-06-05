"use client"

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from "split-type";
import { scaleUp, fadeInUp } from '@/lib/animations/gsapProps';

gsap.registerPlugin(ScrollTrigger);

const whyUs = [
  {
    number: "01",
    title: "Expertise and Experience",
    desc: "Our team consists of highly skilled professionals with extensive experience in their respective fields. We have a proven track record of delivering successful projects for clients across various industries.",
    image: "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "02",
    title: "Client-Centric Approach",
    desc: "We prioritize our clients' needs and goals, working closely with them to understand their vision and deliver tailored solutions that meet their specific requirements.",
    image: "https://images.unsplash.com/photo-1673767297220-6341467cb687?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "03",
    title: "Innovative Solutions",
    desc: "We stay at the forefront of industry trends and technologies, allowing us to provide innovative solutions that drive growth and success for our clients.",
    image: "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    number: "04",
    title: "Commitment to Quality",
    desc: "We are dedicated to delivering high-quality results that exceed our clients' expectations. We adhere to strict quality standards and continuously strive for excellence in everything we do.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

export default function WhyUs() {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const subtitleElement = titleRef.current.querySelector(".subtitle");
    const titleElement = titleRef.current.querySelector("h2.title");
    const descElement = titleRef.current.querySelector("p.title-description");
    const btnWrap = titleRef.current.querySelector(".btn-wrap");
    const cards = cardRef.current?.querySelectorAll(".why-card") || [];

    if (!subtitleElement || !titleElement || !descElement) return;

    const subtitle = new SplitType(subtitleElement, { types: "chars" });
    const title = new SplitType(titleElement, { types: "words, lines" });
    const desc = new SplitType(descElement, { types: "lines" });

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
        }, "-=1");

      if (btnWrap) {
        tlContent.from(btnWrap, {
          opacity: 0,
          yPercent: 110,
          duration: 1,
          ease: "expo.out"
        }, "-=0.8");
      }

      // Cards
      cards.forEach((card) => {

        const img =
          card.querySelector(".why-card-image img");

        // Scroll animation
        gsap.from(card, {
          opacity: 0,
          yPercent: 35,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
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
            autoAlpha: 1,
            scale: 0.8,
          });

          // Mouse move
          const handleMouseMove = (e) => {

            const cursorX =
              e.clientX / window.innerWidth - 0.5;

            gsap.to(img, {
              scale: 1.1,
              x: cursorX * 100,
              duration: 0.8,
              ease: "power3.out",
            });

          };

          // Mouse leave
          const handleMouseLeave = () => {

            gsap.to(img, {
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
      <section className="why-us py-24 lg:py-32 bg-black-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="intro w-full lg:w-[70%] mx-auto text-center flex flex-col items-center mb-16" ref={titleRef}>
              <div className="subtitle mb-6">Why Choose Us</div>
              <h2 className="title text-white mb-6">Experiences that leave a lasting impact</h2>
              <p className="title-description">We are committed to delivering exceptional results and exceeding our clients' expectations. Our team of experts is dedicated to providing innovative solutions that drive growth and success for your business.</p>
            </div>
          </div>

          <div className="wc-content flex flex-col gap-8" ref={cardRef}>
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