import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function SystemIntegration() {
  return (
    <>
      <PageHeader
        backLink="/services"
        titleFirst="Broadcast System"
        titleSecond="Integration Services"
        desc="Designing, deploying, and integrating broadcast infrastructure that connects technology, workflows, and operations into efficient, scalable production environments."
        video="/videos/video-04"
        pageName="System Integration"
      />
      <Sections />
      <Cta />
    </>
  )
}