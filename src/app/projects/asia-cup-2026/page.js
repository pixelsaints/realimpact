import Cta from "@/components/layout/cta";
import PageTemplate from "../components/page-template";
import RelatedProjects from "../components/related";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Rugby Premier League",
      desc: "For ten consecutive seasons, our team delivered comprehensive broadcast production services for the Bangladesh Premier League, supporting live coverage across multiple venues with world - class technical infrastructure and experienced production crews.",
      tags: ["Live Sports", "Multi - Camera", "Broadcast Engineering"],
      // image: "/projects/rugby-premier-league.webp"
      video: "/videos/flypack-deployment.webm"
    },

    overview: "For ten consecutive seasons, our team delivered comprehensive broadcast production services for the Bangladesh Premier League, supporting live coverage across multiple venues with world - class technical infrastructure and experienced production crews.",

    video: "/videos/intro.webm",

    projectFacts: [
      { title: "Category", detail: "Indian Rugby League" },
      { title: "Coverage", detail: "Multi Venue" },
      { title: "Services", detail: "End to End Production" },
    ],

    challenges: {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum.",
      list: [
        {
          title: "Challenge 01",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum."
        },
        {
          title: "Challenge 02",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum."
        },
        {
          title: "Challenge 03",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum."
        },
        {
          title: "Challenge 04",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum."
        },
        {
          title: "Challenge 05",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto inventore ut eum sed nesciunt eligendi, molestiae error ipsa voluptatibus cum eos impedit dolorum."
        },
      ],
      approach: "Describe how the team handled every challenge with planning, engineering, redundancy, and experienced crews."
    },

    solutions: {
      solutionsImg: "/projects/rugby-premier-league.webp",
      desc: "Identifying potential constraints or issues early is important. Not only in building the creative but also in planning the production day schedule. The sooner we can identify any caveats that come with the project, the sooner we can start to navigate our way through them. We believe that projects are like a puzzle. You just need to figure out how to put them together.",

      list: [
        {
          title: "Deep Storytelling",
          desc: "Dig into our deep storytelling well of knowledge to find the right mechanism to build up to the one shot. One of the greatest tools in storytelling is the “reveal.” In movies, it's when the audience learns a critical piece of knowledge that makes everything else make"
        },
        {
          title: "Be Flexible",
          desc: "The information we were recieiving was constantly changing. One great trait that our customers have come to love is something we learned when we worked in journalism. The story is always changing. Kinda like Buddhism. "
        },
        {
          title: "Use Clever Editing",
          desc: "Of course in the end we didn't need to use a “stunt double” for the jersey and shoe tying shots. We actually had Rooney. But, had he been unavailable, we would've been able to do it without him. And damn if our post-production team didn't knock it out of the park."
        },
        {
          title: "Clear Communication",
          desc: "During the high stress moments, there was clear expectations set of our team and the client's team. Instructions on where to be and when. Fall back plans in case of last minute changes. We were on call day and night for a short amount of time, and happy to be."
        }
      ]
    },

    results: [
      { count: "10", text: "Seasons" },
      { count: "10", suffix: "M+", text: "Venues" },
      { count: "100", suffix: "+", text: "Live Matches" },
      { count: "4", suffix: "+", text: "Venues" },
    ],

    projectGallery: [
      "/projects/rpl/image-01.webp",
      "/projects/rpl/image-02.webp",
      "/projects/rpl/image-03.webp",
      "/projects/rpl/image-04.webp",
      "/projects/rpl/image-05.webp",
    ],

    related: ["ipl", "asia-cup", "bangladesh-premier-league"]
  }

  return (

    <>
      <PageTemplate data={pageData} />

      <div className="project-related">
        <RelatedProjects projects={pageData.related} />
      </div>

      <Cta />
    </>
  )
}
