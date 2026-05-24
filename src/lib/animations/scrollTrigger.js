import gsap from "../gsap";

export const revealUp = (target) => {
  gsap.from(target, {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",

    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
};


export const revealImage = (target) => {
  gsap.from(target, {
    scale: 1.2,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",

    scrollTrigger: {
      trigger: target,
      start: "top 90%",
      scrub: 1,
    },
  });
};


export const parallaxImage = (
  target,
  y = 120
) => {
  gsap.to(target, {
    y,

    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const horizontalScroll = (
  wrapper,
  inner
) => {

  const section = document.querySelector(wrapper);
  const content = document.querySelector(inner);

  const sections = gsap.utils.toArray(".panel");

  const tween = gsap.to(content, {
    x: () => -(content.scrollWidth - window.innerWidth),

    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${content.scrollWidth}`,
      scrub: true,
      pin: true,
    },
  });

  // Example inner parallax
  gsap.to(".panel img", {
    xPercent: -20,

    scrollTrigger: {
      trigger: ".panel img",
      containerAnimation: tween,
      start: "left center",
      end: "right center",
      scrub: true,
    },
  });

};