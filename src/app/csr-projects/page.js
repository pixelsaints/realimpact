"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { introScaleUp } from "@/lib/animations/gsapProps";
import Cta from "@/components/layout/cta";

const csrData = [
  {
    title: "Promoting Gender Equality and Reducing Social Inequalities ",
    description: "Our efforts focus on mitigating systemic discrimination faced by marginalized communities due to their gender identity and sexual orientation across families, educational institutions, and workplaces, while incorporating a queer perspective into gender-based violence prevention, livelihoods, education, and health. This is achieved by conducting specialized training programs, capacity-building workshops, and networking initiatives centered on issues of gender and sexuality."
  },
  {
    title: "Child & Youth Development and Education & Social Support",
    description: "Executing comprehensive child and youth development programs alongside targeted education and social support initiatives designed to uplift underprivileged children and youth, foster early growth, and provide foundational learning and welfare assistance."
  },
  {
    title: "Promoting Healthcare, Education, and Environmental Sustainability",
    description: "Executing diverse grassroots interventions that drive community welfare, including organizing regular blood donation camps and distributing free medicines to underprivileged populations. This pillar also encompasses providing supplemental tuition and educational support for disadvantaged children, alongside extensive tree plantation drives dedicated to ensuring environmental sustainability, ecological balance, and long-term conservation of natural resources."
  },
  {
    title: "Community Rehabilitation, Skill Development, and Livelihood Enhancement",
    description: "The Company aims at fostering grassroots socio-economic independence. This includes holistic community rehabilitation programs alongside targeted job placements and specialized vocational training initiatives such as cutting, tailoring, and dress-making classes. Additionally, we promote women empowerment and financial inclusion through the formation and nurturing of Swayam Sahayata Samuh (Self-Help Groups)."
  },
  {
    title: "Promoting Healthcare, Cancer Care, and Treatment Support",
    description: "Acting as a catalyst for sustainable positive change through partnerships with innovative charitable organizations, the company invests in foundations providing comprehensive cancer support. This includes funding treatment costs, advanced diagnostics, and patient travel logistics, alongside organizing cancer detection workshops, free specialist clinics, and social worker coordination for hospital navigation. Furthermore, the investments facilitate partial support for organizing cancer detection training workshops for healthcare workers in community hospitals, public awareness camps, and visiting free cancer clinics featuring cancer specialists"
  }
]

export default function csrProjects() {
  const heroRef = useRef(null);

  useEffect(() => {

    const subtitle = heroRef.current.querySelector('.intro-subtitle')
    const title = new SplitType(heroRef.current.querySelector('h1'), { types: "lines, chars", });
    const desc = new SplitType(heroRef.current.querySelector('p'), { types: "lines" });
    const intro = heroRef.current.querySelector('.intro');

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      if (subtitle) {
        tl.from(subtitle, {
          y: 32,
          opacity: 0,
          stagger: 0.1,
          ease: "back.inOut(1.4)",
          duration: 1,
        })
      }

      if (title) {
        tl.from(
          title.chars, {
          ...introScaleUp
        }, "-=1")
          .from(desc.lines, {
            y: 32,
            opacity: 0,
            stagger: 0.1,
            ease: "back.inOut(1.4)",
            duration: 1,
          }, "-=1.4");
      }
    })

    return () => ctx.revert();

  }, [])

  return (
    <>
      <div className="policy-header flex flex-col items-center justify-center relative overflow-hidden" ref={heroRef}>
        <div className="container flex flex-col justify-center items-center">
          <div className="intro lg:w-[75%]">
            <div className="intro-subtitle text-pri-400 text-center">Creating Impact Beyond Broadcasting</div>
            <h1 className="intro-heading text-center">Empowering Communities, Creating Impact</h1>
            <p className="intro-desc">Real Impact TV drives inclusive growth through initiatives in education, healthcare, gender equality, environmental sustainability, skill development, and community welfare.</p>
          </div>
        </div>
      </div>

      <section className="pt-8 lg:pb-10 pb-20 lg:pt-20">
        <div className="container">
          {csrData.map((project, index) => {
            const isOdd = index % 2 !== 0;
            const isLast = index === csrData.length - 1;

            return (
              <article
                key={index}
                className={`flex flex-col items-center lg:justify-between lg:flex-row ${isLast ? "pb-16" : "border-b border-black-700 mb-16 pb-16"}`}
              >
                {/* <div className="lg:w-[25%] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover object-center h-75"
                  />
                </div> */}

                <div className="flex items-start justify-center flex-col">
                  <div className="text-2xl lg:text-3xl text-white mb-6 leading-10 lg:leading-[1.3]">{project.title}</div>
                  <p className=" text-white/60">{project.description}</p>
                </div>
              </article>
            );
          })}

          <div className="committee pb-12 lg:pb-24 pt-12">
            <div className="text-2xl text-white mb-12 leading-[1.3]">CSR COMMITTEE</div>
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="commitee-member flex flex-col lg:flex-row gap-8 lg:w-1/2 lg:items-center">
                <img className="lg:w-56 h-80 rounded-lg object-cover object-center" src="/team/rajiv-sabharwal.avif" alt="" />
                <div>
                  <h4 className="text-white flex flex-col mb-6">
                    <span className="name text-2xl mb-1 tracking-wide">Rajiv Sabharwal</span>
                    <span className="desig text-[18px] text-white/60 tracking-wider">Managing Director</span>
                  </h4>
                  <p className="text-white/60">Rajiv Sabharwal is the Managing Director of Real Impact Private Limited, guiding the company's commitment to social responsibility through initiatives that promote community welfare, education, healthcare, environmental sustainability and inclusive growth.</p>
                </div>
              </div>

              <div className="commitee-member flex flex-col lg:flex-row gap-8 lg:w-1/2 lg:items-center">
                <img className="lg:w-56 h-80 rounded-lg object-cover object-top" src="/team/divya-sabharwal.avif" alt="" />
                <div>
                  <h4 className="text-white flex flex-col mb-6">
                    <span className="name text-2xl mb-1 tracking-wide">Divya Sabharwal</span>
                    <span className="desig text-[18px] text-white/60 tracking-wider">Director</span>
                  </h4>
                  <p className="text-white/60">Divya Sabharwal is a Director at Real Impact Private Limited, supporting the company's CSR commitment by contributing to initiatives focused on social welfare, women's empowerment, education, healthcare and sustainable community development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
