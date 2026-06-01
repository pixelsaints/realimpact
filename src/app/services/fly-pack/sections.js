"use client";
import { useRef, useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import OurApproach from "@/app/about/sections/ourApproach";
import { fadeInUp, scaleUp } from "@/lib/animations/gsapProps";
import { animateSection } from "@/lib/animations/servicesAnimation";
import "yet-another-react-lightbox/styles.css";

export default function Sections() {

  const introRef = useRef(null);
  const whyIntro = useRef(null);
  const galleryRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  const capabalityList = [
    {
      title: "Portable Production Systems",
      desc: "Compact flypack solutions delivering professional broadcast workflows, rapid deployment, and flexible production capabilities for diverse live environments."
    },
    {
      items: [
        {
          title: "Modular Flypack Systems",
          desc: "Custom-configured production systems designed for efficient transportation and deployment across multiple venues."
        },
        {
          title: "Multi-Camera Production",
          desc: "Integrated switching and monitoring solutions supporting professional multi-camera live productions."
        },
        {
          title: "Graphics & Replay Integration",
          desc: "Built-in graphics, replay, and playback capabilities for enhanced live event coverage."
        },
        {
          title: "Live Streaming Workflows",
          desc: "Reliable streaming and content distribution solutions for broadcast and digital platforms."
        },
        {
          title: "Rapid Setup & Deployment",
          desc: "Streamlined systems engineered to reduce setup times and accelerate production readiness."
        },
        {
          title: "Scalable Production Configurations",
          desc: "Flexible infrastructure supporting productions ranging from small events to large-scale broadcasts."
        }
      ]
    }
  ];

  const whyUsData = [
    {
      title: "Built for Mobility and Reliability",
      desc: "Broadcast-grade flypack solutions delivering flexibility, portability, and dependable performance across demanding production environments."
    },
    {
      items: [
        {
          title: "Fast Deployment Capability",
          desc: "Efficiently deploy professional production systems with minimal setup time and logistical complexity."
        },
        {
          title: "Compact Broadcast Infrastructure",
          desc: "Achieve full production functionality within portable and space-efficient system designs."
        },
        {
          title: "Flexible Venue Adaptation",
          desc: "Operate seamlessly across sports venues, event spaces, corporate environments, and remote locations."
        },
        {
          title: "Reliable Production Performance",
          desc: "Proven workflows and professional equipment ensure stable operation throughout live events."
        },
        {
          title: "Scalable System Design",
          desc: "Expand production resources and capabilities to meet evolving project requirements."
        },
        {
          title: "Experienced Technical Teams",
          desc: "Dedicated professionals support planning, deployment, operation, and technical management."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "/gallery/fly-pack/1.png",
      imageLink: "/gallery/fly-pack/1.png",
    },
    {
      imageSrc: "/gallery/fly-pack/2.png",
      imageLink: "/gallery/fly-pack/2.png",
    },
    {
      imageSrc: "/gallery/fly-pack/3.png",
      imageLink: "/gallery/fly-pack/3.png",
    },
    {
      imageSrc: "/gallery/fly-pack/4.png",
      imageLink: "/gallery/fly-pack/4.png",
    },
    {
      imageSrc: "/gallery/fly-pack/5.png",
      imageLink: "/gallery/fly-pack/5.png",
    },
    {
      imageSrc: "/gallery/fly-pack/6.png",
      imageLink: "/gallery/fly-pack/6.png",
    }
  ];

  const slides = galleryItems.map((item) => ({
    src: item.imageLink,
    title: item.title,
  }));


  useEffect(() => {

    const splitInstances = [];

    if (introRef.current) {
      splitInstances.push(...animateSection(introRef));
    }

    if (whyIntro.current) {
      splitInstances.push(...animateSection(whyIntro));
    }

    if (galleryRef.current) {
      splitInstances.push(...animateSection(galleryRef));
    }

    return () => {
      splitInstances.forEach((instance) => instance?.revert());
    };
  }, [])


  return (
    <>
      <section className="pb-24 lg:pb-32">
        <div className="container" ref={introRef}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end pb-24">
            <div className="lg:w-[50%]">
              <div className="subtitle mb-5">Our Capabilities</div>
              <h2 className="title text-white">{capabalityList[0].title}</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description">{capabalityList[0].desc}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {
              capabalityList[1].items.map(({ title, desc }, index) => (
                <div key={index} className="p-6 border border-black-700/50 rounded-lg card">
                  <h2 className="font-serif text-[20px] text-white mb-3">
                    {title}
                  </h2>

                  <p className="text-neutral-400">
                    {desc}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="why-us py-24 lg:py-32 bg-black-800/50">
        <div className="container" ref={whyIntro}>
          <div className="flex flex-col justify-center text-center items-center pb-24">
            <div className="subtitle mb-5">Why Choose Us</div>
            <h2 className="title text-white mb-4 lg:w-[55%]">{whyUsData[0].title}</h2>
            <p className="description lg:w-[50%] text-center"> {whyUsData[0].desc} </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {
              whyUsData[1].items.map(({ title, desc }, index) => (
                <div key={index} className="p-6 border border-black-700/50 rounded-lg card">
                  <h2 className="font-serif text-[20px] text-white mb-3">
                    {title}
                  </h2>

                  <p className="text-neutral-400">
                    {desc}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="gallery py-24 lg:py-32">
        <div className="container" ref={galleryRef}>
          <div className="flex flex-col justify-center items-center text-center pb-24 lg:w-[70%] mx-auto">
            <div className="subtitle mb-5">Gallery</div>
            <h2 className="title text-white mb-4">Our Work in Action</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
                className="mb-6 block w-full break-inside-avoid overflow-hidden rounded-lg card gallery-link"
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-105 h-48 object-cover object-center"
                />
              </button>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
          />
        </div>
      </section>
    </>
  )
}
