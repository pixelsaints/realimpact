"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {

  const services = [
    {
      id: 1,
      number: "01",
      title: "4K Broadcast Solutions",
      description:
        "Advanced multi-camera 4K workflows delivering cinematic live production experiences for sports, entertainment, and global broadcasts.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 2,
      number: "02",
      title: "RF Transmission Systems",
      description:
        "Reliable RF and wireless transmission infrastructure designed for large-scale events, stadiums, and dynamic outdoor productions.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 3,
      number: "03",
      title: "Live Sports Production",
      description:
        "End-to-end live sports broadcasting with high-speed replay systems, multi-camera coverage, and immersive audience experiences.",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 4,
      number: "04",
      title: "Entertainment & TV Shows",
      description:
        "Creative broadcast production solutions for concerts, reality shows, award ceremonies, and large entertainment properties.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 5,
      number: "05",
      title: "Flypack & OB Vans",
      description:
        "Scalable flypack systems and OB van solutions engineered for flexible deployment across regional and international productions.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 6,
      number: "06",
      title: "Broadcast Engineering",
      description:
        "Specialized engineering support ensuring seamless technical execution, redundancy planning, and mission-critical broadcast reliability.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 7,
      number: "07",
      title: "Global Event Production",
      description:
        "Integrated event production services combining storytelling, technical precision, and world-class execution across international markets.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  useEffect(() => {

    const ctx = gsap.context(() => {

      const track = document.querySelector(".services-track");

      const maxScroll =
        track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top top",
          end: `+=${maxScroll}`,
          scrub: 1,
          pin: true,
        }
      });

      // Horizontal movement
      tl.to(track, {
        x: -maxScroll,
        ease: "none",
      });

      // Progress bar
      tl.to(".services-progress-bar", {
        width: "100%",
        ease: "none",
      }, 0);

      // Image parallax
      gsap.to(".service-image", {
        scale: 1,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".services-section",
          start: "top top",
          end: `+=${maxScroll}`,
          scrub: true,
        }
      });

      // Active card depth
      gsap.to(".service-card", {
        rotateY: 0,
        z: 0,

        scrollTrigger: {
          trigger: ".services-section",
          start: "top top",
          end: `+=${maxScroll}`,
          scrub: true,
        }
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <section className="services-section py-32">

        <div className="services-sticky">
          <div className="services-top text-center text-white">
            <div className="mx-auto">
              <span className="eyebrow mb-3">Our Services</span>
              <h2 className="services-title">WHERE VISION MEETS CRAFT</h2>
            </div>
          </div>

          <div className="services-track">

            {services.map((service, index) => (
              <article className="service-card" key={index}>
                <div className="service-image-wrap">
                  <img src={service.image} alt="" className="service-image" />
                </div>

                <div className="service-content">
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}

          </div>

          <div className="services-progress">
            <div className="services-progress-bar" />
          </div>

        </div>

      </section>
    </>
  )
}
