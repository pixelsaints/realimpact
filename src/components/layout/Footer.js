import TransitionLink from "@/components/transitions/TransitionLink";
import { nav } from "@/data/menu";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container pt-10">
          {/* 1. Brand Statement */}
          <div className="footer__top w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="logo">
              <TransitionLink href="/">
                <img src="/logo.svg" alt="Real Impact" />
              </TransitionLink>
            </div>
            <div className="desc ml-auto lg:w-[50%] mt-8 lg:mt-0">
              <div className="text-[16px] leading-8 text-white/70">Real Impact is India's leading broadcast equipment rental and production company, delivering seamless technical solutions for world-class productions.</div>
            </div>
          </div>

          {/* 2. Core Grid */}
          <div className="flex flex-col lg:flex-row lg:justify-between mt-6 gap-16 footer-links">
            <div className="lg:w-[28%]">
              <h4>Company</h4>
              <ul className="flex flex-col divide-y divide-white/10 gap-1 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <TransitionLink href={item.href}>
                      {item.name}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-[28%]">
              <h4>Services</h4>
              <ul className="grid grid-cols-1 divide-y divide-white/10 gap-1 space-y-2">
                {nav
                  .find((item) => item.name === "Our Services")?.submenu?.map((sub) => (
                    <li key={sub.name}>
                      <TransitionLink href={sub.href} className="menu-link">
                        <span data-title={sub.name}>
                          {sub.name}
                        </span>
                      </TransitionLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="lg:w-[28%]">
              <h4 className="mb-4">Contact</h4>
              <div className="flex flex-col divide-y divide-white/10 gap-1 space-y-2">
                <div className="flex flex-col gap-2 text-[16px] mb-2">
                  <span className="text-white">Real Impact Private Limited</span>
                  <span className="text-white/70 mb-2 leading-7">Plot No. 165, 4th Floor, Yoga Niketan Marg, Bangur Nagar, Goregaon West, Mumbai - 400104,Maharashtra. India</span>
                  <span className="text-white/70 pb-4">GST No. 27AAECR6354B1ZI</span>
                </div>
                <a href="mailto:mail@realimpact.tv" className="text-white/70 hover:text-white transition pb-2">
                  mail@realimpact.tv</a>
                <a href="tel:+911141651334" className="text-white/70 hover:text-white transition pb-2">
                  New Delhi - +91 11 41651334</a>
                <a href="tel:+912240211332" className="text-white/70 hover:text-white transition pb-2">
                  Mumbai - +91 22 40211332</a>

              </div>
            </div>
          </div>

          {/* 4. Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-center pb-6 text-white/60 border-t border-t-black-700 pt-4 mt-6 copy">
            <p>© 2026 Real Impact. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
