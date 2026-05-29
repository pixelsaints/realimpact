import Cta from "@/components/layout/cta";
import PageHeader from "@/components/layout/page-header";
import AboutIntro from "./sections/aboutIntro";
import OurStory from "./sections/ourStory";
import OurApproach from "./sections/ourApproach";
import WhyUs from "./sections/whyUs";

const heroImage = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2200&auto=format&fit=crop";

const stats = [
  { value: "20+", label: "Years on live productions" },
  { value: "200+", label: "Projects delivered" },
  { value: "85+", label: "Clients and partners" },
  { value: "4K", label: "Broadcast-ready workflows" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="Live Production & Broadcast Specialists"
        titleFirst="Where Precision "
        titleSecond="Meets Production"
        desc="Real Impact delivers broadcast production, technical execution, and rental solutions for large-scale events, live transmissions, and mission-critical operations."
        video="/videos/bgmi-2024"
      />
      <AboutIntro />
      <OurStory />
      <OurApproach />
      <WhyUs />
      <Cta />
    </>
  )
}
