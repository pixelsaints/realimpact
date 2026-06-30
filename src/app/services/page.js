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
        posterImage="/images/intro-poster.webp"
        video="/videos/intro"
      />
      <ServicesList />
      <Cta />
    </>
  )
}
