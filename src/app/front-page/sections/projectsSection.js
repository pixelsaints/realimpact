import { projectsList } from "@/data/projectsList";

export default function ProjectsSection() {
  return (
    <>
      <section className="projects-section pb-32">
        <div className="container">
          <div className="w-[70%] mx-auto flex flex-col items-center justify-center text-center">
            <div className="section-title text-white font-mono text-[5vw] uppercase">Recent Projects</div>
            <p className="section-description text-gray-300 mb-20">
              Explore a selection of our recent projects showcasing our expertise in broadcast engineering, live production, and media technology solutions.
            </p>
          </div>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through projectsList and render project cards */}
            {projectsList.map((project, index) => (
              <div key={index} className="project-card bg-black-900">
                <img src={project.image} alt={project.name} className="project-image h-56 w-full object-cover mb-6" />
                <div className="project-content p-4">
                  <h3 className="project-name text-white font-serif text-2xl ">{project.name}</h3>
                  <p className="project-description py-4 line-clamp-3 overflow-hidden">{project.description}</p>
                  <div className="project-tags flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag bg-black-700 py-1 px-2">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
