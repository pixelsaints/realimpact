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
      title: "Purpose-Built Technical Solutions",
      desc: "Specialized equipment solutions designed to support unique production requirements, complex workflows, demanding environments, and critical broadcast operations with confidence."
    },
    {
      items: [
        {
          title: "High-End Broadcast Systems",
          desc: "Professional-grade equipment supporting advanced production workflows, delivering exceptional performance, reliability, and operational flexibility across demanding broadcast applications."
        },
        {
          title: "Specialty Camera Solutions",
          desc: "Specialized camera systems designed for unique shooting requirements, creative perspectives, challenging environments, and complex live production scenarios."
        },
        {
          title: "Advanced Signal Management",
          desc: "Sophisticated routing, conversion, monitoring, and signal distribution systems ensuring efficient workflow management throughout production operations."
        },
        {
          title: "Custom Equipment Integration",
          desc: "Tailored technical solutions integrating specialized equipment seamlessly into existing production infrastructures and operational workflows."
        },
        {
          title: "Mission-Critical Infrastructure",
          desc: "Reliable systems engineered for high-profile productions requiring consistent performance, redundancy, and operational continuity throughout execution."
        },
        {
          title: "Flexible Deployment Options",
          desc: "Adaptable equipment configurations supporting diverse production requirements, venue conditions, technical specifications, and project objectives."
        }
      ]
    }
  ];

  const whyUsData = [
    {
      title: "Equipped for Complex Productions",
      desc: "Access specialized technologies, experienced technical teams, and proven workflows designed to meet the most demanding production requirements."
    },
    {
      items: [
        {
          title: "Extensive Equipment Portfolio",
          desc: "A broad range of specialized broadcast technologies supporting unique production needs and technical challenges."
        },
        {
          title: "Expert Technical Guidance",
          desc: "Experienced professionals assist with equipment selection, workflow planning, deployment, and operational support."
        },
        {
          title: "Reliable System Performance",
          desc: "Professional-grade equipment maintained to the highest standards for dependable operation throughout productions."
        },
        {
          title: "Custom Workflow Solutions",
          desc: "Tailored technical approaches designed around specific project objectives, requirements, and production environments."
        },
        {
          title: "Seamless Integration",
          desc: "Specialized systems integrate efficiently with existing production infrastructure and operational workflows."
        },
        {
          title: "Production-Focused Support",
          desc: "Dedicated technical assistance ensuring equipment readiness, performance optimization, and successful project delivery."
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
            <div className="subtitle mb-5">Gallery</div>
            <h2 className="title text-white mb-4">Our Work in Action</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
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
