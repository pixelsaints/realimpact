import Cta from "@/components/layout/cta";
import Image from "next/image";
import PageHeader from "@/components/layout/page-header";
import AboutSection from "../front-page/temp";
import TextMarquee from "@/components/ui/text-marquee";

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
        titleFirst="Where Vision"
        titleSecond="Becomes Experiences"
        desc="Real Impact delivers broadcast production, technical execution, and rental solutions for large-scale events, live transmissions, and mission-critical operations."
        image={heroImage}
      />

      <section className="overflow-hidden py-24 lg:py-32">
        <div className="container relative">
          <img src="/svg/circle.svg" alt="about real impact" className="circle-rotate absolute inset-0 m-auto w-[70%] max-w-[50em] opacity-10 h-auto object-contain" />
        </div>
      </section>

      {/* <section className="py-24 lg:py-32 bg-black-900">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="subtitle mb-5">About Real Impact</div>
              <h2 className="title text-white">
                Broadcast strength with production instincts
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-white/72">
                Real Impact is India&apos;s broadcast equipment rental and production company, managed by a team of professionals with deep experience producing world-class events across creative, technical, and production departments.
              </p>
              <p className="text-white/72">
                We bring together engineering discipline, show-day calm, and practical production thinking so every crew, camera, signal, and screen works exactly when it needs to.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black-900 p-6 lg:p-8">
                <strong className="font-mono text-5xl font-normal text-pri-400 lg:text-7xl">
                  {stat.value}
                </strong>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 lg:py-32">
        <div className="container">
          <div className="mb-14 max-w-4xl">
            <div className="subtitle mb-5">What We Build Around</div>
            <h2 className="title text-white">
              A complete production backbone for live experiences
            </h2>
          </div>

          <div className="space-y-8">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-[220px_1fr_38%] lg:items-center"
              >
                <span className="font-display text-4xl font-light text-pri-400/80">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-white/62">
                    {item.desc}
                  </p>
                </div>
                <div className="relative h-64 w-full overflow-hidden lg:h-44">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-900 py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="subtitle mb-5">On Ground</div>
              <h2 className="title text-white">
                Calm crews, clean signals, precise execution
              </h2>
              <p className="mt-8 text-white/70">
                From the first technical brief to the last feed check, our work is shaped around reliability. The result is a production environment where directors, operators, producers, and clients can focus on the moment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-72 w-full overflow-hidden lg:h-96">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              {galleryImages.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="relative h-56 w-full overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Cta />
    </>
  )
}
