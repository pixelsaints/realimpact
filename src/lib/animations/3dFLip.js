import gsap from "../gsap";

export const heroFlip = () => {

  const tl = gsap.timeline();

  gsap.set(".text-flip .front", {
    rotationX: 90,
    yPercent: -100,
    transformPerspective: 1200,
    transformOrigin: "bottom center",
  });

  gsap.set(".text-flip .back", {
    rotationX: 0,
    yPercent: 0,
    transformPerspective: 1200,
    transformOrigin: "bottom center",
  });

  tl.to(".text-flip .front", {
    rotationX: 0,
    yPercent: 0,
    duration: 1.4,
    ease: "expo.inOut",
  }, 0)

    .to(".text-flip .back", {
      rotationX: 90,
      yPercent: 100,
      duration: 1.4,
      ease: "expo.inOut",
    }, 0);

  return tl;
};