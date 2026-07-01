import { IoArrowBack } from "react-icons/io5";
import TransitionLink from "@/components/transitions/TransitionLink";
import RelatedProjects from "../components/related";
import Counter from "@/components/ui/couner";
import Cta from "@/components/layout/cta";

export default function index() {

  const pageData = {
    pageHeader: {
      title: "Asia Cup 2026",
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
      <div className="project-header h-[70vh] flex items-center">
        <div className="container relative">
          <div className="w-full flex flex-col item-start justify-start" >
            <div className="intro flex flex-col relative z-20">
              <div className="intro-subtitle">
                <TransitionLink href="/projects" className="flex items-center gap-2 text-pri-400">
                  <IoArrowBack /> Projects
                </TransitionLink>
              </div>
              <h1 className="intro-heading w-[60%]">
                {pageData.pageHeader.title}
              </h1>
              <p className="intro-desc mt-4 lg:w-[60%] mb-8">{pageData.pageHeader.desc}</p>

              <ul>
                {pageData.pageHeader.tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>
                })}
              </ul>
            </div>

            <div className="video-player lg:absolute lg:right-0 lg:inset-0 ml-auto my-auto lg:w-[50%] lg:h-[60vh] rounded-2xl overflow-hidden">

              {
                pageData.pageHeader.image &&
                <div className="relative">
                  <div className="absolute bg-black/70 w-full h-full inset-0 z-10"></div>
                  <img
                    className="absolute bg-black/50 w-full h-full inset-0 z-5"
                    src={pageData.pageHeader.image}
                    alt={pageData.pageHeader.title}
                  />
                </div>
              }

              {
                pageData.pageHeader.video &&
                <>
                  <div className="absolute bg-black/50 w-full h-full inset-0 z-10"></div>
                  <video autoPlay muted loop playsInline className="lg:absolute w-full h-full object-cover" poster="/images/sports-production-2.webp">
                    <source src={pageData.pageHeader.video} type="video/webm" />
                  </video>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="project-content lg:mb-32 mt-20">
        <div className="container">
          <section className="project-overview">
            <h2 className="title mb-6">Overview</h2>
            <p className="desc">{pageData.overview}</p>

            <hr />

            <div className="quick-facts flex flex-col lg:flex-row justify-start gap-4">
              {
                pageData.projectFacts.map((facts, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2 min-w-[25%]">
                      <span className="text-white/70">{facts.title}</span>
                      <span className="text-white">{facts.detail}</span>
                    </div>
                  )
                })
              }
            </div>
            <hr />
          </section>

          <section className="project-challenges my-16">
            <h2 className="title mb-6">Challenges</h2>
            <p className="desc mb-16">{pageData.challenges.desc}</p>

            {/* <hr /> */}

            <div className="grid grid-cols-3 gap-10">
              {
                pageData.challenges.list.map((item, index) => {

                  return (
                    <div key={index} className="p-6 rounded-xl border border-black-700">
                      <h3 className="text-white mb-4">{item.title}</h3>
                      <p className="text-white/70 line-clamp-3">{item.desc}</p>
                    </div>
                  )
                })
              }
            </div>
          </section>

          <hr />

          <section className="project-challenges my-16">

            <div className="mb-16">
              <h2 className="title mb-6">Solutions</h2>
              <p className="desc mb-8">{pageData.solutions.desc}</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16  mb-16">
              <div className="w-1/2">
                <div className="flex flex-col gap-4 divide-y divide-black-600">
                  {
                    pageData.solutions.list.map((item, index) => {

                      return (
                        <div key={index} className="pb-3">
                          <h4 className="text-white mb-2">{item.title}</h4>
                          <p className="text-white/70 line-clamp-2">{item.desc}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="w-1/2">
                <img src={pageData.solutions.solutionsImg} alt={pageData.pageHeader.title} className="h-[460] w-full rounded-xl object-cover object-center" />
              </div>
            </div>
          </section>

          <hr />

          <section className="project-results my-16">
            <h2 className="title mb-16 text-center">Key Outcomes</h2>
            <div className="flex felx-col lg:flex-row justify-between">
              {
                pageData.results.map((result, index) => {

                  return (
                    <Counter
                      key={index}
                      count={result.count}
                      suffix={result.suffix}
                      text={result.text}
                    />
                  )
                })
              }
            </div>
          </section>

          <hr />
        </div>
      </div>

      <div className="project-related">
        <RelatedProjects projects={pageData.related} />
      </div>

      <Cta />
    </>
  )
}
