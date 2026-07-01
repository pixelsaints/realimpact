import { IoArrowForward } from "react-icons/io5";
import { projectsList } from "@/data/projectsList";
import TransitionLink from "@/components/transitions/TransitionLink";
import ProjectCard from "@/components/layout/projectCard";

export default function RelatedProjects({ projects }) {
  const relatedProjects = projects
    .map((slug) =>
      projectsList.find((project) => project.link === `/projects/${slug}`)
    )
    .filter(Boolean);

  return (
    <div className="container projects-list my-24 lg:my-32">
      <div className="flex flex-row justify-between items-center mb-16">
        <h2 className="text-white text-[24px]">Related Projects</h2>
        <TransitionLink href="/projects" className="text-pri-400 btn btn-link">
          All Projects
          <span className="icon">
            <IoArrowForward className="front" />
            <IoArrowForward className="back" />
          </span>
        </TransitionLink>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {relatedProjects.map((project) => (
          <ProjectCard key={project.link} project={project} />
        ))}
      </div>
    </div>
  );
}