"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TransitionLink from "@/components/transitions/TransitionLink";
import { projectsList } from "@/data/projectsList";
import { IoArrowForward } from "react-icons/io5";
import { scaleUp, fadeInUp } from "@/lib/animations/gsapProps";
import ProjectCard from "@/components/layout/projectCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {

  const introRef = useRef(null);

  useEffect(() => {
    if (!introRef.current) return;

    const introWapper = introRef.current.querySelector(".w-full");
    const introTitle = introRef.current.querySelector("h2");
    const introDesc = introRef.current.querySelector(".section-description");
    const cards = document.querySelectorAll(".projects-card");

    if (!introTitle || !introDesc) return;

    const title = new SplitType(introTitle, {
      types: "lines, chars",
      lineClass: "line-child",
    });

    const desc = new SplitType(introDesc, {
      types: "lines",
      lineClass: "line-child",
    });

    const ctx = gsap.context(() => {

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        }
      });

      introTl.from(title.chars, {
        ...scaleUp
      }).from(desc.lines, {
        ...fadeInUp
      }, "-=1.4");

      gsap.to(introWapper, {
        opacity: 0.1,
        filter: "blur(5px)",
        scrollTrigger: {
          trigger: cards,
          start: "top 75%",
          scrub: true
        }
      })

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
      <section className="projects-section lg:pb-32">
        <div className="container" ref={introRef}>
          <div className="w-full lg:w-[70%] mx-auto flex flex-col items-center justify-center text-center mb-20 sticky top-50">
            <h2 className="title text-white font-mono mb-4">Recent Projects</h2>
            <p className="section-description text-gray-300 mb-6">Explore a selection of our recent projects showcasing our expertise in broadcast engineering, live production, and media technology solutions.</p>
          </div>

          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 projects-list items-center">
              <div className="flex flex-col lg:pt-28">
                {projectsList.slice(0, 2).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              <div className="flex flex-col">
                {projectsList.slice(2, 4).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              <div className="flex flex-col lg:pt-28">
                {projectsList.slice(4, 6).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
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
