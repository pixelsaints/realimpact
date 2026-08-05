"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoArrowForward, IoCloseOutline } from "react-icons/io5";

const teamData = [
  {
    id: "rajiv-sabharwal",
    name: "Rajiv Sabharwal",
    position: "Managing Director",
    image: "/team/rajiv-sabharwal.avif",
    shortBio: [
      `Rajiv Sabharwal is the Managing Director of Real Impact Private Limited and the visionary force behind the company's evolution into a respected name in broadcast technology, live production and large-scale event execution.`,

      `Rajiv began his professional journey with Tel Excell Information Systems Limited, where he contributed to a major networking project associated with the Indian Stock Exchange. This early exposure to technology, systems integration and complex infrastructure management laid the foundation for his transition into the rapidly growing world of media, sports and entertainment.`
    ],
    bio: [
      `Rajiv Sabharwal is the Managing Director of Real Impact Private Limited and the visionary force behind the company's evolution into a respected name in broadcast technology, live production and large-scale event execution. With more than 27 years of industry experience, he has played a defining role in shaping the company's capabilities, reputation and international presence.`,

      `Rajiv began his professional journey with Tel Excell Information Systems Limited, where he contributed to a major networking project associated with the Indian Stock Exchange. This early exposure to technology, systems integration and complex infrastructure management laid the foundation for his transition into the rapidly growing world of media, sports and entertainment.`,

      `Under his leadership, Real Impact has grown from a modest venture into an end-to-end production and technology partner serving leading broadcasters, sports organisations and entertainment networks.`,

      `Known for his people-first leadership, Rajiv has created a culture built on trust, loyalty and shared success. He continues to guide Real Impact's growth with a clear focus on innovation, dependable execution, strong partnerships and long-term value creation.`
    ]
  },
  {
    id: "divya-sabharwal",
    name: "Divya Sabharwal",
    position: "Director",
    image: "/team/divya-sabharwal.avif",
    shortBio: [
      "Divya Sabharwal is a Director at Real Impact Private Limited and an integral part of the company's leadership team, contributing to its financial strength and long-term growth."
    ],
    bio: [
      `Divya Sabharwal is a Director at Real Impact Private Limited and an integral part of the company's leadership team. With a strong background in finance, business strategy and infrastructure management, she contributes to the company's financial strength, corporate governance, investment planning and long-term growth.`,

      `At Real Impact, Divya plays an important role in supporting high-value productions and international projects that require careful financial planning, advanced technology, workforce coordination and precise resource management. Her structured and analytical approach helps ensure that the company's expansion is supported by responsible decision-making and sound financial discipline.`,

      `She has contributed to Real Impact's work with prominent organisations across sports, entertainment and broadcast media, including Viacom18, BCCI, Sony Pictures Networks, Endemol, Abu Dhabi Media and the Bangladesh Cricket Board. Her strategic oversight has also supported landmark assignments such as the company's broadcast operations for Dubai Expo 2020, where Real Impact delivered over 1,200 hours of 4K live content across multiple venues and channels`,
    ]
  },
  {
    id: "sandeep-gupta",
    name: "Sandeep Gupta",
    position: "Chief Financial Officer",
    image: "/team/sandeep-gupta.avif",
    shortBio: [
      "Sandeep Gupta plays a key role in strengthening the company's financial management, regulatory compliance and long-term business planning."
    ],
    bio: [
      `Sandeep Gupta is the Chief Financial Officer of Real Impact Private Limited and plays a key role in strengthening the company's financial management, regulatory compliance and long-term business planning. A qualified Chartered Accountant, he brings more than 20 years of professional experience across corporate finance, taxation, financial reporting and regulatory affairs`,

      `His career includes valuable experience with Big Four professional services firms, where he developed a strong understanding of complex financial structures, governance frameworks and domestic as well as international regulatory requirements. This experience enables him to manage the financial complexities associated with large-scale productions, technology investments and cross-border projects.`,

      `At Real Impact, Sandeep oversees financial planning, budgeting, accounting, taxation, treasury management, statutory compliance and internal financial controls. He works closely with the leadership team to ensure that major business and investment decisions are supported by accurate analysis, responsible governance and sustainable financial strategies.`,

      `Sandeep also has extensive expertise in direct and indirect taxation, international tax matters and representation before various tax authorities and appellate forums. Known for his analytical approach, integrity and attention to detail, he continues to guide Real Impact's financial strategy while supporting its growth across broadcast production, media technology, entertainment and international markets.`
    ]
  },
  {
    id: "manish-aggarwal",
    name: "Manish Aggarwal",
    position: "Chief Executive Officer",
    image: "/team/manish-aggarwal.avif",
    shortBio: [
      "Manish Aggarwal leads the company's business strategy, operational growth, technology adoption and market expansion across broadcast production and live events."
    ],
    bio: [
      `Manish Aggarwal is the Chief Executive Officer of Real Impact Private Limited, where he leads the company's business strategy, operational growth, technology adoption and market expansion. With extensive experience in broadcast media and technology, he brings a strong understanding of how production, innovation and commercial strategy must work together to deliver high-quality content experiences.`,

      `His professional journey includes leadership roles with globally recognised organisations such as Vizrt, Grass Valley and Prime Focus Technologies. During his association with Vizrt, he managed business operations across Greater India, Israel and Africa, contributing to regional growth, customer engagement and the adoption of advanced broadcast and visual storytelling solutions.`,

      `Manish's areas of expertise include live and remote production, cloud-based broadcast workflows, digital transformation, mixed reality, augmented reality, virtual reality and next-generation content creation technologies. Over the years, he has worked closely with broadcasters, production companies, sports organisations and technology partners to develop scalable and efficient production solutions.`,

      `At Real Impact, Manish plays a central role in strengthening the company's position as a trusted production and technology partner. His leadership combines strategic thinking, customer focus and a deep understanding of evolving industry needs. He holds an MBA in Marketing from Jamnalal Bajaj Institute of Management Studies and continues to guide Real Impact towards greater innovation, stronger partnerships and sustainable international growth.`
    ]
  }
];

