"use client";
import { useRef, useEffect } from "react";
import TextMarquee from "@/components/ui/text-marquee";
import gsap from "@/lib/gsap";
import SplitType from "split-type";

export default function AboutSection() {
  const circleRef = useRef(null);

  const counterStat = [
    { label: "Years of Experience", value: 20, unit: "+" },
    { label: "Clients worldwide", value: 85, unit: "+" },
    { label: "Projects Delivered", value: 200, unit: "+" },
    { label: "Client Satisfaction", value: 98, unit: "+" },
  ];

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Circle Rotate
      gsap.to(".circle-rotate", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      // SplitType
      const subtitle = new SplitType(
        circleRef.current.querySelector(".subtitle"),
        {
          types: "lines, chars",
          lineClass: "line-child",
        }
      );

      const titleScrub = new SplitType(
        circleRef.current.querySelector(".text-scrub"),
        {
          types: "chars",
        }
      );

      const desc = new SplitType(
        circleRef.current.querySelector("p.desc"),
        {
          types: "lines",
          lineClass: "line-child",
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
        opacity: 0.15,
      });

      gsap.to(titleScrub.chars, {
        opacity: 1,
        stagger: 0.03,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".text-scrub",
          start: "top 85%",
          end: "top 35%",
          scrub: 0.5,
        },
      });

      // Subtitle
      gsap.from(subtitle.chars, {
        // y: 40,
        rotateY: 90,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.03,

        scrollTrigger: {
          trigger: ".subtitle",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Description
      gsap.from(desc.lines, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,

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
    <section className=" bg-[url('/images/bg-about.webp')] bg-center bg-cover">
      <div className="overflow-x-clip z-10 py-4">
        <TextMarquee />
      </div>
      <div className="py-36 min-h-[80vh] flex flex-col items-center justify-center relative" ref={circleRef}>
        <img src="/svg/circle.svg" alt="about real impact" className="circle-rotate absolute inset-0 m-auto w-[70%] max-w-[50em] opacity-10 h-auto object-contain" />
        <div className="container relative">
          <div className="flex flex-col w-full lg:w-[90%] justify-center items-center text-center mx-auto">
            <h5 className="subtitle text-pri-400 tracking-[3px] uppercase text-center mb-4">About Real Impact</h5>
            <h2 className="text-scrub font-serif leading-14 text-[40px] text-white mb-8">Real Impact is India's Broadcast Equipment Rental and Production company, managed by a team of professionals who have considerable experience in producing world-class events, with acknowledged acumen in the creative, technical, and production departments.</h2>
            <p className="text-white/70 text-lg leading-relaxed w-[60%] mx-auto desc">Real Impact brings together decades of expertise in broadcast engineering, live production, and content execution, creating seamless experiences for sports, entertainment, and global television audiences.</p>
          </div>
        </div>
        <div className="counter-grid w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 pt-24">
          {counterStat.map((item, index) => (
            <div key={index} className="counter-item flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-start gap-2 text-4xl font-bold text-white">
                <span className="counter-value font-mono text-8xl font-normal" data-target={item.value}> 0 </span>
                <span className="text-pri-400/70 font-light">{item.unit}</span>
              </div>
              <p className="text-white/70 font-">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
