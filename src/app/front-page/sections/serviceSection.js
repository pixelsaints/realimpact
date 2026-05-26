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

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const [swiper, setSwiper] = useState(null);
  const [progress, setProgress] = useState(0);

  const servicesRef = useRef(null);
  const servicesSliderRef = useRef(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "4K Broadcast Solutions",
      description:
        "Advanced multi-camera 4K workflows delivering cinematic live production experiences for sports, entertainment, and global broadcasts.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 2,
      number: "02",
      title: "RF Transmission Systems",
      description:
        "Reliable RF and wireless transmission infrastructure designed for large-scale events, stadiums, and dynamic outdoor productions.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 3,
      number: "03",
      title: "Live Sports Production",
      description:
        "End-to-end live sports broadcasting with high-speed replay systems, multi-camera coverage, and immersive audience experiences.",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 4,
      number: "04",
      title: "Entertainment & TV Shows",
      description:
        "Creative broadcast production solutions for concerts, reality shows, award ceremonies, and large entertainment properties.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 5,
      number: "05",
      title: "Flypack & OB Vans",
      description:
        "Scalable flypack systems and OB van solutions engineered for flexible deployment across regional and international productions.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 6,
      number: "06",
      title: "Broadcast Engineering",
      description:
        "Specialized engineering support ensuring seamless technical execution, redundancy planning, and mission-critical broadcast reliability.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 7,
      number: "07",
      title: "Global Event Production",
      description:
        "Integrated event production services combining storytelling, technical precision, and world-class execution across international markets.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const handleProgress = (currentSwiper) => {
    const currentIndex = currentSwiper.realIndex ?? 0;
    const progressStep = services.length > 1 ? currentIndex / (services.length - 1) : 0;
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
      <section className="services-section py-32">

        <div className="container intro-section flex flex-col lg:flex-row lg:justify-between lg:items-center" ref={servicesRef}>
          <div className="flex flex-col lg:w-[40%]">
            <span className="subtitle mb-4">Our Services</span>
            <h2 className="title font-mono text-white">WHERE VISION MEETS CRAFT</h2>
          </div>
          <div className="services-description mt-6 w-[55%]">
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
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <article className="service-card">
                  <div className="service-image-wrap">
                    <img src={service.image} alt={service.title} />
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
