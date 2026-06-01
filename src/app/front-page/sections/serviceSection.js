"use client";
import { useRef, useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Swiper, SwiperSlide } from "swiper/react";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { scaleUp, fadeInUp } from "@/lib/animations/gsapProps";
import "swiper/css";
import { servicesData } from "@/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const [swiper, setSwiper] = useState(null);
  const [progress, setProgress] = useState(0);

  const servicesRef = useRef(null);
  const servicesSliderRef = useRef(null);

  const handleProgress = (currentSwiper) => {
    const currentIndex = currentSwiper.realIndex ?? 0;
    const progressStep = servicesData.length > 1 ? currentIndex / (servicesData.length - 1) : 0;
    setProgress(progressStep * 100);
  };

  useEffect(() => {

    if (!servicesRef.current) return;

    const ctx = gsap.context(() => {

      const title = servicesRef.current.querySelector(".threed-intro");

      const subtitle = new SplitType(servicesRef.current.querySelector(".subtitle"), {
        types: "chars, lines",
        lineClass: "line-child",
      });
      const titleSplit = new SplitType(servicesRef.current.querySelector("h2"), {
        types: "chars, lines",
        lineClass: "line-child",
      });
      const description = new SplitType(servicesRef.current.querySelector(".services-description p"), {
        types: "lines",
        lineClass: "line-child",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(subtitle.chars, {
        ...scaleUp
      }).from(titleSplit.chars, {
        ...scaleUp
      }, "-=1.6").from(description.lines, {
        ...fadeInUp
      }, "-=1.4").from(".services-description .btn-link", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      }, "-=1.6")


      gsap.from(servicesSliderRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesSliderRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="services-section py-24 lg:py-32">

        <div className="container intro-section flex flex-col lg:flex-row lg:justify-between lg:items-center" ref={servicesRef}>
          <div className="flex flex-col lg:w-[40%]">
            <span className="subtitle mb-4">Our Services</span>
            <h2 className="title font-mono text-white">WHERE VISION MEETS CRAFT</h2>
          </div>
          <div className="services-description mt-6 w-full lg:w-[55%]">
            <p className="text-white/70 mb-4">
              At Real Impact, we specialize in delivering world-class broadcast production services that bring your vision to life. With cutting-edge technology, expert engineering, and a passion for storytelling, we create unforgettable live experiences for sports, entertainment, and global events.
            </p>

            <TransitionLink href="/services" className="text-pri-400 btn btn-link">
              Our Services
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>

        <div className="services-slider-wrap pt-10" ref={servicesSliderRef}>
          <Swiper
            className="services-slider"
            slidesPerView={1.08}
            spaceBetween={20}
            speed={850}
            loop
            onSwiper={(currentSwiper) => {
              setSwiper(currentSwiper);
              handleProgress(currentSwiper);
            }}
            onProgress={handleProgress}
            onSlideChange={(currentSwiper) => {
              handleProgress(currentSwiper);
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.45,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 32,
              },
              1440: {
                slidesPerView: 2.75,
                spaceBetween: 36,
              },
            }}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id} className="h-full">
                <article className="service-card rounded-2xl h-full">
                  <div className="service-image-wrap">
                    <img src={service.image} alt={service.title} className="h-[20em] object-center object-cover" />
                  </div>
                  <div className="service-content">
                    <span className="service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="services-controls" aria-label="Services slider controls">
            <div className="services-progress" aria-hidden="true">
              <span className="services-progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="button-wrap">
              <button
                className="services-arrow"
                type="button"
                aria-label="Previous service"
                onClick={() => swiper?.slidePrev()}
              >
                <IoArrowBack />
              </button>
              <button
                className="services-arrow"
                type="button"
                aria-label="Next service"
                onClick={() => swiper?.slideNext()}
              >
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}
