"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "../transitions/TransitionLink";
import { nav } from "@/data/menu";
import { gsap } from "gsap/gsap-core";

export default function Header() {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="flex flex-row justify-between">
          <TransitionLink href="/">
            <img src="/logo.svg" alt="" />
          </TransitionLink>

          <nav className="menu">
            <ul className="flex flex-row">
              {nav.map((item) => (
                <li key={item.href} className={item.submenu ? "has-sub" : ""}>
                  <TransitionLink
                    href={item.href}
                    className="menu-link"
                    onClick={() => {
                      setMenuActive(false);
                    }}
                  >
                    <span data-title={item.name}>
                      {item.name}
                    </span>
                  </TransitionLink>
                  {item.submenu && (
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
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
