import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "IIFA Awards",
      desc: "Delivered world-class entertainment broadcast production with cinematic workflows, live switching, and seamless award ceremony coverage throughout.",
      tags: ["Entertainment", "Live Production", "Broadcast Engineering"],
      image: "/projects/iifa-awards-cover.webp"
    },

    overview:
      "The IIFA Awards demanded world-class entertainment broadcasting with cinematic visuals, precision timing, and flawless technical execution. Our team supported end-to-end live production through multi-camera workflows, live switching, RF systems, graphics integration, and experienced engineering support, ensuring a premium viewing experience throughout the prestigious awards ceremony.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "IIFA Awards"
      },
      {
        title: "Category",
        detail: "Entertainment Broadcast"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/iifa-awards-challenges.webp",

      desc:
        "Broadcasting a prestigious international awards ceremony required cinematic production quality, precise show timing, dependable technical infrastructure, and seamless coordination between production, lighting, audio, stage management, and broadcast engineering teams while delivering uninterrupted live coverage and exceptional viewer experiences.",

      list: [
        {
          title: "Complex Stage Production",
          desc:
            "Dynamic performances demanded synchronized camera movements, lighting coordination, and seamless live switching throughout every segment."
        },
        {
          title: "Live Show Timing",
          desc:
            "Precise production timing ensured uninterrupted transitions between performances, speeches, presentations, and commercial broadcast breaks consistently."
        },
        {
          title: "Cinematic Camera Coverage",
          desc:
            "Multiple camera systems captured performances and celebrity moments with polished cinematic visuals throughout the live event."
        },
        {
          title: "Technical Coordination",
          desc:
            "Production, engineering, lighting, and audio teams collaborated seamlessly for flawless live event execution throughout."
        }
      ],

      approach:
        "Our experienced production professionals combined meticulous planning, resilient engineering systems, synchronized technical workflows, and continuous communication to deliver a flawless awards broadcast, maintaining cinematic production quality, seamless show execution, and dependable live coverage from opening performances through the finale."
    },

    solutions: {
      solutionsImg: "/projects/iifa-awards-solutions.webp",

      desc:
        "Integrating cinematic camera systems with advanced broadcast technology and experienced production crews enabled seamless entertainment coverage. Coordinated live switching, graphics, RF connectivity, engineering support, and technical direction ensured exceptional production quality, operational efficiency, and an engaging viewing experience throughout the awards ceremony.",

      list: [
        {
          title: "Cinematic Coverage",
          desc:
            "Specialized camera systems captured performances, presenters, and audience moments with premium broadcast-quality visuals throughout."
        },
        {
          title: "Live Switching",
          desc:
            "Experienced vision mixing ensured seamless transitions between performances, awards, speeches, and entertainment segments consistently."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Reliable engineering infrastructure maintained uninterrupted signal routing and dependable live production throughout the entire ceremony."
        },
        {
          title: "Production Management",
          desc:
            "Dedicated technical teams coordinated broadcast operations, stage activities, and show execution with exceptional precision throughout."
        }
      ]
    },

    results: [
      {
        count: "30",
        suffix: "+",
        text: "Award Categories"
      },
      {
        count: "100",
        suffix: "+",
        text: "Production Crew"
      },
      {
        count: "20",
        suffix: "+",
        text: "Camera Systems"
      },
      {
        count: "100",
        suffix: "%",
        text: "Live Coverage"
      }
    ],

    projectGallery: [
      "/projects/rpl/image-01.webp",
      "/projects/rpl/image-02.webp",
      "/projects/rpl/image-03.webp",
      "/projects/rpl/image-04.webp",
      "/projects/rpl/image-05.webp",
    ],

    related: [
      "cricket-production",
      "ipl",
      "asia-cup"
    ]
  }

  return (
    <>
      <ProjectHeader data={pageData} />
      <PageTemplate data={pageData} />
      <RelatedProjects projects={pageData.related} />
      <Cta />
    </>
  )
}