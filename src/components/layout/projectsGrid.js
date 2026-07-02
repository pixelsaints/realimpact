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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 projects-list items-start">
            <div className="flex flex-col">
              {projectsList.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="flex flex-col lg:mt-16">
              {projectsList.slice(4, 8).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="flex flex-col">
              {projectsList.slice(8, 12).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}