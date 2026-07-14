"use client";
import gsap from "@/lib/gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react";
import { fadeInUp, scaleUp } from "@/lib/animations/gsapProps"

gsap.registerPlugin(ScrollTrigger);

export default function PageTemplate({ data }) {

  const videoRef = useRef(null);
  const animate = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      // const titleSection = document.querySelectorAll('.title-section')
      // if (titleSection.length) {
      //   titleSection.forEach(element => {

      //     const elementTitle = new SplitType(element.querySelector('h2'), { types: "lines, chars" });
      //     const elementDesc = new SplitType(element.querySelector('p'), { types: "lines, chars" });

      //     const titleTl = gsap.timeline({
      //       scrollTrigger: {
      //         trigger: element,
      //         start: "top+=200 bottom",
      //         end: "bottom bottom",
      //         toggleActions: "play none none reverse",
      //       }
      //     })

      //     if (titleTl) {
      //       titleTl.from(elementTitle.chars, {
      //         ...fadeInUp,
      //         stagger: 0.04
      //       })
      //     }

      //     if (elementDesc) {
      //       titleTl.from(elementDesc.lines, {
      //         ...fadeInUp,
      //         stagger: 0.08,
      //       }, "-=0.6")
      //     }
      //   })
      // }

      // const staggerBottom = document.querySelectorAll('.stagger-bottom > div');

      // if (staggerBottom.length) {

      //   staggerBottom.forEach(item => {
      //     gsap.from(item, {
      //       ...fadeInUp,
      //       stagger: 0.4,
      //       scrollTrigger: {
      //         trigger: item,
      //         start: "top 75%",
      //         toggleActions: "play none none reverse"
      //       }
      //     })
      //   });
      // }

      const bg = videoRef.current.querySelectorAll('.bg');

      bg.forEach(element => {
        gsap.to(element, {
          scaleX: 0,
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top bottom",
            end: "70% bottom",
            scrub: true,
            toggleActions: "play none none reverse",
          }
        })
      });
    })

    return () => ctx.revert()

  }, []);

  return (
    <>
      <div className="project-content lg:mb-32">

        <section className="project-overview" ref={animate}>
          <div className="container lg:-mt-14 bg-black-900 z-3 relative">
            <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between lg:px-4 pt-8">
              <div className="project-title lg:w-[60%] title-section mb-8 lg:mb-0">
                <h2 className="title mb-6">Overview</h2>
                <p className="desc">{data.overview}</p>
              </div>

              <div className="quick-facts lg:w-[35%] lg:p-6">
                {
                  data.projectFacts &&
                  <div className="grid grid-cols-1 items-start space-y-2 lg:flex-row stagger-bottom">
                    {
                      data.projectFacts.map((facts, index) => {
                        return (
                          <div key={index} className="flex flex-col lg:px-4 py-2">
                            <span className="text-pri-200 uppercase tracking-[2px] mb-1 leading-normal text-[14px] font-light">{facts.title}</span>
                            <span className="text-white">{facts.detail}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </section>

        {
          data.video &&
          <section className="project-video my-24 lg:my-32 relative" ref={videoRef}>
            <div className="container">
              <div className="video-wrapper relative">
                <div className="bg bg-left"></div>
                <div className="bg bg-right"></div>
                <div className="wrap w-full lg:h-[80vh] relative overflow-hidden">
                  {
                    data.video.src &&
                    <video autoPlay muted loop playsInline poster={data.video.poster} className="lg:absolute h-full w-full object-center object-cover">
                      <source src={data.video.src} />
                    </video>
                  }

                  {
                    data.video.url &&
                    <iframe width="560" height="315" src={data.video.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="lg:absolute h-full w-full object-center object-cover"></iframe>
                  }


                </div>
              </div>
            </div>
          </section>
        }

        {
          data.challenges &&
          <section className="project-challenges">
            <div className="container">
              <div className="px-4">
                <div className="title-section">
                  <h2 className="title mb-6">Challenges</h2>
                  <p className="desc mb-16">{data.challenges.desc}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-stretch gap-16  mb-16">
                  <div className="lg:w-1/2 order-2">
                    <div className="list-items flex flex-col gap-4 divide-y divide-black-800">
                      {
                        data.challenges.list.map((item, index) => {

                          return (
                            <div key={index} className="pb-3">
                              <h4 className="text-pri-300 mb-2 font-serif">{item.title}</h4>
                              <p className="text-white/70 small">{item.desc}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="lg:w-1/2 order-1" style={{
                    backgroundImage: `url( ${data.challenges.challengesImg} )`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                  }}>

                    <img src={data.challenges.challengesImg} alt={data.pageHeader.title} className="lg:h-[460] w-full object-cover object-center flex lg:hidden" />
                  </div>
                </div>
              </div>
              <div className="h-px bg-black-700 my-24 lg:my-32"></div>
            </div>
          </section>
        }


        {
          data.solutions &&
          <section className="project-solutions">
            <div className="container">
              <div className="mb-16">
                <h2 className="title mb-6">Solutions</h2>
                <p className="desc mb-8">{data.solutions.desc}</p>
              </div>

              <div className="flex flex-col lg:flex-row items-stretch gap-16  mb-16">
                <div className="lg:w-1/2 order-2">
                  <div className="list-items flex flex-col gap-4 divide-y divide-black-800">
                    {
                      data.solutions.list.map((item, index) => {

                        return (
                          <div key={index} className="pb-3">
                            <h4 className="text-white mb-2">{item.title}</h4>
                            <p className="text-white/70 small">{item.desc}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="lg:w-1/2 oder-1 lg:order-2" style={{
                  backgroundImage: `url( ${data.solutions.solutionsImg} )`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover"
                }}>
                  <img src={data.solutions.solutionsImg} alt={data.pageHeader.title} className="lg:h-[460] w-full object-cover object-center flex lg:hidden" />
                </div>
              </div>
              <div className="h-px bg-black-700  my-24 lg:my-32"></div>
            </div>
          </section>
        }

        {
          data.results &&
          <section className="project-results">
            <div className="container">
              {/* <h2 className="title mb-16 text-center">Key Outcomes</h2> */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {
                  data.results.map((result, index) => {

                    return (
                      // <Counter
                      //   key={index}
                      //   count={result.count}
                      //   suffix={result.suffix}
                      //   text={result.text}
                      // />
                      <div className="count flex flex-col items-center" key={index}>
                        <div className="number text-[48px] lg:text-[64px] flex items-center leading-none text-white mb-4">
                          {result.count}
                          {result.suffix &&
                            <sup className="text-[24px] text-pri-400">{result.suffix}</sup>
                          }
                        </div>
                        <div className="text text-[14px] tracking-widest text-white/60 font-light">{result.text}</div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="h-px bg-black-700 my-24 lg:my-32"></div>
            </div>
          </section>
        }
      </div >
    </>
  )
}
