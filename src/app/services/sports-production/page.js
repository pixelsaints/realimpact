import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function SpecializedEquipment() {
  return (
    <>
      <PageHeader
        backLink="/services"
        titleFirst="Professional Sports"
        titleSecond="Broadcast Services"
        desc="Comprehensive sports broadcasting solutions delivering multi-camera coverage, instant replay, graphics integration, live streaming, and reliable technical execution for every event."
        video="/videos/video-04"
        pageName="Sports Production"
      />
      <Sections />


      <Cta />
    </>
  )
}