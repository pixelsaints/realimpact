import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scaleUp, fadeInUp } from "./gsapProps";

gsap.registerPlugin(ScrollTrigger);

export const animateSection = (sectionRef) => {
  const section = sectionRef?.current || sectionRef;

  if (!section) return [];

  const subtitleEl = section.querySelector(".subtitle");

  const titleEl = section.querySelector("h2.title");

  const descEl = section.querySelector("p.description");

  const subtitle = subtitleEl
    ? new SplitType(subtitleEl, { types: "chars" })
    : null;

  const title = titleEl
    ? new SplitType(titleEl, { types: "chars, words, lines" })
    : null;

  const desc = descEl
    ? new SplitType(descEl, { types: "lines" })
    : null;

  const cards = gsap.utils.toArray(
    section.querySelectorAll(".card")
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  if (subtitle) {
    tl.from(subtitle.chars, {
      ...scaleUp,
      stagger: 0.04,
    });
  }

  if (title) {
    tl.from(
      title.words,
      {
        ...scaleUp,
        stagger: 0.04,
      },
      "-=1.4"
    );
  }

  if (desc) {
    tl.from(
      desc.lines,
      {
        ...fadeInUp,
      },
      "-=1.2"
    );
  }

  if (cards.length) {
    tl.from(cards, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
    }, "-=1");
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return [
    {
      revert: () => {
        tl.scrollTrigger?.kill();
        tl.revert();
        [subtitle, title, desc].forEach((instance) => instance?.revert());
      },
    },
  ];
};
