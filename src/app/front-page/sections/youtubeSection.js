"use client";
import { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosPlay } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";


export default function YoutubeSection() {

  gsap.registerPlugin(ScrollTrigger);

  const ytSection = useRef(null);
  const [open, setOpen] = useState(false);
  const closeVideo = () => setOpen(false);

  useEffect(() => {
    if (!ytSection.current) return;

    gsap.fromTo(
      ".video-image",
      {
        clipPath: "inset(25% 25% 25% 25%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: ytSection.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section className="relative" ref={ytSection}>
      <div className="relative lg:w-full lg:h-screen mx-auto overflow-hidden intro-video flex h-screen items-center justify-center">
        <div className="shrink left"></div>
        <div className="shrink right"></div>

        <div className="video-image"></div>
        <div className="video-btn" onClick={() => setOpen(true)}>
          <IoIosPlay />
        </div>

        {open && (
          <div className="video-modal" onClick={closeVideo}>
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-close" onClick={closeVideo}><IoIosCloseCircle /></button>

              <iframe
                src="https://www.youtube.com/embed/m8Wi2ArRe90?autoplay=1&rel=0"
                title="Real Impact Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/m8Wi2ArRe90?autoplay=1&rel=0"
              title="YouTube"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
