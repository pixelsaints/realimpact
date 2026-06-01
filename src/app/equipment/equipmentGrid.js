"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { equipmentCategories } from "@/data/equipmentData";
import { fadeInUp } from "@/lib/animations/gsapProps";

gsap.registerPlugin(ScrollTrigger);

export default function EquipmentGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const grids = gsap.utils.toArray(".category-grid");

      grids.forEach((grid, index) => {
        gsap.from(grid.querySelector(".category-grid-title"), {
          // x: index % 2 === 0 ? -100 : 100,
          y: 200,
          opacity: 0,
          ease: "back.out(1)",
          duration: 1,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(grid.querySelector(".category-grid-items"), {
          // x: index % 2 === 0 ? -100 : 100,
          y: 200,
          opacity: 0,
          ease: "back.out(1)",
          duration: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });


      })


      ScrollTrigger.refresh();

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section className="text-white" ref={sectionRef}>
      <div className="container mx-auto px-5">

        {equipmentCategories.map((category) => (
          <div
            className="category-grid mb-24"
            key={category.id}
          >

            {/* Category Header */}
            <div className="category-grid-title flex flex-col lg:flex-row lg:justify-between gap-10 mb-12">

              <div className="lg:w-[45%]">
                <span className="text-sm text-neutral-500 block mb-4">
                  0{category.id}
                </span>

                <h3 className="text-[24px] md:text-4xl font-medium leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="lg:w-[50%]">
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Item Grid */}
            <div className="category-grid-items grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="category-grid-card border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-500"
                >
                  <h4 className="text-xl font-medium mb-4 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}