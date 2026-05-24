import gsap from "../gsap";

export const fadeUp = (
  target,
  delay = 0
) => {

  return gsap.from(target, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay,
    ease: "power3.out",
  });

};