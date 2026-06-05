import Cta from "@/components/layout/cta"
import AboutSection from "@/app/front-page/sections/aboutSection"
import ClientsSection from "@/app/front-page/sections/clientsSection"
import HeroSection from "./sections/heroSection"
import ProjectsSection from "@/app/front-page/sections/projectsSection"
import ServiceSection from "@/app/front-page/sections/serviceSection"
import WhyUs from "@/app/front-page/sections/whyUs"
import YoutubeSection from "@/app/front-page/sections/youtubeSection"

export default function FrontPage() {

  return (
    <div className="light">
      <HeroSection />
      <AboutSection />
      <YoutubeSection />
      <ServiceSection />
      <ProjectsSection />
      <WhyUs />
      <ClientsSection />
      <Cta />
    </div>
  )
}
