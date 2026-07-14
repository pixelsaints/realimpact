"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function TransitionLink({
  href,
  children,
  onClick,
  target,
  ...props
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    // Let the browser handle external links, new tabs, downloads, etc.
    if (
      target === "_blank" ||
      props.download ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    // Skip transition if already on the same page
    if (href === pathname) {
      e.preventDefault();
      return;
    }

    // Prevent multiple clicks during animation
    if (gsap.isTweening(".main-wrapper")) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    // Execute custom click handler if provided
    onClick?.(e);

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    tl.to(".main-wrapper", {
      opacity: 0,
      y: 20,
      duration: 0.35,
      ease: "power2.out",
    });

    // Alternative page mask transition
    // tl.to(".page-mask", {
    //   scaleY: 1,
    //   transformOrigin: "bottom",
    //   duration: 0.8,
    //   ease: "power4.inOut",
    // });
  };

  return (
    <Link
      href={href}
      target={target}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}