"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsList } from "@/data/projectsList";
import ProjectCard from "@/components/layout/projectCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".projects-card");

      cards.forEach((card) => {

        const content = card.querySelector(".project-content");
        const imageWrapper = card.querySelector(".image-wrapper");
        const image = card.querySelector(".project-image");

        const tl = gsap.timeline({
          defaults: {
            ease: "expo.out",
          },
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        tl
          .from(card, {
            y: 40,
            opacity: 0,
            duration: 1.2,
          })

          .from(imageWrapper, {
            clipPath: "inset(100% 0 0 0)",
            duration: 1.2,
          }, "<0.05")

          .from(image, {
            scale: 1.3,
            duration: 1.4,
          }, "<")

          .from(content, {
            clipPath: "inset(100% 0 0 0)",
            opacity: 0,
            duration: 1.2,
          }, "<0.35");
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <section className="lg:pb-32">
        <div className="w-[85%] mx-auto">
          <div className="grid grid-cols-3 gap-16 projects-list items-center">
            <div className="flex flex-col -mt-32">
              {projectsList.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="flex flex-col">
              {projectsList.slice(4, 9).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="flex flex-col -mt-32">
              {projectsList.slice(9, 13).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}