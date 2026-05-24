import gsap from "../gsap";
import SplitType from "split-type";

export const revealChars = (target) => {

  const split = new SplitType(target, {
    types: "chars",
  });

  gsap.from(split.chars, {
    yPercent: 120,
    opacity: 0,
    stagger: 0.03,
    duration: 1,
    ease: "power4.out",
  });

  return split;
};