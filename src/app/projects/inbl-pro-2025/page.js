import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "INBL Pro 2025",
      desc: "Delivered professional basketball broadcast production with multi-camera workflows, replay integration, live graphics, and technical excellence.",
      tags: ["Basketball", "Multi-Camera", "Live Broadcast"],
      image: "/projects/inbl-pro-2025-cover.webp"
    },

    overview:
      "INBL Pro 2025 demanded fast-paced basketball coverage supported by reliable broadcast workflows and experienced production teams. We delivered end-to-end live production with multi-camera operations, replay integration, live graphics, RF systems, and coordinated technical execution, ensuring consistent broadcast quality throughout every game of the tournament.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "INBL Pro"
      },
      {
        title: "Category",
        detail: "Basketball Broadcast Production"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/inbl-pro-2025-challenges.webp",

      desc:
        "Broadcasting professional basketball required rapid camera transitions, synchronized replay workflows, dependable graphics integration, and resilient production systems capable of maintaining uninterrupted live coverage, fast decision-making, and consistent broadcast quality throughout every match while supporting dynamic game action seamlessly.",

      list: [
        {
          title: "Fast Game Pace",
          desc:
            "Rapid gameplay required responsive camera coordination and seamless vision mixing throughout every match consistently."
        },
        {
          title: "Replay Accuracy",
          desc:
            "Instant replay operations highlighted decisive moments while maintaining precise synchronization with live match coverage throughout."
        },
        {
          title: "Graphics Integration",
          desc:
            "Live score graphics required accurate updates and seamless integration throughout every broadcast without operational interruptions."
        },
        {
          title: "Production Coordination",
          desc:
            "Coordinated technical teams ensured efficient communication and dependable workflows during every live basketball production event."
        }
      ],

      approach:
        "Our experienced production crews combined meticulous planning, resilient engineering systems, standardized workflows, and real-time coordination to deliver dependable basketball broadcasts with consistent visual quality, seamless replay integration, and uninterrupted live coverage across every INBL Pro 2025 fixture."
    },

    solutions: {
      solutionsImg: "/projects/inbl-pro-2025-solutions.webp",

      desc:
        "Integrating advanced broadcast technology with experienced production professionals enabled efficient basketball coverage through multi-camera workflows, replay systems, live graphics, RF connectivity, and coordinated engineering support. This unified production approach delivered reliable broadcasts, operational efficiency, and exceptional viewing experiences throughout the tournament.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera setups captured dynamic basketball action from multiple perspectives with consistent broadcast-quality visuals throughout."
        },
        {
          title: "Replay Systems",
          desc:
            "Integrated replay workflows showcased crucial game moments with accurate playback and seamless broadcast synchronization every match."
        },
        {
          title: "Live Graphics",
          desc:
            "Real-time graphics delivered accurate scores, statistics, and game information throughout every live basketball broadcast consistently."
        },
        {
          title: "Technical Engineering",
          desc:
            "Resilient engineering infrastructure maintained dependable broadcast operations and uninterrupted signal distribution throughout tournament coverage."
        }
      ]
    },

    results: [
      {
        count: "50",
        suffix: "+",
        text: "Matches"
      },
      {
        count: "300",
        suffix: "+",
        text: "Production Hours"
      },
      {
        count: "100",
        suffix: "%",
        text: "Live Coverage"
      },
      {
        count: "1",
        text: "Season"
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
      "indian-racing-league",
      "rugby-premier-league",
      "ipl"
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