"use client";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "../transitions/TransitionLink";
import { nav } from "@/data/menu";
import { gsap } from "gsap/gsap-core";

export default function Header() {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const menuTL = useRef(null);

  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuTL.current) return;

    if (menuActive) {
      document.body.style.overflow = "hidden";
      menuTL.current.play();
    } else {
      menuTL.current.reverse();
      document.body.style.overflow = "";
    }
  }, [menuActive]);

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    gsap.set(menuRef.current, {
      x: "-100%",
    });

    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      .to(menuRef.current, {
        x: 0,
        duration: 0.55,
        ease: "power3.inOut",
        pointerEvents: "auto"
      })

      .from(".mobile-menu li", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
      }, "+=0.1");

    return () => {
      menuTL.current?.kill();
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="flex flex-row justify-between">
            <TransitionLink href="/">
              <img src="/logo.svg" alt="" />
            </TransitionLink>

            <nav className="menu hidden lg:flex">
              <ul className="flex flex-row">
                {nav.map((item) => (
                  <li key={item.href} className={item.submenu ? "has-sub" : ""}>
                    <TransitionLink
                      href={item.href}
                      className={`menu-link ${pathname === item.href ? "active" : ""}`}
                      // "menu-link" 
                      onClick={() => {
                        setMenuActive(false);
                      }}
                    >
                      <span data-title={item.name}>
                        {item.name}
                      </span>
                    </TransitionLink>
                    {/* {item.submenu && (
                      <ul className="sub-menu">
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <TransitionLink href={sub.href} className="menu-link">
                              <span data-title={sub.name} className="">
                                {sub.name}
                              </span>
                            </TransitionLink>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </li>
                ))}
              </ul>
            </nav>

            <button className={`hamburger ${menuActive ? "is-active" : ""}`} onClick={() => setMenuActive(!menuActive)}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </div>
      </header>
      <div ref={menuRef} className={`mobile-menu-wrapper ${menuActive ? 'is-active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-menu flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <TransitionLink href={item.href} className="menu-link">
                  <span data-title={item.name}>
                    {item.name}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
