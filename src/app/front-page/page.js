import Cta from "@/components/layout/cta"
import AboutSection from "./sections/aboutSection"
import ClientsSection from "./sections/clientsSection"
import HeroSection from "./sections/heroSection"
import ProjectsSection from "./sections/projectsSection"
import ServiceSection from "./sections/serviceSection"
import WhyUs from "@/app/about/sections/whyUs"
import YoutubeSection from "./sections/youtubeSection"
import TextMarquee from "@/components/ui/text-marquee"

export default function FrontPage() {

  return (
    <>
      <HeroSection />
      <TextMarquee />
      <YoutubeSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <WhyUs />
      <ClientsSection />
      <Cta />
    </>
  )
}
