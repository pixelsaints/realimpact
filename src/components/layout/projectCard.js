import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward } from "react-icons/io5";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col projects-card">
      <div className="relative image-wrapper">
        <TransitionLink href={project.link}>
          <img src={project.image} alt={project.name} className="project-image h-60 w-full object-cover object-center" />
        </TransitionLink>
      </div>
      <div className="project-content">
        <h3 className="project-name text-white font-serif">{project.name}</h3>
        <div className="project-tags flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span key={tagIndex} className="project-tag">{tag}</span>
          ))}
        </div>

        <p className="project-description my-4 line-clamp-3 overflow-hidden">{project.description}</p>

        <TransitionLink href={project.link} className="text-pri-400 btn btn-link">
          Learn More
          <span className="icon">
            <IoArrowForward className="front" />
            <IoArrowForward className="back" />
          </span>
        </TransitionLink>
      </div>
    </div>
  )
}
