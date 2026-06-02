"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateSection } from "@/lib/animations/servicesAnimation";
import "yet-another-react-lightbox/styles.css";
import ClientsCarosel from "@/components/ui/clients-carosel";

export default function Sections() {

  const introRef = useRef(null);
  const whyIntro = useRef(null);
  const galleryRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  const capabalityList = [
    {
      title: "4K Camera Systems",
      desc: "Advanced Ultra HD camera solutions delivering exceptional image quality, color accuracy, and detail for live productions."
    },
    {
      title: "Multi-Camera 4K Workflows",
      desc: "Integrated multi-camera production environments supporting synchronized acquisition across complex broadcast operations."
    },
    {
      title: "4K Signal Processing",
      desc: "High-performance routing, switching, conversion, and signal management systems designed for Ultra HD workflows."
    },
    {
      title: "4K Recording & Replay",
      desc: "Professional recording and replay solutions enabling high-resolution content capture, playback, and production flexibility."
    },
    {
      title: "Ultra HD Monitoring",
      desc: "Precision monitoring systems providing accurate image evaluation, quality control, and operational confidence."
    },
    {
      title: "4K Transmission & Delivery",
      desc: "Reliable contribution and distribution workflows supporting the transport of Ultra HD content across broadcast networks."
    }
  ];

  const whyUsData = [
    {
      title: "Built for Exceptional 4K Performance",
      desc: "Purpose-engineered 4K production solutions delivering superior image quality, operational reliability, and scalable workflows for demanding broadcast environments."
    },
    {
      items: [
        {
          title: "Superior Image Quality",
          desc: "Capture stunning detail, enhanced color accuracy, and greater visual depth with professional Ultra HD production systems."
        },
        {
          title: "End-to-End 4K Workflows",
          desc: "Integrated acquisition, processing, monitoring, recording, and delivery systems designed specifically for Ultra HD productions."
        },
        {
          title: "Broadcast-Grade Reliability",
          desc: "Robust infrastructure ensures consistent performance and dependable operation throughout live production environments."
        },
        {
          title: "Advanced Signal Management",
          desc: "Efficient routing, conversion, and processing solutions maintain signal integrity across complex 4K workflows."
        },
        {
          title: "Scalable Production Systems",
          desc: "Flexible solutions adapt seamlessly from compact productions to large-scale multi-camera broadcast operations."
        },
        {
          title: "Future-Ready Technology",
          desc: "Modern 4K infrastructure supports evolving production requirements while maintaining compatibility with industry standards."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "/gallery/4k-solutions/1.png",
      imageLink: "/gallery/4k-solutions/1.png",
    },
    {
      imageSrc: "/gallery/4k-solutions/2.png",
      imageLink: "/gallery/4k-solutions/2.png",
    },
    {
      imageSrc: "/gallery/4k-solutions/3.png",
      imageLink: "/gallery/4k-solutions/3.png",
    },
    {
      imageSrc: "/gallery/4k-solutions/4.png",
      imageLink: "/gallery/4k-solutions/4.png",
    },
    {
      imageSrc: "/gallery/4k-solutions/5.png",
      imageLink: "/gallery/4k-solutions/5.png",
    },
    {
      imageSrc: "/gallery/4k-solutions/6.png",
      imageLink: "/gallery/4k-solutions/6.png",
    }
  ];

  const slides = galleryItems.map((item) => ({
    src: item.imageLink,
    title: item.title,
  }));


  useLayoutEffect(() => {

    const splitInstances = [];

    if (introRef.current) {
      splitInstances.push(...animateSection(introRef.current));
    }

    if (whyIntro.current) {
      splitInstances.push(...animateSection(whyIntro.current));
    }

    if (galleryRef.current) {
      splitInstances.push(...animateSection(galleryRef.current));
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
              <h2 className="title text-white">Comprehensive 4K Production Capabilities</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description">Comprehensive 4K workflows combining advanced acquisition, signal processing, recording, monitoring, and transmission technologies for exceptional broadcast quality.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {
              capabalityList.map(({ title, desc }, index) => (
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
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end pb-24">
            <div className="lg:w-[55%]">
              <div className="subtitle mb-5">Why Choose Us</div>
              <h2 className="title text-white">{whyUsData[0].title}</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description mb-4"> {whyUsData[0].desc} </p>
            </div>
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
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-105"
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
      <section className="pb-24 lg:pb-32">
        <div className="container">
          <ClientsCarosel />
        </div>
      </section>
    </>
  )
}
