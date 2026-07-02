import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Rugby Premier League",
      desc: "Delivered world-class live rugby broadcast production across two seasons with seamless multi-camera coverage and technical execution.",
      tags: ["Live Sports", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/rugby-premier-league.webp"
    },

    overview:
      "The Rugby Premier League demanded a robust broadcast workflow capable of capturing every moment with precision and reliability. Across two seasons, our team delivered comprehensive end-to-end production, integrating multi-camera coverage, RF systems, replay operations, graphics, and technical coordination to create an immersive viewing experience for audiences nationwide.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      { title: "Client", detail: "Rugby Premier League" },
      { title: "Category", detail: "Sports Broadcast Production" },
      { title: "Services", detail: "End-to-End Live Production" },
    ],

    challenges: {
      challengesImg: "/projects/rugby-premier-league.webp",

      desc:
        "Producing a fast-paced rugby tournament required reliable technical coordination, resilient workflows, and uninterrupted coverage across demanding match environments while maintaining consistent broadcast quality.",

      list: [
        {
          title: "Fast-Paced Gameplay",
          desc: "Rapid gameplay required precise camera coordination and seamless switching to capture every critical on-field moment live."
        },
        {
          title: "RF Signal Reliability",
          desc: "Maintaining stable wireless camera connectivity across stadiums demanded continuous monitoring and redundancy."
        },
        {
          title: "Strict Timelines",
          desc: "Compressed match schedules required efficient setup, testing, and seamless transitions between consecutive live productions."
        },
        {
          title: "Broadcast Consistency",
          desc: "Delivering consistent visual quality across matches required standardized workflows and experienced production teams."
        }
      ],

      approach:
        "Through detailed planning, experienced engineering teams, redundant broadcast systems, and coordinated production workflows, we ensured uninterrupted live coverage while maintaining exceptional visual quality throughout every Rugby Premier League fixture."
    },

    approach: {
      image: "/projects/rugby-premier-league.webp",

      desc:
        "Every production workflow was planned to maximize reliability, efficiency, and broadcast quality.\n\nOur teams integrated multi-camera production, RF transmission, replay operations, graphics, and engineering support into a unified workflow, ensuring seamless match coverage from kickoff through the final whistle."
    },

    solutions: {
      solutionsImg: "/projects/rugby-premier-league.webp",

      desc:
        "Our integrated production strategy combined experienced personnel, advanced broadcast technology, and resilient engineering workflows to deliver reliable live coverage throughout both Rugby Premier League seasons.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Strategically positioned broadcast cameras captured dynamic gameplay from multiple perspectives with consistent visual storytelling throughout matches."
        },
        {
          title: "Replay Integration",
          desc:
            "Instant replay workflows highlighted key moments, enhancing audience engagement with accurate and timely match analysis."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Redundant technical systems ensured uninterrupted signal routing and dependable live production throughout every tournament fixture."
        },
        {
          title: "Production Coordination",
          desc:
            "Dedicated production teams synchronized technical operations, communications, and broadcast workflows for smooth live event execution."
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
        count: "20",
        suffix: "+",
        text: "Broadcast Crew"
      },
      {
        count: "1",
        text: "Unified Production Workflow"
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
      "asia-cup",
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
