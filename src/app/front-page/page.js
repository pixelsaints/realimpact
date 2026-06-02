import Cta from "@/components/layout/cta"
import AboutSection from "./sections/aboutSection"
import ClientsSection from "./sections/clientsSection"
import HeroSection from "./sections/heroSection"
import ProjectsSection from "./sections/projectsSection"
import ServiceSection from "./sections/serviceSection"
import WhyUs from "./sections/whyUs"
import YoutubeSection from "./sections/youtubeSection"

export default function FrontPage() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <YoutubeSection />
      <ServiceSection />
      <ProjectsSection />
      <WhyUs />
      <ClientsSection />
      <Cta />
    </>
  )
}
