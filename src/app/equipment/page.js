import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import EquipmentGrid from "./equipmentGrid";


export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        subtitle="Broadcast Equipment & Technical Infrastructure"
        titleFirst="Engineered for"
        titleSecond="Demanding Productions."
        desc="Real Impact delivers broadcast production, technical execution, live streaming, and equipment rental solutions for high-stakes events, large-scale productions, and mission-critical operations."
        video="/videos/video-2020"
      />
      <section className="pb-24 lg:pb-32">
        <EquipmentGrid />
      </section>
      <Cta />
    </>
  )
}
