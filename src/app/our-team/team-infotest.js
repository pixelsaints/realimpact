"use client";

import TransitionLink from "@/components/transitions/TransitionLink";
import { IoArrowForward, IoCloseOutline } from "react-icons/io5";

export default function TeamInfoTest() {
  return (
    <div className="container mx-auto pb-24">
      <div className="mb-10">
        <div className="bg-black-800 rounded-2xl p-8 gap-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[40%]">
            <img src="/team/rajiv-sabharwal.avif" alt="Rajiv Sabharwal" className="h-[50vh] w-full object-cover object-top rounded-xl" />
          </div>
          <div className="lg:w-[60%]">
            <div className="text-white text-3xl mb-1 tracking-wide">Rajiv Sabharwal</div>
            <div className="text-white/80 text-[16px] mb-4 tracking-wider">Managing Director</div>
            <div className="text-white/60 mb-6">
              <p className="mb-4">Rajiv Sabharwal is the Managing Director of Real Impact Private Limited and the visionary force behind the company's evolution into a respected name in broadcast technology, live production and large-scale event execution. With more than 27 years of industry experience, he has played a defining role in shaping the company's capabilities, reputation and international presence.</p>

              <p>Rajiv began his professional journey with Tel Excell Information Systems Limited, where he contributed to a major networking project associated with the Indian Stock Exchange. This early exposure to technology, systems integration and complex infrastructure management laid the foundation for his transition into the rapidly growing world of media, sports and entertainment.</p>
            </div>

            <TransitionLink href="#rajiv" className="text-pri-400 btn btn-link">
              Learn More
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="bg-black-800 rounded-2xl p-4 flex flex-col">
          <img src="/team/divya-sabharwal.avif" alt="Divya Sabharwal" className="h-75 w-full object-cover object-top rounded-xl mb-4" />
          <div className="w-full px-4 pt-4">
            <div className="text-white text-2xl mb-1 tracking-wider">Divya Sabharwal</div>
            <div className="text-white/80 text-[16px] mb-4 tracking-wider">Director</div>
            <div className="text-white/60 line-clamp-4 mb-6">Divya Sabharwal is a Director at Real Impact Private Limited and an integral part of the company's leadership team. With a strong background in finance, business strategy and infrastructure management, she contributes to the company's financial strength, corporate governance, investment planning and long-term growth.</div>

            <TransitionLink href="#" className="text-pri-400 btn btn-link mb-2">
              Learn More
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>

        <div className="bg-black-800 rounded-2xl p-4 flex flex-col">
          <img src="/team/sandeep-gupta.avif" alt="Sandeep Gupta" className="h-75 w-full object-cover object-top rounded-xl mb-4" />
          <div className="w-full px-4 pt-4">
            <div className="text-white text-2xl mb-1 tracking-wider">Sandeep Gupta</div>
            <div className="text-white/80 text-[16px] mb-4 tracking-wider">Chief Financial Officer</div>
            <div className="text-white/60 line-clamp-4 mb-6">Sandeep Gupta is the Chief Financial Officer of Real Impact Private Limited and plays a key role in strengthening the company's financial management, regulatory compliance and long-term business planning. A qualified Chartered Accountant, he brings more than 20 years of professional experience across corporate finance, taxation, financial reporting and regulatory affairs.</div>

            <TransitionLink href="#" className="text-pri-400 btn btn-link mb-2">
              Learn More
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>

        <div className="bg-black-800 rounded-2xl p-4 flex flex-col">
          <img src="/team/manish-aggarwal.avif" alt="Manish Aggarwal" className="h-75 w-full object-cover object-top rounded-xl mb-4" />
          <div className="w-full px-4 pt-4">
            <div className="text-white text-2xl mb-1 tracking-wider">Manish Aggarwal</div>
            <div className="text-white/80 text-[16px] mb-4 tracking-wider">Chief Executive Officer</div>
            <div className="text-white/60 line-clamp-4 mb-6">Manish Aggarwal is the Chief Executive Officer of Real Impact Private Limited, where he leads the company's business strategy, operational growth, technology adoption and market expansion. With extensive experience in broadcast media and technology, he brings a strong understanding of how production, innovation and commercial strategy must work together to deliver high-quality content experiences</div>

            <TransitionLink href="#" className="text-pri-400 btn btn-link mb-2">
              Learn More
              <span className="icon">
                <IoArrowForward className="front" />
                <IoArrowForward className="back" />
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>

      <div className="team-slider fixed w-full h-full bg-black-900/85 inset-0 z-1001 items-start backdrop-blur-lg hidden" id="rajiv">
        <div className="bg-black-800/60 w-1/2 h-full ml-auto flex flex-col">
          <div className="header p-4 border-b border-white/20">
            <div className="relative">
              <div className="text-white text-2xl mb-1 tracking-wide">Rajiv Sabharwal</div>
              <div className="text-white/80 text-[16px] tracking-wider">Managing Director</div>

              <div className="text-red-200 text-3xl absolute right-2 top-4 cursor-pointer"><IoCloseOutline /></div>
            </div>
          </div>
          <div className="text p-4 h-full overflow-y-scroll ">
            <p className="mb-4">Rajiv Sabharwal is the Managing Director of Real Impact Private Limited and the visionary force behind the company's evolution into a respected name in broadcast technology, live production and large-scale event execution. With more than 27 years of industry experience, he has played a defining role in shaping the company's capabilities, reputation and international presence.</p>
            <p className="mb-4">Rajiv began his professional journey with Tel Excell Information Systems Limited, where he contributed to a major networking project associated with the Indian Stock Exchange. This early exposure to technology, systems integration and complex infrastructure management laid the foundation for his transition into the rapidly growing world of media, sports and entertainment.</p>
            <p className="mb-4">Under his leadership, Real Impact has grown from a modest venture into an end-to-end production and technology partner serving leading broadcasters, sports organisations and entertainment networks. The company has built long-standing associations with organisations such as the Bangladesh Cricket Board, Sony Television, Star Network and Viacom18, while contributing to major properties across sports, studio programming and entertainment.</p>
            <p>Known for his people-first leadership, Rajiv has created a culture built on trust, loyalty and shared success. Several professionals have worked with him for more than 25 years, reflecting the stability and respect he has nurtured within the organisation. He continues to guide Real Impact's growth with a clear focus on innovation, dependable execution, strong partnerships and long-term value creation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}