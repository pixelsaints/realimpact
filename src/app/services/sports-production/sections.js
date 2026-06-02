"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
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
      title: "Comprehensive Sports Coverage",
      desc: "Professional production solutions supporting live sporting events with advanced workflows, experienced crews, broadcast technology, and reliable execution across diverse venues."
    },
    {
      items: [
        {
          title: "Multi-Camera Event Coverage",
          desc: "Capture every angle of the action through coordinated multi-camera workflows that deliver dynamic storytelling, comprehensive coverage, and enhanced audience engagement."
        },
        {
          title: "Replay & Highlights Production",
          desc: "Integrated replay systems provide instant analysis, highlight packages, and critical game moments that enhance the viewing experience for audiences."
        },
        {
          title: "Live Graphics Integration",
          desc: "Real-time graphics solutions deliver scores, statistics, player information, branding, and visual enhancements that keep audiences informed throughout events."
        },
        {
          title: "Broadcast & Streaming Delivery",
          desc: "Reliable distribution workflows support television broadcasts, digital platforms, and streaming services while maintaining consistent quality and performance."
        },
        {
          title: "Commentary & Audio Systems",
          desc: "Professional audio infrastructure supports commentary teams, field communications, crowd ambience, and broadcast-quality sound production during live events."
        },
        {
          title: "Scalable Event Production",
          desc: "Flexible production systems adapt efficiently to tournaments, leagues, championships, and sporting events of varying size, complexity, and audience reach."
        }
      ]
    }
  ];

  const whyUsData = [
    {
      title: "Built for Competitive Sports Broadcasting",
      desc: "Experienced teams, reliable infrastructure, and proven workflows delivering high-quality sports productions for broadcasters, leagues, federations, and event organizers."
    },
    {
      items: [
        {
          title: "Extensive Sports Experience",
          desc: "Proven expertise supporting a wide range of sporting disciplines, tournaments, leagues, and championship events."
        },
        {
          title: "Reliable Live Operations",
          desc: "Broadcast-grade systems and operational processes ensure consistent performance throughout demanding live productions."
        },
        {
          title: "Fast-Paced Production Workflows",
          desc: "Efficient coordination enables rapid response to live action, ensuring critical moments are captured and delivered seamlessly."
        },
        {
          title: "Enhanced Viewer Engagement",
          desc: "Advanced replay, graphics, and production techniques create compelling viewing experiences for audiences."
        },
        {
          title: "Scalable Technical Infrastructure",
          desc: "Flexible production resources support events ranging from local competitions to major international tournaments."
        },
        {
          title: "Dedicated Production Teams",
          desc: "Experienced technical professionals manage planning, setup, operation, and support throughout every stage of production."
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
            <div className="lg:w-[45%]">
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

      <section className="pb-24 lg:pb-32">
        <div className="container">
          <ClientsCarosel />
        </div>
      </section>
    </>
  )
}
