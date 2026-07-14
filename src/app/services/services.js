"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";
import { servicesData } from "@/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesList() {

  const introRef = useRef(null);
  const servicesCards = useRef(null);

  useEffect(() => {

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

  }, []);

  return (
    <>
      <section className="pb-24 lg:pb-32 pt-28 lg:pt-0">
        <div className="container">

          <div className="container service-cards hidden lg:flex flex-col gap-10 " ref={servicesCards}>
            {servicesData.map((service, index) => {
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
        </div>
      </section>
    </>
  )
}
