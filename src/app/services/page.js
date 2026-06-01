import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import ServicesList from "./services";


export default function ServicesPage() {
  return (
    <>
      <PageHeader
        subtitle="Broadcast Production & Technical Solutions"
        titleFirst="High-Resolution"
        titleSecond="Broadcast Excellence"
        desc=""
        video="/videos/Video-2020-02"
      />
      <ServicesList />
      <Cta />
    </>
  )
}
