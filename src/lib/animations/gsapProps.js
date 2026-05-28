
export const scaleUp = {
  scaleY: 0,
  transformOrigin: "bottom center",
  opacity: 0,
  duration: 1.2,
  stagger: 0.04,
  ease: "back.inOut(1.4)",
};

export const introScaleUp = {
  scaleY: 0,
  y: 50,
  transformOrigin: "bottom center",
  opacity: 0,
  duration: 1.2,
  stagger: 0.04,
  ease: "back.inOut(1.4)",
};

export const fadeInUp = {
  y: 32,
  opacity: 0,
  stagger: 0.1,
  ease: "power2.out",
};

export const fadeUp = {
  y: 32,
  opacity: 0,
  ease: "expo.out"
}

export const counterUp = {
  y: 100,
  rotateY: -90,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  transformOrigin: "bottom center",
  perspective: 1000,
}

export const revealLeftFrom = {
  x: 100,
  clipPath: "inset(0 100% 0 0)",
};

export const revealLeftTo = {
  x: 0,
  clipPath: "inset(0 0% 0 0)",
  ease: "expo.out"
};

export const revealTopFrom = {
  y: -100,
  clipPath: "inset(100% 0 0 0)",
};

export const revealTopTo = {
  y: 0,
  clipPath: "inset(0% 0 0 0)",
  ease: "expo.out"
};

export const revealBottomFrom = {
  y: 100,
  clipPath: "inset(0 0 100% 0)",
};

export const revealBottomTo = {
  y: 0,
  clipPath: "inset(0 0 0% 0)",
  ease: "expo.out"
};
