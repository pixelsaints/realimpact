"use client";
import { useRef, useState, useEffect } from "react";
import OurApproach from "@/app/about/sections/ourApproach";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { animateSection } from "@/lib/animations/servicesAnimation";
// import { fadeInUp, scaleUp } from "@/lib/animations/gsapProps";


// gsap.registerPlugin(ScrollTrigger);

export default function Sections() {

  const introRef = useRef(null);
  const whyIntro = useRef(null);
  const galleryRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const capabalityList = [
    {
      title: "Wireless Camera Systems",
      desc: "Broadcast-grade RF camera solutions delivering stable, low-latency video transmission across dynamic live production environments."
    },
    {
      title: "Long-Range Signal Coverage",
      desc: "Reliable RF transmission systems engineered for extensive venue coverage and challenging production locations."
    },
    {
      title: "Frequency Coordination",
      desc: "Comprehensive RF planning and spectrum management to minimize interference and ensure signal stability."
    },
    {
      title: "Wireless Audio Solutions",
      desc: "Professional RF audio systems supporting clear, uninterrupted communication and program audio transmission."
    },
    {
      title: "Mobile Production Integration",
      desc: "Seamless integration of RF systems with OB vans, flypacks, remote productions, and broadcast control rooms."
    },
    {
      title: "Multi-Channel RF Networks",
      desc: "Scalable wireless infrastructure supporting multiple cameras, microphones, intercoms, and production signals."
    }
  ];

  const whyUsData = [
    {
      title: "Reliable RF Performance for Live Productions",
      desc: "Engineered wireless transmission solutions delivering dependable coverage, signal integrity, and operational flexibility for demanding broadcast environments."
    },
    {
      items: [
        {
          title: "Expert RF Planning",
          desc: "Detailed frequency coordination and site analysis ensure optimal performance in complex production environments."
        },
        {
          title: "Stable Signal Transmission",
          desc: "Advanced RF technologies maintain reliable video and audio connectivity throughout live events."
        },
        {
          title: "Wide Area Coverage",
          desc: "Solutions designed to support productions across stadiums, arenas, outdoor venues, and large event spaces."
        },
        {
          title: "Low-Latency Performance",
          desc: "Real-time wireless transmission enables smooth camera operation and responsive production workflows."
        },
        {
          title: "Scalable Wireless Infrastructure",
          desc: "Flexible RF systems support productions ranging from single-camera setups to large-scale multi-camera events."
        },
        {
          title: "Experienced Technical Support",
          desc: "Specialized RF engineers provide deployment, monitoring, and troubleshooting throughout every production."
        }
      ]
    }
  ];

  const galleryItems = [
    {
      imageSrc: "/public/gallery/4k-solutions/1-1-1.png",
      imageLink: "/public/gallery/4k-solutions/1-1-1.png",
      title: "Broadcast Control Room",
    },
    {
      imageSrc: "/public/gallery/4k-solutions/1-1-1.png",
      imageLink: "/public/gallery/4k-solutions/1-1-1.png",
      title: "Live Production Equipment",
    },
    {
      imageSrc: "/public/gallery/4k-solutions/1-1-1.png",
      imageLink: "/public/gallery/4k-solutions/1-1-1.png",
      title: "Wireless Camera Operations",
    },
    {
      imageSrc: "/public/gallery/4k-solutions/1-1-1.png",
      imageLink: "/public/gallery/4k-solutions/1-1-1.png",
      title: "Large Venue Coverage",
    },
    {
      imageSrc: "/public/gallery/4k-solutions/1-1-1.png",
      imageLink: "/public/gallery/4k-solutions/1-1-1.png",
      title: "Live Event Broadcasting",
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
      <section className="mb-24 lg:mb-32">
        <div className="container" ref={introRef}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end pb-24">
            <div className="lg:w-[45%]">
              <div className="subtitle mb-5">Our Capabilities</div>
              <h2 className="title text-white">Broadcast Without Boundaries</h2>
            </div>
            <div className="lg:w-[50%]">
              <p className="description">
                Real Impact enables broadcasters, production companies, and event organizers to produce live content from virtually any location. Our remote production workflows reduce on-site infrastructure requirements while maintaining the quality, reliability, and operational control expected in modern broadcast environments.
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
          <div className="flex flex-col justify-center items-center lg:w-[55%] mx-auto text-center pb-24">
            <div className="subtitle mb-5">Why Choose Us</div>
            <h2 className="title text-white mb-4">{whyUsData[0].title}</h2>
            <p className="description text-center"> {whyUsData[0].desc} </p>
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

          <div className="columns-2 lg:columns-4 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
                className="mb-6 block w-full break-inside-avoid overflow-hidden rounded-lg card outline-0 cursor-pointer gallery-link"
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
            plugins={[Captions]}
          />
        </div>
      </section>
    </>
  )
}
