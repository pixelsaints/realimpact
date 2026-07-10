import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";

export default function RfSolutions() {
  return (
    <>
      <PageHeader

        backLink="/services"
        titleFirst="Scalable Remote"
        titleSecond="Broadcast Workflows"
        desc="Delivering efficient, scalable, and cost-effective remote production solutions that connect venues, crews, and control rooms through reliable broadcast infrastructure and real-time collaboration."
        video="/videos/Video-2020-02"
        pageName="RF Soultions"
      />
      <Sections />


      <Cta />
    </>
  )
}
