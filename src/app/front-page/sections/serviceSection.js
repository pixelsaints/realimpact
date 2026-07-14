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
  const servicesCards = useRef(null);

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

      const description = servicesRef.current.querySelector(".desc");
      const button = servicesRef.current.querySelector(".services-description .link");

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
      }, "-=1.5").from(description, {
        ...fadeInUp
      }, "-=0.4");

      if (button) {
        tl.from(button, {
          ...fadeInUp
        }, "-=0.2");
      }


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

      const serviceItems = servicesCards.current.querySelectorAll('.service-item');

      serviceItems.forEach(item => {

        gsap.set(item, {
          transformOrigin: 'bottom center',
          perspective: 1000,
          opacity: 0,
          y: 100
        })

        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
      });

    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="services-section py-24 lg:py-32">

        <div className="container  intro-section flex flex-col lg:flex-row lg:justify-between lg:items-center" ref={servicesRef}>
          <div className="flex flex-col lg:w-[35%]">
            <span className="subtitle mb-4">Our Services</span>
            <h2 className="title font-mono text-white">Where Vision Meets Craft</h2>
          </div>
          <div className="services-description mt-6 w-full lg:w-[55%]">
            <div className="desc">
              <p className="text-white/70 mb-4">
                At Real Impact, we specialize in delivering world-class broadcast production services that bring your vision to life. With cutting-edge technology, expert engineering, and a passion for storytelling.
              </p>

              <div className="link">
                <TransitionLink href="/services" className="btn btn-link text-pri-400">
                  Learn More
                  <span className="icon">
                    <IoArrowForward className="front" />
                    <IoArrowForward className="back" />
                  </span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[90%] mx-auto">
          <div className="services-slider-wrap pt-10 flex lg:hidden" ref={servicesSliderRef}>
            <Swiper
              className="services-slider"
              slidesPerView={1}
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
                  slidesPerView: 1,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 36,
                },
              }}
            >
              {servicesData.map((service) => (
                <SwiperSlide key={service.id} className="h-full">
                  <TransitionLink href={service.link} >
                    <article className="service-card rounded-2xl h-full">
                      <div className="service-image-wrap">
                        <img src={service.image} alt={service.title} className="h-[16em] object-center object-cover w-full" />
                      </div>
                      <div className="service-content">
                        <span className="service-number">{service.number}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </article>
                  </TransitionLink>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="services-controls" aria-label="Services slider controls">
              <div className="services-progress" aria-hidden="true">
                <span className="services-progress-bar" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="button-wrap">
              <button
                className="services-arrow prev"
                type="button"
                aria-label="Previous service"
                onClick={() => swiper?.slidePrev()}
              >
                <IoArrowBack />
              </button>
              <button
                className="services-arrow next"
                type="button"
                aria-label="Next service"
                onClick={() => swiper?.slideNext()}
              >
                <IoArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-24 service-cards hidden lg:flex flex-col gap-10 " ref={servicesCards}>
          {servicesData.slice(0, 4).map((service, index) => {
            const isOdd = index % 2 !== 0;
            const isLast = index === servicesData.length - 1;

            return (
              <article
                key={service.number}
                className={`service-item flex flex-col items-stretch lg:flex-row bg-black-800 ${isOdd ? "lg:flex-row-reverse odd" : ""}`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[20em] w-full object-cover object-center"
                  />
                </div>

                <div className="px-4 lg:px-8 lg:w-1/2 service-item-content flex items-start justify-center flex-col">
                  <span className="service-number">{service.number}</span>
                  <div className="text-4xl text-white mb-4">{service.title}</div>
                  <p className="mb-4">{service.description}</p>
                  <TransitionLink href={service.link} className="btn btn-link text-pri-400">
                    Learn More
                    <span className="icon">
                      <IoArrowForward className="front" />
                      <IoArrowForward className="back" />
                    </span>
                  </TransitionLink>
                </div>
              </article>
            );
          })}
        </div>

      </section>
    </>
  )
}
