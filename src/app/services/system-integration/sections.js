"use client";
import { useRef, useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
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
      title: "Integrated Broadcast Infrastructure",
      desc: "Comprehensive system integration services connecting production technologies, control systems, signal workflows, and operational requirements into unified environments."
    },
    {
      items: [
        {
          title: "Broadcast Facility Design",
          desc: "Design and implementation of production facilities, control rooms, studios, and technical spaces tailored to operational requirements."
        },
        {
          title: "Signal Routing & Distribution",
          desc: "Efficient signal management systems ensuring reliable transport, routing, monitoring, and distribution across complex production environments."
        },
        {
          title: "IP & Hybrid Workflows",
          desc: "Modern integration solutions combining traditional broadcast infrastructure with flexible IP-based production and distribution technologies."
        },
        {
          title: "Control & Monitoring Systems",
          desc: "Centralized monitoring and control platforms providing visibility, management, and operational oversight across connected technical systems."
        },
        {
          title: "Equipment Integration",
          desc: "Seamless integration of cameras, switchers, graphics systems, servers, audio infrastructure, and supporting production technologies."
        },
        {
          title: "Scalable System Architecture",
          desc: "Future-ready infrastructure designed to accommodate evolving production requirements, technology upgrades, and organizational growth."
        }
      ]
    }
  ];

  const whyUsData = [
    {
      title: "Built for Long-Term Performance",
      desc: "Strategic system integration services delivering reliable infrastructure, streamlined workflows, and scalable technology foundations for broadcast operations."
    },
    {
      items: [
        {
          title: "End-to-End Project Delivery",
          desc: "Comprehensive support from planning and design through deployment, testing, commissioning, and operational handover."
        },
        {
          title: "Customized Integration Solutions",
          desc: "Every system is designed around specific workflow requirements, operational goals, and technical objectives."
        },
        {
          title: "Proven Technical Expertise",
          desc: "Experienced engineers deliver reliable integration services across broadcast, production, and media technology environments."
        },
        {
          title: "Future-Ready Infrastructure",
          desc: "Scalable system designs accommodate emerging technologies, workflow changes, and long-term operational requirements."
        },
        {
          title: "Operational Efficiency",
          desc: "Integrated workflows simplify system management, improve collaboration, and enhance overall production performance."
        },
        {
          title: "Reliable Ongoing Support",
          desc: "Dedicated technical assistance ensures systems continue operating efficiently throughout their lifecycle."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "/gallery/sports-production/1.png",
      imageLink: "/gallery/sports-production/1.png",
    },
    {
      imageSrc: "/gallery/sports-production/2.png",
      imageLink: "/gallery/sports-production/2.png",
    },
    {
      imageSrc: "/gallery/sports-production/3.png",
      imageLink: "/gallery/sports-production/3.png",
    },
    {
      imageSrc: "/gallery/sports-production/4.png",
      imageLink: "/gallery/sports-production/4.png",
    },
    {
      imageSrc: "/gallery/sports-production/5.png",
      imageLink: "/gallery/sports-production/5.png",
    },
    {
      imageSrc: "/gallery/sports-production/6.png",
      imageLink: "/gallery/sports-production/6.png",
    },
    {
      imageSrc: "/gallery/sports-production/7.jpg",
      imageLink: "/gallery/sports-production/7.jpg",
    },
    {
      imageSrc: "/gallery/sports-production/8.jpg",
      imageLink: "/gallery/sports-production/8.jpg",
    },
    {
      imageSrc: "/gallery/sports-production/9.jpg",
      imageLink: "/gallery/sports-production/9.jpg",
    }
  ];

  const projects = [
    {
      title: "CSB News",
      desc: "Real Impact integrated and commissioned the channel's initial broadcast infrastructure, including cameras, MCR, and PCR systems, supporting uninterrupted 24-hour news operations."
    },
    {
      title: "Janmat / Live India News",
      desc: "Delivered dual six-camera studio setups, multiple PCR facilities, technical manpower, and operational support, successfully managing continuous broadcast operations for years."
    },
    {
      title: "HT News",
      desc: "Designed and integrated a complete business news broadcasting facility featuring multi-camera studios, routing systems, communication infrastructure, servers, and workflows."
    },
    {
      title: "PTC News",
      desc: "Successfully designed, commissioned, and supported a regional news channel with studios, playout systems, graphics, editing facilities, and maintenance services."
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
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end pb-24">
            <div className="lg:w-[50%]">
              <div className="subtitle mb-5">Why Choose Us</div>
              <h2 className="title text-white">{whyUsData[0].title}</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description">{whyUsData[0].desc}</p>
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
            <div className="subtitle mb-5">Projects</div>
            <h2 className="title text-white mb-4">Featured Integration Projects</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {
              projects.map(({ title, desc }, index) => (
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
    </>
  )
}
