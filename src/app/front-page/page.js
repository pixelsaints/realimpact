import AboutSection from "./sections/aboutSection"
import ClientsSection from "./sections/clientsSection"
import HeroSection from "./sections/heroSection"
import ProjectsSection from "./sections/projectsSection"
import ServiceSection from "./sections/serviceSection"
import WhyUs from "./sections/whyUs"

export default function FrontPage() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <WhyUs />
      <ClientsSection />
    </>
  )
}