export default function TeamInfo() {
  const [selectedMember, setSelectedMember] = useState(null);

  const overlayRef = useRef(null);
  const drawerRef = useRef(null);

  const openMember = (member) => {
    setSelectedMember(member);
  };

  const closeMember = () => {
    const timeline = gsap.timeline({
      onComplete: () => setSelectedMember(null)
    });

    timeline
      .to(drawerRef.current, {
        xPercent: 100,
        duration: 0.6,
        ease: "power4.inOut"
      })
      .to(
        overlayRef.current,
        {
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.out"
        },
        0.15
      );
  };

  useLayoutEffect(() => {
    if (!selectedMember) return;

    const context = gsap.context(() => {
      gsap.set(overlayRef.current, {
        autoAlpha: 0
      });

      gsap.set(drawerRef.current, {
        xPercent: 100
      });

      const timeline = gsap.timeline();

      timeline
        .to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out"
        })
        .to(
          drawerRef.current,
          {
            xPercent: 0,
            duration: 0.8,
            ease: "power4.inOut"
          },
          0
        );
    });

    return () => context.revert();
  }, [selectedMember]);

  useEffect(() => {
    if (!selectedMember) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMember();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedMember]);

  return (
    <div className="container mx-auto pb-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamData.map((member, index) => (
          <article
            key={member.id}
            className={`rounded-2xl bg-black-800 p-4  ${index === 0 ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[40%_1fr] lg:gap-10 lg:p-8" : "flex flex-col"} `}
          >

            <img
              src={member.image}
              alt={member.name}
              className={` w-full rounded-xl object-cover object-top cursor-pointer ${index === 0 ? "h-100 lg:h-[60vh]" : "mb-4 h-70"}`}
              onClick={() => openMember(member)}
            />

            <div className={` flex flex-1 flex-col ${index === 0 ? "justify-center px-2 py-8 lg:px-0 lg:py-0" : "px-4 pt-4"}`}>
              <div className={` mb-1 tracking-wider text-white ${index === 0 ? "text-3xl" : "text-2xl"} `} >
                {member.name}
              </div>

              <div className="mb-4 text-[16px] tracking-wider text-white/80">
                {member.position}
              </div>

              {member.shortBio.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mb-5"
                >
                  {paragraph}
                </p>
              ))}

              <button
                type="button"
                onClick={() => openMember(member)}
                className="btn btn-link mb-2 self-start text-pri-400 cursor-pointer"
                aria-label={`Learn more about ${member.name}`}
              >
                Learn More

                <span className="icon">
                  <IoArrowForward className="front" />
                  <IoArrowForward className="back" />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedMember && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-1001 bg-black-900/85 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-member-name"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMember();
            }
          }}
        >
          <aside
            ref={drawerRef}
            className="flex h-full w-full flex-col bg-black-800/95 shadow-2xl ml-auto md:w-[65%] lg:w-1/2"
          >
            <div className="border-b flex flex-row items-center border-white/20 p-6 gap-8">
              <img src={selectedMember.image} alt="" className="w-[15%] rounded-xl h-auto object-cover object-center" />
              <div className="relative pr-14 w-full">
                <div
                  id="team-member-name"
                  className="mb-1 text-2xl tracking-wide text-white"
                >
                  {selectedMember.name}
                </div>

                <div className="text-[16px] tracking-wider text-white/80">
                  {selectedMember.position}
                </div>

                <button
                  type="button"
                  onClick={closeMember}
                  className="absolute right-0 top-1 grid h-11 w-11 place-items-center rounded-full text-3xl text-white transition-colors hover:bg-white/10 cursor-pointer"
                  aria-label="Close team member information"
                >
                  <IoCloseOutline />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-6 text-white/60">
              {selectedMember.bio.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}