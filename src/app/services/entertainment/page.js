import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function Entertainment() {
  return (
    <>
      <PageHeader

        backLink="/services"
        titleFirst="Where Entertainment"
        titleSecond="Meets Technology"
        desc="Delivering broadcast production, technical infrastructure, live streaming, and event support solutions for concerts, festivals, award shows, and entertainment events."
        video="/videos/video-04"
      />
      <Sections />


      <Cta />
    </>
  )
}
