"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import ClientsCarosel from "@/components/ui/clients-carosel";
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
      title: "Remote Production Infrastructure",
      desc: "Integrated systems connecting venues, field operations, and centralized production facilities through high-bandwidth transmission networks."
    },
    {
      title: "Multi-Camera Acquisition",
      desc: "Support for distributed camera systems delivering synchronized live feeds from remote locations."
    },
    {
      title: "Signal Transport & Contribution",
      desc: "Reliable transmission workflows utilizing fiber, IP, satellite, and bonded connectivity solutions."
    },
    {
      title: "Centralized Production",
      desc: "Operate vision mixing, replay, graphics, audio mixing, and monitoring from a centralized production hub."
    },
    {
      title: "Remote Monitoring & Control",
      desc: "Comprehensive monitoring and control systems enabling real-time management of production workflows."
    },
    {
      title: "Scalable Deployment",
      desc: "Flexible solutions suitable for sports, entertainment, news, corporate events, and special broadcasts."
    }
  ]

  const whyUsData = [
    {
      title: "Engineered for Remote Workflows",
      desc: "Purpose-built remote production solutions delivering efficiency, reliability, flexibility, and broadcast-grade performance across locations."
    },
    {
      items: [
        {
          title: "Reliable Wireless Coverage",
          desc: "Maintain stable video, audio, and data transmission across large venues, complex environments, and challenging production locations."
        },
        {
          title: "Advanced Frequency Coordination",
          desc: "Careful spectrum planning minimizes interference and ensures dependable performance for all wireless systems."
        },
        {
          title: "Low-Latency Signal Transmission",
          desc: "Support real-time production workflows with responsive wireless connectivity for cameras, audio, and communications."
        },
        {
          title: "Flexible Camera Mobility",
          desc: "Enable unrestricted camera movement while maintaining consistent broadcast-quality signal transmission throughout the venue."
        },
        {
          title: "Scalable RF Infrastructure",
          desc: "Deploy wireless systems that adapt seamlessly from single-camera productions to large multi-camera broadcast events."
        },
        {
          title: "On-Site RF Expertise",
          desc: "Experienced RF engineers provide setup, monitoring, optimization, and troubleshooting to ensure uninterrupted operations."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      imageLink: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      title: "Broadcast Control Room",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
      imageLink: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
      title: "Live Production Equipment",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      imageLink: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      title: "Wireless Camera Operations",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      imageLink: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      title: "Large Venue Coverage",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      imageLink: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      title: "Live Event Broadcasting",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      imageLink: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      title: "Wireless Production Workflow",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      imageLink: "https://images.unsplash.com/photo-1521334884684-d80222895322",
      title: "RF Camera Deployment",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      imageLink: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Stadium Production Environment",
    },
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
              <h2 className="title text-white">Wireless Connectivity for Dynamic Live Productions</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description">
                Delivering reliable RF transmission systems, wireless camera connectivity, audio transport, and frequency coordination for seamless live production environments worldwide.
              </p>
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
                className="block w-full break-inside-avoid overflow-hidden rounded-lg card gallery-link"
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-105 h-56 object-cover object-center"
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
