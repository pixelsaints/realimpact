"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { galleryData, galleryFilters } from "@/data/gallerydata";

const getFilterClass = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredGallery, setFilteredGallery] = useState(galleryData);
  const [index, setIndex] = useState(-1);

  const gridRef = useRef(null);

  // Initial load
  useEffect(() => {
    setFilteredGallery(shuffleArray(galleryData));
  }, []);

  const slides = useMemo(
    () =>
      filteredGallery.map((item) => ({
        src: item.image,
        title: item.name,
        description: item.services.join(" / "),
      })),
    [filteredGallery]
  );

  const handleFilter = (filter) => {
    if (filter === activeFilter) return;

    const cards = gridRef.current?.querySelectorAll(".gallery-card");

    gsap.to(cards, {
      opacity: 0,
      y: 20,
      // scale: 0.92,
      duration: 0.25,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        const items =
          filter === "All"
            ? galleryData
            : galleryData.filter((item) =>
              item.services.includes(filter)
            );

        setActiveFilter(filter);
        setFilteredGallery(shuffleArray(items));
        setIndex(-1);
      },
    });
  };

  useEffect(() => {
    if (!filteredGallery.length) return;

    const cards = gridRef.current?.querySelectorAll(".gallery-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",
        clearProps: "opacity,transform,clipPath",
      }
    );
  }, [filteredGallery]);

  return (
    <>
      <div className="container mb-24 lg:mb-32">

        <div className="mb-12">
          <div className="gallery-toolbar">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "is-active" : ""}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div ref={gridRef} className="gallery-grid">
          {filteredGallery.map((item, i) => (
            <button
              key={item.id}
              className="gallery-card"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}