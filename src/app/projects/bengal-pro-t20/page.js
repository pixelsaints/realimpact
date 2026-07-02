import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Bengal Pro T20",
      desc: "Delivered regional T20 broadcast production with dependable workflows, technical coordination, and seamless multi-camera live match coverage.",
      tags: ["T20 Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/bengal-pro-t20-cover.webp"
    },

    overview:
      "Bengal Pro T20 required reliable broadcast production capable of delivering consistent live cricket coverage throughout the tournament. Our team provided end-to-end production services, integrating multi-camera workflows, replay systems, RF connectivity, graphics, and experienced engineering support to ensure seamless broadcasts across every match and venue with dependable technical execution.",

    video: {
      src: "/videos/video-2.webm",
      poster: "/projects/bengal-pro-t20.webp"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Bengal Pro T20"
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
      challengesImg: "/projects/bengal-pro-t20-challenges.webp",

      desc:
        "Delivering a regional T20 tournament required dependable production workflows, resilient broadcast infrastructure, experienced technical crews, and efficient coordination across venues to maintain uninterrupted live coverage, consistent production standards, rapid operational turnaround, and seamless technical execution throughout every tournament fixture.",

      list: [
        {
          title: "Fast Match Turnaround",
          desc:
            "Back-to-back fixtures required efficient production setup, testing, and seamless technical readiness before every live broadcast."
        },
        {
          title: "Multi-Camera Coordination",
          desc:
            "Coordinated camera operations ensured dynamic cricket coverage while maintaining consistent broadcast quality throughout every match."
        },
        {
          title: "Reliable RF Systems",
          desc:
            "Stable wireless connectivity supported uninterrupted camera transmission across challenging stadium environments during tournament operations consistently."
        },
        {
          title: "Production Consistency",
          desc:
            "Standardized engineering workflows maintained dependable broadcast quality across every venue and tournament fixture consistently."
        }
      ],

      approach:
        "Through meticulous planning, resilient engineering systems, experienced broadcast professionals, and standardized production workflows, we delivered reliable live coverage while ensuring seamless operations, consistent technical quality, and efficient coordination throughout every Bengal Pro T20 fixture."
    },

    solutions: {
      solutionsImg: "/projects/bengal-pro-t20-solutions.webp",

      desc:
        "Combining experienced production teams with advanced broadcast technology enabled dependable regional cricket coverage through multi-camera workflows, replay integration, RF systems, graphics, and coordinated engineering support. This unified production approach ensured efficient operations, reliable broadcasts, and consistent viewing experiences across the entire tournament.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera systems captured every match from multiple perspectives with consistent broadcast-quality visuals throughout tournament play."
        },
        {
          title: "Replay Integration",
          desc:
            "Integrated replay workflows showcased crucial match moments with seamless synchronization and accurate broadcast presentation every game."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering systems maintained dependable signal routing and uninterrupted production throughout every tournament fixture consistently."
        },
        {
          title: "Technical Coordination",
          desc:
            "Experienced crews synchronized production operations, engineering, and communications for efficient tournament execution every match."
        }
      ]
    },

    results: [
      {
        count: "30",
        suffix: "+",
        text: "Matches"
      },
      {
        count: "3",
        suffix: "+",
        text: "Venues"
      },
      {
        count: "200",
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
      "ipl",
      "cricket-production",
      "bangladesh-premier-league"
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