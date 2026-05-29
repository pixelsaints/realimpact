"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { servicesList } from "@/data/servicesList";
import { IoArrowForward } from "react-icons/io5";
import { scaleUp, fadeInUp } from "@/lib/animations/gsapProps";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesList() {

  const services = [
    {
      id: 1,
      number: "01",
      title: "Remote Productions",
      description:
        "Scalable remote production workflows enabling seamless live broadcasting, centralized control, and reliable collaboration across multiple event locations.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      link: "/services/remote-productions",
    },

    {
      id: 2,
      number: "02",
      title: "RF Solutions",
      description:
        "Reliable RF transmission systems engineered for uninterrupted wireless communication, camera mobility, and stable signal delivery in live environments.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      link: "/services/rf-solutions",
    },

    {
      id: 3,
      number: "03",
      title: "4K Solutions",
      description:
        "High-performance 4K broadcast solutions delivering exceptional image clarity, cinematic visuals, and future-ready production capabilities for demanding projects.",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1600&auto=format&fit=crop",
      link: "/services/4k-solutions",
    },

    {
      id: 4,
      number: "04",
      title: "Entertainment",
      description:
        "Comprehensive production support for concerts, shows, and entertainment events with dynamic visuals, technical precision, and seamless execution.",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1600&auto=format&fit=crop",
      link: "/services/entertainment",
    },

    {
      id: 5,
      number: "05",
      title: "Fly Pack",
      description:
        "Portable fly pack systems designed for rapid deployment, flexible production workflows, and reliable broadcasting in any remote environment.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
      link: "/services/fly-pack",
    },

    {
      id: 6,
      number: "06",
      title: "Sports Production",
      description:
        "End-to-end sports broadcasting solutions delivering dynamic live coverage, multi-camera workflows, instant replays, and immersive audience experiences.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
      link: "/services/sports-production",
    },

    {
      id: 7,
      number: "07",
      title: "Specialized Equipment",
      description:
        "Professional-grade broadcast equipment tailored for demanding productions requiring advanced performance, operational flexibility, and dependable technical reliability.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
      link: "/services/specialized-equipment",
    },

    {
      id: 8,
      number: "08",
      title: "System Integration",
      description:
        "Integrated broadcast infrastructure solutions connecting production systems, workflows, and technologies into efficient, scalable, and future-ready environments.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
      link: "/services/system-integration",
    },
  ];

  const introRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".project-card");

      cards.forEach((card) => {

        const title = card.querySelector(".project-name");
        const desc = card.querySelector(".project-description p");

        const titleSplit = new SplitType(title, {
          types: "lines, chars",
          lineClass: "line-child",
        });

        const descSplit = new SplitType(desc, {
          types: "lines",
          lineClass: "line-child",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          }
        });

        // Image reveal
        tl.fromTo(card.querySelector(".image-wrapper"), {
          x: 100,
          clipPath: "inset(0 100% 0 0)",
        }, {
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.6,
          ease: "power2.out",
        })

          // Image scale
          .from(card.querySelector("img"), {
            scale: 1.12,
            duration: 1.8,
            ease: "power2.out",
          }, "-=1.6")

          // Title words
          .from(titleSplit.chars, {
            scaleY: 0,
            transformOrigin: "bottom center",
            perspective: 1200,
            opacity: 0,
            stagger: 0.04,
            duration: 0.4,
            ease: "power2.out",
          }, "-=1.2")

          // Description lines
          .from(descSplit.lines, {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 1.2,
            ease: "power2.out",
          }, "-=1.4")

          // Tags
          .from(card.querySelectorAll(".project-tag"), {
            scaleY: 0,
            transformOrigin: "bottom center",
            perspective: 1200,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
          }, "-=1.6");

      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <section className="pb-24 lg:pb-32">
        <div className="container">

          <div className="projects-grid flex flex-col gap-16 lg:gap-20">
            {/* Map through projectsList and render project cards */}
            {services.map((service, index) => (
              <div key={index} className="project-card flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
                <div className={`image-wrapper lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={service.image} alt={service.name} className="project-image" />
                </div>
                <div className={`content-wrapper lg:w-1/2  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} >
                  <h3 className="project-name text-white font-serif">{project.name}</h3>
                  <div className="project-description text-gray-300 mt-4">
                    <p className="project-description my-4 overflow-hidden">{project.description}</p>

                    {project.link &&
                      <TransitionLink href="/projects" className="btn btn-link text-pri-400">
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
