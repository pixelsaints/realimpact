import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import ServicesList from "./services";


export default function ServicesPage() {
  return (
    <>
      <PageHeader
        subtitle="Broadcast Production & Technical Solutions"
        titleFirst="Services Engineered"
        titleSecond="for Live Productions"
        desc="Real Impact delivers broadcast production, technical execution, live streaming, and equipment rental solutions for high-stakes events, large-scale productions, and mission-critical operations."
        video="/videos/Video-2020-02"
      />
      <ServicesList />
      <Cta />
    </>
  )
}
