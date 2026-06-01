import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function fourkSolutions() {
  return (
    <>
      <PageHeader

        backLink="/services"
        titleFirst="High-Resolution"
        titleSecond="Broadcast Excellence"
        desc="Delivering end-to-end 4K production workflows, advanced camera systems, signal processing, recording, and transmission solutions for modern broadcast environments."
        video="/videos/video-03"
      />
      <Sections />


      <Cta />
    </>
  )
}
