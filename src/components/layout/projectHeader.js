import TransitionLink from "@/components/transitions/TransitionLink";

export default function ProjectHeader({ data }) {
  return (
    <div className="project-header flex items-center" style={{ backgroundImage: `url( ${data.pageHeader.image} )` }}>
      <div className="container relative">
        <div className="flex flex-col items-center lg:w-[60%]" >
          <div className="intro-subtitle flex flex-row items-center justify-center gap-3 text-white/70 mb-4 lg:-ml-8">
            <TransitionLink href="/projects" className="flex items-center gap-2 text-pri-400">Projects</TransitionLink> /
            <span className=" truncate ">{data.pageHeader.title}</span>
          </div>

          {data.pageHeader.title && <h1 className="intro-heading text-center">{data.pageHeader.title}</h1>}

          {data.pageHeader.desc && <p className="intro-desc mt-4 mb-8 text-center">{data.pageHeader.desc}</p>}

          <ul className="flex flex-row justify-center flex-wrap gap items-center-4 text-white lg:mb-0 gap-4 lg:gap-4">
            {data.pageHeader.tags.map((tag, index) => {
              return <li key={index}>{tag}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
