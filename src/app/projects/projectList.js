"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { getProjectLink, projectsList } from "@/data/projectsList";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {

  useEffect(() => {



    const ctx = gsap.context(() => {


      const cards = document.querySelectorAll(".project-card");

      cards.forEach((card) => {

        const title = card.querySelector(".project-name");
        const desc = card.querySelector(".project-description p");

        const titleSplit = new SplitType(title, {
          types: "lines, words, chars",
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

          // // Image scale
          // .from(card.querySelector("img"), {
          //   scale: 1.12,
          //   duration: 1.8,
          //   ease: "power2.out",
          // }, "-=1.6")

          // Title words
          .from(titleSplit.words, {
            scaleY: 0,
            transformOrigin: "bottom center",
            perspective: 1200,
            opacity: 0,
            stagger: 0.04,
            duration: 0.8,
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
          }, "-=1");

      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <section className="projects-sections lg:pb-32">
        <div className="container">
          <div className="projects-grid flex flex-col gap-16 lg:gap-20">
            {/* Map through projectsList and render project cards */}
            {projectsList.slice(0, 6).map((project, index) => (
              <div
                key={index}
                // href={getProjectLink(project)}
                className="project-card flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16"
              >
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
        </div>
      </section>
    </>
  )
}
