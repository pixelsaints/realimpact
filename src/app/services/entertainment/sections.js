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
      title: "Complete Entertainment Production Solutions",
      desc: "Comprehensive production solutions supporting concerts, festivals, award shows, live performances, and large- scale entertainment events with reliable technical execution and expertise."
    },
    {
      items: [
        {
          title: "Multi-Camera Live Coverage",
          desc: "Capture every performance and audience moment with dynamic multi-camera production workflows."
        },
        {
          title: "Live Event Broadcasting",
          desc: "Deliver high-quality live broadcasts and streaming experiences for audiences across multiple platforms."
        },
        {
          title: "Large-Scale Video Systems",
          desc: "Integrated video infrastructure supporting LED walls, projection systems, and venue displays."
        },
        {
          title: "Production Control & Coordination",
          desc: "Centralized management of video, audio, graphics, playback, and technical operations."
        },
        {
          title: "Recording & Content Capture",
          desc: "Professional recording solutions for event archiving, post-production, and content repurposing."
        },
        {
          title: "Flexible Event Deployment",
          desc: "Scalable production systems tailored to venues ranging from intimate performances to major festivals."
        }
      ]
    }
  ];

  const whyUsData = [
    {
      title: "Built for Exceptional Entertainment Experiences",
      desc: "Technical expertise, reliable production systems, and experienced crews delivering seamless execution for live entertainment events."
    },
    {
      items: [
        {
          title: "Proven Live Event Experience",
          desc: "Extensive experience supporting concerts, festivals, cultural events, award ceremonies, and live performances."
        },
        {
          title: "Reliable Technical Execution",
          desc: "Broadcast-grade systems and workflows ensuring consistent performance throughout every event."
        },
        {
          title: "Creative Production Support",
          desc: "Collaborative production solutions that help bring creative visions to life on stage and screen."
        },
        {
          title: "Scalable Event Solutions",
          desc: "Flexible infrastructure capable of supporting productions of varying size, complexity, and audience reach."
        },
        {
          title: "Seamless Audience Engagement",
          desc: "High-quality visual experiences designed to captivate both in-person and remote audiences."
        },
        {
          title: "Dedicated Production Teams",
          desc: "Experienced technical professionals managing planning, deployment, operation, and on-site support."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "/gallery/entertainment/1.png",
      imageLink: "/gallery/entertainment/1.png",
    },
    {
      imageSrc: "/gallery/entertainment/2.png",
      imageLink: "/gallery/entertainment/2.png",
    },
    {
      imageSrc: "/gallery/entertainment/3.png",
      imageLink: "/gallery/entertainment/3.png",
    },
    {
      imageSrc: "/gallery/entertainment/4.jpeg",
      imageLink: "/gallery/entertainment/4.jpeg",
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
            <div className="lg:w-[55%]">
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
