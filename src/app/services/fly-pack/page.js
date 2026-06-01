import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function FlyPack() {
  return (
    <>
      <PageHeader
        backLink="/services"
        titleFirst="Fly Pack Production"
        titleSecond=" Systems"
        desc="Portable broadcast production solutions delivering professional multi-camera workflows, switching, recording, graphics, and streaming capabilities for events and remote productions."
        video="/videos/video-04"
      />
      <Sections />


      <Cta />
    </>
  )
}
