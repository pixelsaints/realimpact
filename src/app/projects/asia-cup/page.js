import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Asia Cup 2025",
      desc: "Delivered international cricket broadcast production with resilient workflows, advanced engineering, and dependable multi-venue live tournament coverage.",
      tags: ["International Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/asia-cup-cover.webp"
    },

    overview:
      "Asia Cup 2025 demanded broadcast operations capable of delivering consistent international coverage across multiple venues. Our team supported end-to-end live production through multi-camera workflows, RF systems, replay integration, engineering support, and coordinated technical operations, ensuring reliable broadcasts and exceptional viewing experiences throughout the tournament.",

    video: {
      src: "/videos/womens-asia-cup-2024.webm",
      poster: "/images/"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Asia Cup"
      },
      {
        title: "Category",
        detail: "International Cricket Broadcast"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/asia-cup-challenges.webp",

      desc:
        "Supporting an international cricket tournament required dependable technical infrastructure, synchronized production teams, resilient broadcast systems, and standardized workflows capable of delivering uninterrupted live coverage across multiple venues while maintaining exceptional broadcast quality, operational efficiency, and seamless tournament execution.",

      list: [
        {
          title: "Multi-Venue Coverage",
          desc:
            "Broadcasting multiple venues required synchronized production teams and dependable technical coordination throughout every tournament fixture consistently."
        },
        {
          title: "International Standards",
          desc:
            "Meeting global broadcast expectations demanded standardized workflows and resilient engineering across every live production operation consistently."
        },
        {
          title: "RF Reliability",
          desc:
            "Stable RF connectivity ensured uninterrupted wireless camera transmission throughout dynamic match environments and tournament operations consistently."
        },
        {
          title: "Tournament Scheduling",
          desc:
            "Compressed match schedules required efficient setup, testing, and dependable production readiness before every live broadcast."
        }
      ],

      approach:
        "Through meticulous planning, experienced engineering teams, resilient broadcast infrastructure, and standardized production workflows, we ensured reliable international coverage across every venue while maintaining exceptional technical quality, seamless operations, and uninterrupted live broadcasts throughout the Asia Cup tournament."
    },

    solutions: {
      solutionsImg: "/projects/asia-cup-solutions.webp",

      desc:
        "Combining advanced broadcast technology with experienced production professionals enabled dependable international cricket coverage through multi-camera workflows, replay systems, RF connectivity, and coordinated engineering support. This integrated production approach delivered consistent broadcast quality, operational efficiency, and reliable live coverage across every tournament venue.",

      list: [
        {
          title: "Multi-Camera Production",
          desc:
            "Professional camera systems captured every match with comprehensive coverage and consistent broadcast-quality visuals throughout tournament play."
        },
        {
          title: "Replay Integration",
          desc:
            "Advanced replay workflows highlighted decisive moments with accurate playback and seamless integration into live tournament coverage."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering infrastructure ensured uninterrupted signal routing and dependable broadcast operations throughout every tournament fixture."
        },
        {
          title: "Technical Coordination",
          desc:
            "Dedicated production teams synchronized communications, engineering, and operations for efficient international tournament execution throughout."
        }
      ]
    },

    results: [
      {
        count: "20",
        suffix: "+",
        text: "Matches"
      },
      {
        count: "250",
        suffix: "+",
        text: "Production Hours"
      },
      {
        count: "4",
        suffix: "+",
        text: "Venues"
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
      "ipl",
      "bangladesh-premier-league",
      "cricket-production"
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