import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Cricket Production for Various Boards",
      desc: "Delivered dependable cricket broadcast production across domestic and international tournaments with scalable technical expertise and operational excellence.",
      tags: ["Cricket", "Live Broadcast", "Production Engineering"],
      image: "/projects/cricket-production.webp"
    },

    overview:
      "Delivered comprehensive broadcast production solutions for domestic and international cricket boards, supporting diverse tournaments across multiple countries. Our experienced teams managed multi-camera workflows, RF systems, replay operations, broadcast engineering, and technical coordination to ensure reliable live coverage, consistent production quality, and seamless execution throughout every event.",

    video: {
      src: "/videos/intro.webm",
      poster: "/images/intro-poster.webp"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Multiple Cricket Boards"
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
      challengesImg: "/projects/cricket-production-challenges.webp",

      desc:
        "Supporting multiple cricket boards required adaptable production workflows, standardized technical processes, dependable broadcast infrastructure, and experienced crews capable of delivering consistent live coverage across varying tournament formats, venues, operational requirements, and international production standards while maintaining broadcast excellence.",

      list: [
        {
          title: "Diverse Tournament Formats",
          desc:
            "Different tournament structures required flexible production workflows while maintaining consistent broadcast quality across every competition."
        },
        {
          title: "Multi-Venue Coordination",
          desc:
            "Simultaneous venue operations demanded efficient logistics, communication, and technical coordination between experienced production teams throughout."
        },
        {
          title: "Broadcast Standardization",
          desc:
            "Maintaining consistent production standards required unified engineering workflows, equipment, and experienced technical personnel throughout."
        },
        {
          title: "Operational Scalability",
          desc:
            "Rapidly scaling production resources ensured dependable broadcast delivery across domestic and international cricket tournaments consistently."
        }
      ],

      approach:
        "Our experienced production teams implemented standardized workflows, resilient engineering systems, and meticulous planning to deliver reliable broadcast solutions across multiple cricket boards, adapting seamlessly to varying tournament formats, venue requirements, and production scales while maintaining exceptional technical quality."
    },

    solutions: {
      solutionsImg: "/projects/cricket-production-solutions.webp",

      desc:
        "Combining experienced broadcast professionals with advanced production technology enabled scalable cricket coverage across multiple boards. Integrated engineering, RF systems, replay operations, and coordinated technical workflows ensured reliable live broadcasts, operational efficiency, and consistently high production standards for every tournament and venue.",

      list: [
        {
          title: "Scalable Production",
          desc:
            "Flexible broadcast infrastructure adapted efficiently to tournaments of varying sizes across domestic and international cricket events."
        },
        {
          title: "Engineering Excellence",
          desc:
            "Resilient technical systems ensured dependable signal routing and uninterrupted broadcast operations throughout every production schedule."
        },
        {
          title: "Multi-Camera Coverage",
          desc:
            "Professional camera workflows captured comprehensive match coverage with broadcast-quality visuals from every critical perspective consistently."
        },
        {
          title: "Technical Coordination",
          desc:
            "Dedicated production teams synchronized engineering, communications, and operations for efficient live tournament execution every match."
        }
      ]
    },

    results: [
      {
        count: "10",
        suffix: "+",
        text: "Board Associations"
      },
      {
        count: "5",
        suffix: "+",
        text: "Countries"
      },
      {
        count: "1000",
        suffix: "+",
        text: "Production Hours"
      },
      {
        count: "100",
        suffix: "+",
        text: "Live Matches"
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
      "asia-cup-mens"
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