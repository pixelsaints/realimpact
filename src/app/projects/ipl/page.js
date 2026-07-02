import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Indian Premier League (IPL)",
      desc: "Supported six IPL seasons with dependable live broadcast production, engineering excellence, and seamless multi-camera tournament coverage.",
      tags: ["Live Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/ipl-cover.webp"
    },

    overview:
      "Across six Indian Premier League seasons, our team supported large-scale live broadcast production for one of cricket's most prestigious tournaments. Leveraging multi-camera workflows, replay systems, RF infrastructure, broadcast engineering, and experienced technical crews, we delivered dependable coverage while maintaining consistent production quality across every match and venue.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Indian Premier League"
      },
      {
        title: "Category",
        detail: "Cricket Broadcast Production"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/ipl-challenges.webp",

      desc:
        "Supporting one of the world's largest cricket tournaments required scalable broadcast infrastructure, experienced production teams, resilient engineering systems, and dependable workflows capable of delivering uninterrupted live coverage across multiple venues, demanding schedules, and high-profile international broadcasts every season.",

      list: [
        {
          title: "Large Tournament Scale",
          desc:
            "Managing large-scale broadcasts required efficient coordination across multiple venues, crews, and production workflows every season."
        },
        {
          title: "High Broadcast Expectations",
          desc:
            "Maintaining premium production quality demanded consistent engineering standards and dependable live broadcast execution throughout tournaments."
        },
        {
          title: "Compressed Match Schedules",
          desc:
            "Back-to-back fixtures required rapid equipment deployment, testing, and production readiness before every live broadcast consistently."
        },
        {
          title: "Technical Reliability",
          desc:
            "Robust engineering systems ensured uninterrupted signal routing and dependable broadcast operations throughout every tournament match consistently."
        }
      ],

      approach:
        "Meticulous planning, standardized production workflows, resilient engineering infrastructure, and experienced broadcast professionals enabled seamless tournament coverage while maintaining exceptional production quality, technical reliability, and operational efficiency across six Indian Premier League seasons."
    },

    solutions: {
      solutionsImg: "/projects/ipl-solutions.webp",

      desc:
        "Our integrated production approach combined advanced broadcast technology, experienced technical teams, multi-camera workflows, replay systems, RF connectivity, and engineering expertise to deliver dependable IPL coverage. This scalable workflow ensured reliable live broadcasts, efficient operations, and consistently high production standards across every tournament season.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera systems captured every match with dynamic perspectives and consistent broadcast-quality visuals throughout tournaments."
        },
        {
          title: "Replay Operations",
          desc:
            "Integrated replay systems delivered accurate match highlights and decisive moments with seamless live broadcast synchronization consistently."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering infrastructure maintained uninterrupted signal distribution and dependable production throughout every tournament fixture consistently."
        },
        {
          title: "Technical Coordination",
          desc:
            "Experienced production teams synchronized communications, engineering, and operations for efficient tournament broadcast execution every match."
        }
      ]
    },

    results: [
      {
        count: "6",
        text: "Seasons"
      },
      {
        count: "400",
        suffix: "+",
        text: "Matches"
      },
      {
        count: "15",
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
      "asia-cup",
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