import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Ambani Wedding",
      desc: "Delivered premium multi-camera broadcast production with flawless technical execution for India's most prestigious private wedding celebration.",
      tags: ["Live Events", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/ambani-wedding-cover.webp"
    },

    overview:
      "The Ambani Wedding demanded exceptional production standards, cinematic storytelling, and flawless technical execution across multiple celebrations. Our team delivered premium live production support through multi-camera workflows, RF systems, live switching, broadcast engineering, and coordinated technical operations, ensuring every ceremony was captured with precision, elegance, and uncompromising production quality.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      {
        title: "Client",
        detail: "Private Event"
      },
      {
        title: "Category",
        detail: "Luxury Event Production"
      },
      {
        title: "Services",
        detail: "End-to-End Live Production"
      },
    ],

    challenges: {
      challengesImg: "/projects/ambani-wedding-challenges.webp",

      desc:
        "Capturing a world-class private celebration required cinematic production quality, discreet technical operations, synchronized multi-camera coverage, dependable engineering infrastructure, and seamless coordination between production, lighting, audio, stage management, and event teams while maintaining uninterrupted coverage throughout every ceremony and celebration.",

      list: [
        {
          title: "Complex Event Schedule",
          desc:
            "Multiple ceremonies required seamless production planning and dependable technical readiness throughout every celebration."
        },
        {
          title: "Cinematic Coverage",
          desc:
            "Premium camera systems captured intimate moments with elegant visuals while maintaining unobtrusive event coverage throughout."
        },
        {
          title: "Technical Coordination",
          desc:
            "Production, lighting, audio, and engineering teams collaborated seamlessly for flawless event execution throughout every ceremony."
        },
        {
          title: "Broadcast Reliability",
          desc:
            "Resilient production systems ensured uninterrupted coverage despite complex event logistics and evolving production requirements."
        }
      ],

      approach:
        "Through meticulous planning, experienced production professionals, resilient engineering systems, and synchronized technical workflows, we delivered premium event coverage while maintaining exceptional production quality, seamless coordination, and dependable operations across every ceremony, performance, and celebration."
    },

    solutions: {
      solutionsImg: "/projects/ambani-wedding-solutions.webp",

      desc:
        "Combining cinematic production techniques with advanced broadcast technology enabled elegant event coverage through multi-camera workflows, RF connectivity, live switching, engineering support, and coordinated technical operations. This integrated approach ensured premium visual storytelling, operational efficiency, and flawless execution throughout the entire celebration.",

      list: [
        {
          title: "Multi-Camera Production",
          desc:
            "Specialized camera systems captured ceremonies from multiple perspectives with premium cinematic quality throughout every celebration."
        },
        {
          title: "Live Switching",
          desc:
            "Experienced vision mixing delivered seamless transitions between ceremonies, performances, and special moments throughout the event."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Reliable engineering infrastructure maintained uninterrupted production workflows and dependable technical performance throughout celebrations."
        },
        {
          title: "Production Management",
          desc:
            "Dedicated technical teams coordinated event operations, communications, and production workflows with exceptional precision throughout."
        }
      ]
    },

    results: [
      {
        count: "50",
        suffix: "+",
        text: "Production Crew"
      },
      {
        count: "15",
        suffix: "+",
        text: "Camera Systems"
      },
      {
        count: "100",
        suffix: "+",
        text: "Production Hours"
      },
      {
        count: "100",
        suffix: "%",
        text: "Event Coverage"
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
      "iifa-awards",
      "cricket-production",
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