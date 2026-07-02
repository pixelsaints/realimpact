import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Indian Racing League",
      desc: "Delivered high-performance motorsport broadcast production across two seasons with reliable technical execution and seamless live coverage.",
      tags: ["Motorsport", "Multi-Camera", "Broadcast Engineering"],
      image: "/images/hero-slider-poster-1.webp"
    },

    overview:
      "Supporting the Indian Racing League required precision broadcast workflows, RF reliability, and coordinated live production to capture every race with consistent quality and technical excellence.",

    video: {
      src: "/videos/hero-video-01.webm",
      poster: "/images/hero-slider-poster-1.webp"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "RPPL"
      },
      {
        title: "Category",
        detail: "Motorsport Broadcast"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/indian-racing-league-challenges.webp",

      desc:
        "High-speed racing environments demanded dependable RF systems, rapid production decisions, and resilient broadcast workflows to deliver uninterrupted live coverage across every circuit while maintaining consistent signal quality, seamless coordination throughout each event.",

      list: [
        {
          title: "High-Speed Action",
          desc:
            "Fast-moving race cars required accurate camera tracking and responsive live switching throughout every competitive session consistently."
        },
        {
          title: "RF Connectivity",
          desc:
            "Reliable wireless transmission ensured uninterrupted onboard and trackside camera feeds despite challenging circuit environments throughout."
        },
        {
          title: "Live Race Coordination",
          desc:
            "Synchronizing multiple production teams maintained seamless communication and efficient broadcast operations during every race event."
        },
        {
          title: "Dynamic Coverage",
          desc:
            "Changing race conditions required adaptable production workflows delivering consistent visual quality across every live broadcast session."
        }
      ],

      approach:
        "Detailed production planning, experienced broadcast crews, redundant engineering systems, and continuous technical monitoring ensured reliable live coverage throughout every Indian Racing League event."
    },

    solutions: {
      solutionsImg: "/projects/indian-racing-league-solutions.webp",

      desc: "Combining advanced broadcast technology with experienced production teams enabled dependable motorsport coverage, capturing every race through efficient workflows, resilient technical infrastructure, RF transmission systems, multi-camera production, and real-time coordination. This integrated approach ensured consistent broadcast quality, reliable operations, and seamless live coverage throughout every racing event.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Specialized camera placements delivered immersive race coverage from multiple perspectives throughout every competitive session consistently."
        },
        {
          title: "RF Camera Systems",
          desc:
            "Wireless broadcast systems provided stable transmission for onboard and trackside cameras across demanding racing environments."
        },
        {
          title: "Replay Operations",
          desc:
            "Instant replay workflows highlighted overtakes, incidents, and decisive race moments with exceptional broadcast clarity throughout."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Redundant technical infrastructure maintained dependable signal routing and uninterrupted live production during every racing event consistently."
        }
      ]
    },

    results: [
      {
        count: "2",
        text: "Seasons"
      },
      {
        count: "100",
        suffix: "%",
        text: "Live Coverage"
      },
      {
        count: "1",
        text: "Production Partner"
      },
      {
        count: "24",
        suffix: "/7",
        text: "Technical Support"
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
      "rugby-premier-league",
      "ipl",
      "bangladesh-premier-league"
    ]
  };

  return (
    <>
      <ProjectHeader data={pageData} />
      <PageTemplate data={pageData} />
      <RelatedProjects projects={pageData.related} />
      <Cta />
    </>
  )
}