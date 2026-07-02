import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Chhattisgarh Premier League",
      desc: "Delivered regional cricket broadcast production with dependable workflows, technical expertise, and seamless multi-camera tournament coverage throughout.",
      tags: ["T20 Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/chhattisgarh-premier-league-cover.webp"
    },

    overview:
      "The Chhattisgarh Premier League required reliable broadcast production to deliver consistent live cricket coverage across the tournament. Our team provided end-to-end production services, integrating multi-camera operations, replay systems, RF connectivity, graphics, and experienced engineering support to ensure seamless broadcasts, dependable technical performance, and an engaging viewing experience throughout.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/projects/chhattisgarh-premier-league-cover.webp"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Chhattisgarh Premier League"
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
      challengesImg: "/projects/chhattisgarh-premier-league-challenges.webp",

      desc:
        "Delivering uninterrupted regional cricket coverage required dependable broadcast infrastructure, coordinated production teams, resilient engineering systems, and adaptable workflows capable of maintaining consistent production quality, efficient technical operations, and reliable live broadcasts throughout every fixture across tournament venues.",

      list: [
        {
          title: "Fast Match Turnaround",
          desc:
            "Successive fixtures required efficient production setup, technical testing, and dependable broadcast readiness before every live match."
        },
        {
          title: "Multi-Camera Coverage",
          desc:
            "Coordinated camera operations delivered dynamic cricket coverage with consistent broadcast-quality visuals throughout tournament play consistently."
        },
        {
          title: "Reliable RF Systems",
          desc:
            "Stable wireless connectivity ensured uninterrupted camera transmission across stadium environments during every tournament production consistently."
        },
        {
          title: "Operational Coordination",
          desc:
            "Experienced production teams synchronized communications, engineering, and workflows for efficient live tournament execution every match."
        }
      ],

      approach:
        "Through meticulous planning, standardized production workflows, resilient engineering systems, and experienced technical professionals, we delivered reliable tournament coverage while maintaining seamless operations, consistent broadcast quality, and dependable technical performance throughout every Chhattisgarh Premier League fixture."
    },

    solutions: {
      solutionsImg: "/projects/chhattisgarh-premier-league-solutions.webp",

      desc:
        "Our integrated production approach combined advanced broadcast technology with experienced professionals to deliver dependable cricket coverage through multi-camera workflows, replay integration, RF systems, graphics, and engineering support. This ensured efficient operations, reliable live broadcasts, and consistently high production standards across the tournament.",

      list: [
        {
          title: "Multi-Camera Production",
          desc:
            "Professional camera systems captured comprehensive cricket coverage with consistent broadcast-quality visuals throughout every tournament fixture."
        },
        {
          title: "Replay Integration",
          desc:
            "Integrated replay workflows showcased decisive match moments with accurate playback and seamless broadcast synchronization every game."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Resilient engineering infrastructure maintained dependable signal routing and uninterrupted production throughout tournament coverage consistently."
        },
        {
          title: "Production Coordination",
          desc:
            "Dedicated production teams synchronized engineering, communications, and operations for efficient tournament broadcast execution throughout."
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
      "up-t20-league",
      "bengal-pro-t20",
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