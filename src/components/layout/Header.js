"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { useDrawer } from "@/context/DrawerContext";
import TransitionLink from "@/components/transitions/TransitionLink";
import { nav } from "@/data/menu";

export default function Header() {

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <TransitionLink href="/" className="text-xl font-bold">
            RealImpact
          </TransitionLink>
        </div>
      </header>
    </>
  );
}