import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import ProjectsGrid from "./projectsGrid";
import { projectsList } from "@/data/projectsList";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        subtitle="Broadcast Equipment & Technical Infrastructure"
        titleFirst="Engineered for"
        titleSecond="Demanding Productions."
        desc="Real Impact delivers broadcast production, technical execution, live streaming, and equipment rental solutions for high-stakes events, large-scale productions, and mission-critical operations."
        video="/videos/video-1"
      />
      <ProjectsGrid />
      <Cta />
    </>
  )
}
