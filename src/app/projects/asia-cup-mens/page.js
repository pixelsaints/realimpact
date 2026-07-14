import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Asia Cup 2025 (Men)",
      desc: "Delivered international men's cricket broadcast production with resilient workflows, engineering expertise, and seamless multi-venue tournament coverage.",
      tags: ["International Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/asia-cup-2025-men-cover.webp"
    },

    overview:
      "The 2025 Men's Asia Cup brought together eight international teams in a high-profile T20I tournament spanning multiple venues. Our team delivered end-to-end broadcast production through multi-camera workflows, replay integration, RF systems, graphics, and engineering support, ensuring dependable live coverage, consistent production quality, and seamless technical operations throughout every match.",

    video: {
      // src: "/videos/womens-asia-cup-2024.webm",
      poster: "/images/",
      url: "https://www.youtube.com/embed/--2YL68-x7Q?si=GpfYGTS4JmNve8FK"
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
      challengesImg: "/projects/ipl-challenges.webp",

      desc:
        "Broadcasting an international tournament featuring eight competing nations demanded resilient technical infrastructure, synchronized production teams, dependable engineering systems, and standardized workflows to deliver uninterrupted live coverage across multiple venues while maintaining exceptional broadcast quality, operational efficiency, and consistent tournament execution.",

      list: [
        {
          title: "International Tournament Scale",
          desc:
            "Supporting eight competing nations required dependable production planning and standardized broadcast workflows throughout the tournament consistently."
        },
        {
          title: "Multi-Venue Operations",
          desc:
            "Coordinating technical teams across venues ensured seamless production continuity and reliable live broadcasts every match."
        },
        {
          title: "Broadcast Reliability",
          desc:
            "Resilient engineering infrastructure maintained uninterrupted signal routing and dependable tournament coverage throughout every fixture consistently."
        },
        {
          title: "Compressed Schedule",
          desc:
            "Successive match days required rapid deployment, technical readiness, and efficient production workflows before every broadcast."
        }
      ],

      approach:
        "Through meticulous planning, experienced production professionals, resilient engineering systems, and coordinated broadcast workflows, we delivered dependable international tournament coverage while maintaining exceptional production standards, seamless operations, and reliable live broadcasts across every venue and match."
    },

    solutions: {
      solutionsImg: "/projects/asia-cup-2025-men-solutions.webp",

      desc:
        "Our integrated production approach combined advanced broadcast technology, multi-camera workflows, replay integration, RF connectivity, graphics systems, and experienced engineering support to deliver world-class international cricket coverage. This ensured operational efficiency, dependable live broadcasts, and consistent production quality throughout the Asia Cup 2025 tournament.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera systems captured every international fixture with dynamic perspectives and premium broadcast-quality visuals throughout."
        },
        {
          title: "Replay Operations",
          desc:
            "Integrated replay workflows showcased decisive match moments with seamless synchronization and accurate live presentation consistently."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering infrastructure ensured uninterrupted signal routing and dependable tournament production across every venue consistently."
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
        count: "8",
        text: "Teams"
      },
      {
        count: "19",
        text: "Matches"
      },
      {
        count: "2",
        text: "Venues"
      },
      {
        count: "20",
        text: "Days"
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