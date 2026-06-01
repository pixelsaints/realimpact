import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import TransitionLink from "@/components/transitions/TransitionLink";
import { getProjectSlug, projectsList } from "@/data/projectsList";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    alt: "Outdoor live production audience and stage",
  },
  {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
    alt: "Broadcast production control workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
    alt: "Conference production and audience setup",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    alt: "Concert broadcast lighting and stage",
  },
];

const findProject = (projectSlug) =>
  projectsList.find((project) => getProjectSlug(project.name) === projectSlug) ||
  projectsList[0];

export default async function ProjectSinglePage({ searchParams }) {
  const params = await searchParams;
  const project = findProject(params?.project);
  const gallery = [
    {
      src: project.image,
      alt: project.name,
    },
    ...galleryImages,
  ];

  return (
    <>
      <main className="project-single">
        <PageHeader
          // subtitle="Broadcast Equipment & Technical Infrastructure"
          fullTitle={project.name}
          desc={project.description}
          video="/videos/video-1"
          backLink="/projects"
        />

        <section className="pb-24 lg:pb-32">
          <div className="container">
            <div className="project-tags flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {gallery.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 lg:h-72 object-cover rounded-xl"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>


      </main>
      <Cta />
    </>
  );
}
