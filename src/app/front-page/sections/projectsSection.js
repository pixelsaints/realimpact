"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { projectsList } from "@/data/projectsList";
import { IoArrowForward } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {

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

          // content-wrapper

          .from(card.querySelector(".content-wrapper"), {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          }, "-=1.4")

          // Title words
          .from(titleSplit.chars, {
            rotationY: 90,
            transformOrigin: "center bottom",
            perspective: 1200,
            opacity: 0,
            stagger: 0.04,
            duration: 1.2,
            ease: "power2.out",
          }, "-=1.2")

          // Description lines
          .from(descSplit.lines, {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 1.2,
            ease: "power2.out",
          }, "-=1.8")

          // Tags
          .from(card.querySelectorAll(".project-tag"), {
            rotationX: 90,
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
      <section className="projects-section pb-32">
        <div className="container">
          <div className="w-[70%] mx-auto flex flex-col items-center justify-center text-center mb-20">
            <div className="section-title text-white font-mono text-[5vw] uppercase">Recent Projects</div>
            <p className="section-description text-gray-300 mb-6">
              Explore a selection of our recent projects showcasing our expertise in broadcast engineering, live production, and media technology solutions.
            </p>
          </div>
          <div className="projects-grid flex flex-col gap-20">
            {/* Map through projectsList and render project cards */}
            {projectsList.slice(0, 6).map((project, index) => (
              <div key={index} className="project-card flex flex-col lg:flex-row lg:items-stretch gap-16">
                <div className={`image-wrapper lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className={`content-wrapper lg:w-1/2  ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} >
                  <h3 className="project-name text-white font-serif">{project.name}</h3>
                  <div className="project-description text-gray-300 mt-4">
                    <p className="project-description my-4 line-clamp-3 overflow-hidden">{project.description}</p>
                    <div className="project-tags flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center flex items-center justify-center mt-20">
            <TransitionLink href="/projects" className="btn btn-link text-pri-400">
              View All Projects
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  )
}
