import Cta from "@/components/layout/cta";
import PageTemplate from "@/components/layout/page-template";
import ProjectHeader from "@/components/layout/projectHeader";
import RelatedProjects from "@/components/layout/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Bangladesh Premier League",
      desc: "Delivered premium live cricket broadcast production across ten seasons with reliable multi-camera workflows and technical excellence.",
      tags: ["Live Cricket", "Multi-Camera", "Broadcast Engineering"],
      image: "/projects/bangladesh-premier-league.webp"
    },

    overview:
      "Over ten seasons of the Bangladesh Premier League, our team delivered dependable broadcast production for one of South Asia's premier T20 cricket tournaments. From multi-camera coverage and replay operations to RF systems and technical coordination, we ensured consistent live broadcasts that captured every moment with precision, reliability, and exceptional production quality.",

    video: {
      src: "/videos/rugby-pl.webm",
      poster: "/images/"
    },

    projectFacts: [
      { title: "Client", detail: "Bangladesh Premier League" },
      { title: "Category", detail: "T20 Cricket Broadcast" },
      { title: "Services", detail: "End-to-End Live Production" },
    ],

    challenges: {
      challengesImg: "/images/hero-slider-poster-2.webp",

      desc:
        "Delivering ten seasons of live T20 cricket demanded scalable production workflows, technical consistency, and reliable broadcast infrastructure across multiple venues and changing tournament requirements.",

      list: [
        {
          title: "Multi-Venue Operations",
          desc:
            "Coordinating production teams across tournament venues required efficient logistics, planning, and seamless technical deployment throughout."
        },
        {
          title: "Broadcast Quality",
          desc:
            "Maintaining consistent production standards across every fixture required standardized workflows and experienced broadcast professionals throughout."
        },
        {
          title: "High Match Frequency",
          desc:
            "Closely scheduled fixtures demanded rapid equipment turnaround, technical testing, and dependable production readiness before every broadcast."
        },
        {
          title: "Signal Reliability",
          desc:
            "Reliable RF connectivity and transmission systems ensured uninterrupted live coverage despite complex stadium broadcast environments throughout."
        }
      ],

      approach:
        "Through meticulous planning, experienced engineering teams, standardized workflows, and resilient technical infrastructure, we consistently delivered high-quality live broadcasts across ten Bangladesh Premier League seasons."
    },

    solutions: {
      solutionsImg: "/images/4k-boradcast-solutions.webp",

      desc:
        "Our production strategy combined experienced personnel, advanced broadcast technology, and proven engineering workflows to deliver dependable multi-season coverage while maintaining exceptional production standards throughout every tournament.",

      list: [
        {
          title: "Multi-Camera Coverage",
          desc:
            "Strategically positioned cameras delivered immersive match coverage, capturing every angle with consistent broadcast-quality visuals throughout."
        },
        {
          title: "Replay Operations",
          desc:
            "Integrated replay systems highlighted crucial match moments with accurate, timely playback for broadcasters and audiences alike."
        },
        {
          title: "Broadcast Engineering",
          desc:
            "Redundant signal routing and technical monitoring ensured uninterrupted production throughout every Bangladesh Premier League fixture consistently."
        },
        {
          title: "Production Coordination",
          desc:
            "Dedicated production teams synchronized operations, communications, and technical workflows for efficient live tournament execution every match."
        }
      ]
    },

    results: [
      {
        count: "10",
        text: "Seasons"
      },
      {
        count: "100",
        suffix: "%",
        text: "Live Coverage"
      },
      {
        count: "24",
        suffix: "/7",
        text: "Technical Support"
      },
      {
        count: "04",
        text: "Production Partners"
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
      "rugby-premier-league"
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