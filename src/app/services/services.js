"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";
import { scaleUp, fadeInUp } from "@/lib/animations/gsapProps";
import { servicesData } from "@/data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesList() {

  const introRef = useRef(null);

  useEffect(() => {

  }, []);

  return (
    <>
      <section className="pb-24 lg:pb-32">
        <div className="container">

          <div className="services-grid flex flex-col gap-16 lg:gap-20">
            {servicesData.map((service, index) => (
              <div key={index} className="services-card flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
                <div className={`image-wrapper lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={service.image} alt={service.name} className="services-image" />
                </div>
                <div className={`content-wrapper lg:w-1/2  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} >
                  <h3 className="services-name text-white font-serif">{service.title}</h3>
                  <div className="services-description text-gray-300 mt-4">
                    <p className="services-description my-4 overflow-hidden">{service.description}</p>

                    {service.link &&
                      <TransitionLink href={service.link} className="btn btn-link text-pri-400">
                        Learn More
                        <span className="icon">
                          <IoArrowForward className="front" />
                          <IoArrowForward className="back" />
                        </span>
                      </TransitionLink>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
