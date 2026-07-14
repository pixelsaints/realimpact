"use client";
import { useRef, useEffect } from "react";
import TextMarquee from "@/components/ui/text-marquee";
import gsap from "@/lib/gsap";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";
import { scaleUp } from "@/lib/animations/gsapProps";
import { counterStat } from "@/data/counterStat";
import Counter from "@/components/ui/couner";

export default function AboutSection() {
  const circleRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Circle Rotate
      gsap.to(".circle-rotate", {
        rotation: 45,
        ease: "none",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // SplitType
      const subtitle = new SplitType(
        circleRef.current.querySelector(".subtitle"),
        {
          types: "lines, chars",
          // lineClass: "line-child",
        }
      );

      const titleScrub = new SplitType(
        circleRef.current.querySelector(".text-scrub"),
        {
          types: "lines, chars",
        }
      );

      const desc = new SplitType(
        circleRef.current.querySelector("p.desc"),
        {
          types: "lines",
          // lineClass: "line-child",
        }
      );

      // Performance
      gsap.set(
        [
          subtitle.chars,
          titleScrub.chars,
          desc.lines
        ],
        {
          willChange: "transform, opacity",
        }
      );

      // Title Scrub
      gsap.set(titleScrub.chars, {
        opacity: 0.2,
        scale: 0.75
      });

      gsap.to(titleScrub.chars, {
        opacity: 1,
        scale: 1,
        stagger: 0.03,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".text-scrub",
          start: "35% 85%",
          end: "top 35%",
          scrub: 0.5,
        },
      });

      // Subtitle
      gsap.from(subtitle.chars, {
        ...scaleUp,

        scrollTrigger: {
          trigger: ".subtitle",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Description
      gsap.from(desc.lines, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        // stagger: 0.08,

        scrollTrigger: {
          trigger: "p.desc",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Counter
      const counters = circleRef.current.querySelectorAll(".counter-value");

      counters.forEach(counter => {

        const updateCount = () => {
          const target = +counter.dataset.target;
          const count = +counter.innerText;

          const increment = target / 50;

          if (count < target) {
            counter.innerText =
              Math.ceil(count + increment);

            requestAnimationFrame(updateCount);

          } else {
            counter.innerText = target;
          }
        };

        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                updateCount();
                observer.unobserve(counter);
              }
            });
          },
          { threshold: 0.6 }
        );

        observer.observe(counter);
      });

      gsap.from(circleRef.current.querySelectorAll(".counter-item"), {
        y: 100,
        rotateY: -90,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
        transformOrigin: "bottom center",
        perspective: 1000,
        scrollTrigger: {
          trigger: ".counter-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cleanup SplitType
      return () => {
        subtitle.revert();
        titleScrub.revert();
        desc.revert();
      };

    }, circleRef);

    return () => ctx.revert();

  }, []);

  return (
    <section className="about-sec bg-[url('/images/bg-about.webp')] bg-center bg-cover">
      <div className="overflow-x-clip z-10 py-4">
        <TextMarquee />
      </div>
      <div className="py-24 lg:py-36 min-h-[80vh] flex flex-col items-center justify-center relative" ref={circleRef}>
        <img src="/svg/circle.svg" alt="about real impact" className="circle-rotate absolute inset-0 m-auto w-[70%] max-w-[50em] opacity-10 h-auto object-contain" />
        <div className="container relative">
          <div className="flex flex-col w-full lg:w-[90%] justify-center lg:items-center lg:text-center mx-auto">
            <h5 className="subtitle mb-4">About Real Impact</h5>
            <h2 className="text-scrub text-[20px] lg:leading-12 lg:text-[32px] text-white mb-8">Real Impact is a global leader in broadcast production, specializing in the planning, execution, and delivery of high-impact live events and broadcast operations. Backed by a multidisciplinary team of industry experts, we combine creative vision, technical excellence, and production expertise, supported by a comprehensive broadcast equipment rental division.</h2>
            <p className="text-white/70 text-lg leading-relaxed w-full lg:w-[80%] mx-auto desc mb-8">Real Impact brings together decades of expertise in broadcast engineering, live production, and content execution, creating seamless experiences for sports, entertainment, and global television audiences.</p>
            <TransitionLink href="/about" className="text-pri-400 btn btn-link">
              About Us
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>
        {/* <div className="counter-grid w-full lg:w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 pt-24">
          {counterStat.map((item, index) => (
            <div key={index} className="counter-item flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-start gap-2 text-4xl font-bold text-white">
                <span className="counter-value font-mono text-8xl font-normal" data-target={item.value}> 0 </span>
                <span className="text-pri-400/70 font-light">{item.unit}</span>
              </div>
              <p className="text-white/70">{item.label}</p>
            </div>
          ))}
        </div> */}

        <div className="counter-grid w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 pt-24">
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
    </section>
  )
}
