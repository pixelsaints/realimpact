"use client";

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from "split-type"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { clientLogo } from '@/data/clientLogo'

import "swiper/css";


export default function ClientsCarosel() {

  const clientLogos = useRef(null)

  const swiperConfig = {
    modules: [Autoplay],

    slidesPerView: "auto",
    spaceBetween: 20,

    speed: 6500,

    loop: true,
    allowTouchMove: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
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
    <div className="clients-wrap" ref={clientLogos}>
      <div className="container flex flex-col items-center">

        <div className="subtitle mb-16">
          Clients Who Trust Real Impact
        </div>

        <Swiper {...swiperConfig}>
          {clientLogo.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}