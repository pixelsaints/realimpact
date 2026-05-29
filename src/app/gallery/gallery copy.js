"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose, IoExpand } from "react-icons/io5";
import { galleryData, galleryFilters } from "@/data/gallerydata";

const getFilterClass = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeId, setActiveId] = useState(null);
  const isotopeRef = useRef(null);
  const galleryRef = useRef(null);

  const visibleGallery = useMemo(() => {
    if (activeFilter === "All") return galleryData;

    return galleryData.filter((item) => item.services.includes(activeFilter));
  }, [activeFilter]);

  const activeItem = galleryData.find((item) => item.id === activeId);

  const closeLightbox = () => {
    setActiveId(null);
  };

  useEffect(() => {
    let isMounted = true;

    import("isotope-layout").then(({ default: Isotope }) => {
      if (!isMounted || !galleryRef.current) return;

      isotopeRef.current = new Isotope(galleryRef.current, {
        itemSelector: ".gallery-card",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: {
          columnWidth: ".gallery-sizer",
        },
        transitionDuration: "0.45s",
      });

      isotopeRef.current.arrange({ filter: "*" });
    });

    const layoutOnResize = () => isotopeRef.current?.layout();
    window.addEventListener("resize", layoutOnResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", layoutOnResize);
      isotopeRef.current?.destroy();
      isotopeRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isotopeRef.current) return;

    isotopeRef.current.arrange({
      filter:
        activeFilter === "All"
          ? "*"
          : `.${getFilterClass(activeFilter)}`,
    });
  }, [activeFilter]);

  useEffect(() => {
    if (!activeItem) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeItem]);

  const openLightbox = (id) => {
    setActiveId(id);
  };

  const showPrevious = () => {
    const activeIndex = visibleGallery.findIndex((item) => item.id === activeId);
    const previousIndex =
      activeIndex <= 0 ? visibleGallery.length - 1 : activeIndex - 1;

    setActiveId(visibleGallery[previousIndex].id);
  };

  const showNext = () => {
    const activeIndex = visibleGallery.findIndex((item) => item.id === activeId);
    const nextIndex =
      activeIndex === visibleGallery.length - 1 ? 0 : activeIndex + 1;

    setActiveId(visibleGallery[nextIndex].id);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-toolbar">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "is-active" : ""}
              aria-pressed={activeFilter === filter}
              onClick={() => {
                setActiveFilter(filter);
                closeLightbox();
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="isotope-gallery" ref={galleryRef}>
          <div className="gallery-sizer" />
          {galleryData.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-card is-${item.layout || "small"} ${item.services
                .map(getFilterClass)
                .join(" ")}`}
              onClick={() => openLightbox(item.id)}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ objectPosition: item.position || "center" }}
                onLoad={() => isotopeRef.current?.layout()}
              />
              <span className="gallery-card-overlay">
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.services.join(" / ")}</small>
                </span>
                <IoExpand aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.name}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery image"
          >
            <IoClose />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous gallery image"
          >
            <IoChevronBack />
          </button>
          <figure>
            <img
              src={activeItem.image}
              alt={activeItem.name}
              style={{ objectPosition: activeItem.position || "center" }}
              onLoad={() => isotopeRef.current?.layout()}
            />
            <figcaption>
              <span>{activeItem.name}</span>
              <small>{activeItem.services.join(" / ")}</small>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={showNext}
            aria-label="Next gallery image"
          >
            <IoChevronForward />
          </button>
        </div>
      ) : null}
    </section>
  );
}
