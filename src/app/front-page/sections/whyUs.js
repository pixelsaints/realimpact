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
  const introRef = useRef(null);
  const wcRef = useRef(null);

  useEffect(() => {
    const wcBlocks = wcRef.current.querySelectorAll(".wc-content-card");

    const subtitle = new SplitType(introRef.current.querySelector(".subtitle"), { types: "chars", });
    const title = new SplitType(introRef.current.querySelector(".title"), { types: "lines, chars", lineClass: "line-child" });
    const titleDescription = new SplitType(introRef.current.querySelector(".title-description"), { types: "lines", lineClass: "line-child" });

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(subtitle.chars, {
        ...scaleUp,
        duration: 0.4,
        stagger: 0.05,
      })
        .from(title.chars, {
          ...scaleUp,
          duration: 0.8,
          stagger: 0.05,
        }, "-=2").from(titleDescription.lines, {
          ...fadeInUp,
          stagger: 0.1,
        }, "-=1");

      // gsap.from(wcBlocks, {
      //   scaleY: 0.5,
      //   transformOrigin: "top center",
      //   y: 100,
      //   opacity: 0,
      //   duration: 0.8,
      //   // delay: index * 0.2,
      //   stagger: 0.2,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: wcBlocks,
      //     start: "top 90%",
      //     toggleActions: "play none none reverse",
      //   },
      // })


      wcBlocks.forEach((block, index) => {
        gsap.from(block, {
          scaleY: 0.5,
          transformOrigin: "top center",
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      });


      return () => ctx.revert();
    }, wcRef);

    const content = document.querySelector(".wc-content");
    const blurredBg = document.querySelector(".blurred-bg");

    if (content && blurredBg) {
      const handleMouseMove = (e) => {

        const rect = content.getBoundingClientRect();

        // Mouse position inside container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert to centered movement
        const moveX = (x - rect.width / 2) * 1;
        const moveY = (y - rect.height / 2) * 1;

        gsap.to(blurredBg, {
          x: moveX,
          y: moveY,
          opacity: 0.8,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(blurredBg, {
          x: 0,
          y: 0,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      content.addEventListener("mousemove", handleMouseMove);
      content.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        content.removeEventListener("mousemove", handleMouseMove);
        content.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

  }, [])


  return (
    <>
      <section className="why-us py-24 lg:py-32 bg-black-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="intro w-full lg:w-[60%] mx-auto text-center flex flex-col items-center mb-16" ref={introRef}>
              <div className="subtitle mb-6">Why Choose Us</div>
              <h2 className="title text-white mb-6">Experiences that leave a lasting impact</h2>
              <p className="title-description">We are committed to delivering exceptional results and exceeding our clients' expectations. Our team of experts is dedicated to providing innovative solutions that drive growth and success for your business.</p>
            </div>
          </div>

          <div className="wc-content flex flex-col" ref={wcRef}>
            {
              whyUs.map((item) => {
                return (
                  <div key={item.number} className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-white wc-content-card">
                    <div className="wc-content-number lg:w-[20%] mb-6 lg:mb-0">
                      <span>
                        {item.number}
                      </span>

                      {item.image && <img src={item.image} className='wc-content-image' />}
                    </div>
                    <div className="wc-content-title lg:w-[30%] mb-4 lg:mb-0 lg:pl-4">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="wc-content-desc  lg:w-[45%] lg:pr-6">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}   