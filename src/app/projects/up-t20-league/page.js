import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "UP T20 League",
      desc: "Delivered dependable T20 broadcast production with multi-camera workflows, technical expertise, and seamless live tournament coverage throughout.",
      tags: ["T20 Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/upt20.webp"
    },

    overview:
      "The UP T20 League required dependable broadcast operations capable of supporting an intensive tournament schedule with consistent production standards. Our team delivered end-to-end live production, integrating multi-camera coverage, replay systems, RF connectivity, graphics, and experienced engineering support to ensure reliable broadcasts and seamless technical execution throughout the competition.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/projects/upt20.webp"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "UP T20 League"
      },
      {
        title: "Category",
        detail: "Regional Cricket Broadcast"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/up-t20-league-challenges.webp",

      desc:
        "Broadcasting a regional T20 tournament demanded reliable technical infrastructure, efficient production coordination, resilient engineering systems, and adaptable workflows to deliver uninterrupted live coverage across multiple fixtures while maintaining consistent broadcast quality, operational efficiency, and dependable technical performance throughout the competition.",

      list: [
        {
          title: "Tight Match Schedule",
          desc:
            "Successive fixtures required efficient setup, testing, and seamless production readiness before every live cricket broadcast consistently."
        },
        {
          title: "Multi-Camera Operations",
          desc:
            "Coordinated camera coverage captured every match with dynamic visuals and consistent broadcast quality throughout tournament play."
        },
        {
          title: "Reliable RF Systems",
          desc:
            "Stable wireless connectivity ensured uninterrupted camera transmission across challenging stadium environments during every production."
        },
        {
          title: "Technical Coordination",
          desc:
            "Experienced production teams synchronized engineering, communications, and operations for efficient live tournament execution every match."
        }
      ],

      approach:
        "Through meticulous planning, standardized production workflows, resilient engineering infrastructure, and experienced technical professionals, we ensured dependable live broadcasts while maintaining operational efficiency, seamless coordination, and consistent production quality across every UP T20 League fixture."
    },

    solutions: {
      solutionsImg: "/projects/up-t20-league-solutions.webp",

      desc:
        "Integrating advanced broadcast technology with experienced production professionals enabled reliable tournament coverage through multi-camera workflows, replay integration, RF systems, graphics, and engineering support. This unified production approach ensured efficient operations, dependable live broadcasts, and consistently high production standards throughout the competition.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera systems delivered immersive cricket coverage with consistent broadcast-quality visuals from every critical angle throughout."
        },
        {
          title: "Replay Integration",
          desc:
            "Integrated replay workflows highlighted decisive match moments with accurate playback and seamless live broadcast synchronization consistently."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering systems maintained uninterrupted signal routing and dependable production throughout every tournament fixture consistently."
        },
        {
          title: "Production Coordination",
          desc:
            "Dedicated production teams synchronized operations, communications, and engineering for efficient tournament broadcast execution every match."
        }
      ]
    },

    results: [
      {
        count: "35",
        suffix: "+",
        text: "Matches"
      },
      {
        count: "3",
        suffix: "+",
        text: "Venues"
      },
      {
        count: "250",
        suffix: "+",
        text: "Production Hours"
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
      "bengal-pro-t20",
      "chhattisgarh-premier-league",
      "indian-racing-league"
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