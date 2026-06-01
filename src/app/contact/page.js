import PageHeader from "@/components/layout/page-header";
import ContactForm from "./contactForm";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Contact Real Impact"
        titleFirst="Plan Your"
        titleSecond="Next Production."
        desc="Tell us about your event, broadcast, streaming requirement, or equipment need. Our team will help shape the right technical plan for your production."
        video="/videos/video-1"
      />

      <section className="contact-section pb-24 lg:pb-32">
        <div className="container">
          <div className="contact-layout flex flex-col lg:flex-row lg:items-center">
            <div className="contact-panel lg:w-1/2">
              <p className="contact-eyebrow">Reach Us Directly</p>
              <p className="contact-copy">
                Share the production date, city, audience size, required
                services, and any technical details you already know.
              </p>

              <div className="contact-details">
                <a href="mailto:mail@realimpact.tv">mail@realimpact.tv</a>
                <a href="tel:+911141651334">New Delhi - +91 11 41651334</a>
                <a href="tel:+912240211332">Mumbai - +91 22 40211332</a>
                <p>
                  <b>New Delhi</b> - A 2/38, 3rd Floor, Safdarjung Enclave,
                  New Delhi-110 029, India
                </p>
                <p>
                  <b>Mumbai</b> - C-3, Singh Industrial Estate No-1 Goregaon
                  (West), Mumbai-400 104, India
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
