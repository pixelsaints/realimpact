"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonialsList } from "@/data/testimonialsList"

import "swiper/css";
import "swiper/css/free-mode";
import SplitType from "split-type"
import { fadeInUp, scaleUp } from "@/lib/animations/gsapProps"
import ClientsCarosel from "@/components/ui/clients-carosel"

gsap.registerPlugin(ScrollTrigger)

export default function ClientsSection() {
  const introRef = useRef(null)
  const clientSliderRef = useRef(null)
  const firstRow = testimonialsList.slice(0, Math.ceil(testimonialsList.length / 2))
  const secondRow = testimonialsList.slice(Math.ceil(testimonialsList.length / 2))

  useEffect(() => {
    if (!introRef.current) return

    const ctx = gsap.context(() => {
      const subtitle = new SplitType(introRef.current.querySelector(".subtitle"), {
        types: "chars",
      })
      const title = new SplitType(introRef.current.querySelector(".title"), {
        types: "lines, chars",
        lineClass: "line-child",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      tl.from(subtitle.chars, {
        ...scaleUp,
      }).from(title.chars, {
        ...scaleUp,
      }, "-=1.6")

      gsap.from(clientSliderRef.current, {
        ...fadeInUp,
        duration: 1.2,
        scrollTrigger: {
          trigger: clientSliderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, introRef)

    return () => ctx.revert()
  }, [])

  const renderTestimonialSlide = (testimonial) => (
    <SwiperSlide key={testimonial.id} className="client-slide">
      <article className="testimonial-card">
        <p>{testimonial.testimonial}</p>
        <div className="testimonial-author">
          <Image src={testimonial.image} alt={testimonial.name} width={52} height={52} />
          <div>
            <h3>{testimonial.name}</h3>
            <span>{testimonial.position}, {testimonial.company}</span>
          </div>
        </div>
      </article>
    </SwiperSlide>
  )

  const swiperSettings = {
    modules: [Autoplay, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 6500,
    loop: true,
    allowTouchMove: false,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      // pauseOnMouseEnter: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 28,
      },
    },
  }

  return (
    <section className="clients-section py-32 bg-black-800/50">
      <ClientsCarosel />
    </section>
  )
}
