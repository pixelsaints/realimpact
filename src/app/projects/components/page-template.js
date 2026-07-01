import { IoArrowBack } from "react-icons/io5";
import TransitionLink from "@/components/transitions/TransitionLink";
import Counter from "@/components/ui/couner";

export default function PageTemplate({ data }) {
  return (
    <>
      <div className="project-header flex items-center">
        <div className="container relative">
          <div className="w-full flex flex-col item-start justify-start" >
            <div className="intro flex flex-col relative z-20">
              <div className="intro-subtitle mb-5">
                <TransitionLink href="/projects" className="flex items-center gap-2 text-pri-400">
                  <IoArrowBack /> Projects
                </TransitionLink>
              </div>
              <h1 className="intro-heading lg:w-[60%]">
                {data.pageHeader.title}
              </h1>
              <p className="intro-desc mt-4 lg:w-[60%] mb-8">{data.pageHeader.desc}</p>

              <ul className="flex flex-row flex-wrap gap-4 text-white mb-16 lg:mb-0">
                {data.pageHeader.tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>
                })}
              </ul>
            </div>

            <div className="video-player lg:absolute lg:right-0 lg:inset-0 ml-auto my-auto lg:w-[50%] lg:h-[60vh] rounded-2xl overflow-hidden">

              {
                data.pageHeader.image &&
                <div className="relative">
                  <div className="absolute bg-black/70 w-full h-full inset-0 z-10 hidden"></div>
                  <img
                    className="absolute bg-black/50 w-full h-full inset-0 z-5"
                    src={data.pageHeader.image}
                    alt={data.pageHeader.title}
                  />
                </div>
              }

              {
                data.pageHeader.video &&
                <>
                  <div className="absolute bg-black/50 w-full h-full inset-0 z-10 hidden" ></div>
                  <video autoPlay muted loop playsInline className="lg:absolute w-full h-full object-cover" poster="/images/sports-production-2.webp">
                    <source src={data.pageHeader.video} type="video/webm" />
                  </video>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="project-content lg:mb-32 lg:mt-20">
        <div className="container">
          <section className="project-overview">
            <h2 className="title mb-6">Overview</h2>
            <p className="desc">{data.overview}</p>

            <hr />

            <div className="quick-facts flex flex-col lg:flex-row justify-start gap-4">
              {
                data.projectFacts.map((facts, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2 min-w-[25%]">
                      <span className="text-white/70 text-[14px]">{facts.title}</span>
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
            <p className="desc mb-16">{data.challenges.desc}</p>

            {/* <hr /> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {
                data.challenges.list.map((item, index) => {

                  return (
                    <div key={index} className="p-4 lg:p-6 rounded lg:rounded-xl border border-black-700">
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
              <p className="desc mb-8">{data.solutions.desc}</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16  mb-16">
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-4 divide-y divide-black-600">
                  {
                    data.solutions.list.map((item, index) => {

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
              <div className="lg:w-1/2">
                <img src={data.solutions.solutionsImg} alt={data.pageHeader.title} className="lg:h-[460] w-full rounded-xl object-cover object-center" />
              </div>
            </div>
          </section>

          <hr />

          <section className="project-results my-16">
            <h2 className="title mb-16 text-center">Key Outcomes</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {
                data.results.map((result, index) => {

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
    </>
  )
}
