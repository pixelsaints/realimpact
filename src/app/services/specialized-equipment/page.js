import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import Sections from "./sections";


export default function SportsProduction() {
  return (
    <>
      <PageHeader
        backLink="/services"
        titleFirst="Specialized Broadcast"
        titleSecond="Equipment Solutions"
        desc="Advanced broadcast equipment solutions supporting complex production requirements with reliable technology, expert integration, and operational flexibility across diverse environments."
        video="/videos/video-04"
      />
      <Sections />


      <Cta />
    </>
  )
}