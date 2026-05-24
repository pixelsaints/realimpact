"use client";

import TextMarquee from "@/components/ui/text-marquee";

export default function AboutSection() {
  return (
    <section className=" bg-[url('/images/bg-about.webp')] bg-center bg-cover h-screen bg-fixed">
      <div className="overflow-x-clip z-10 py-4">
        <TextMarquee />
      </div>
    </section>
  )
}
