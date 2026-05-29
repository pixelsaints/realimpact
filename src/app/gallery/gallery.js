"use client";

import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { galleryData, galleryFilters } from "@/data/gallerydata";

const getFilterClass = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(-1);

  const filteredGallery = useMemo(() => {
    if (activeFilter === "All") return galleryData;
    return galleryData.filter((item) =>
      item.services.includes(activeFilter)
    );
  }, [activeFilter]);

  const slides = useMemo(() => {
    return filteredGallery.map((item) => ({
      src: item.image,
      title: item.name,
      description: item.services.join(" / "),
    }));
  }, [filteredGallery]);

  return (
    <section className="gallery-section pb-32">
      <div className="container">

        {/* FILTERS */}
        <div className="gallery-toolbar">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "is-active" : ""}
              onClick={() => {
                setActiveFilter(filter);
                setIndex(-1);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {filteredGallery.map((item, i) => (
            <button
              key={item.id}
              className={`gallery-card ${getFilterClass(
                item.services.join("-")
              )}`}
              onClick={() => setIndex(i)}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />

              <div className="gallery-card-overlay">
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.services.join(" / ")}</small>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        // plugins={[Zoom, Thumbnails]}
        plugins={[Captions]}
      />
    </section>
  );
}