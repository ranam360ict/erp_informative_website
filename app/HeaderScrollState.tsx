"use client";

import { useEffect } from "react";

export default function HeaderScrollState() {
  useEffect(() => {
    function updateHeaderState() {
      const isScrolled = window.scrollY > 8;
      const nav = document.querySelector<HTMLElement>(".nav");

      document.documentElement.classList.toggle("pageScrolled", isScrolled);
      document.body.classList.toggle("pageScrolled", isScrolled);
      nav?.classList.toggle("navScrolled", isScrolled);

      if (nav) {
        nav.style.top = isScrolled ? "0" : "14px";
        nav.style.background = isScrolled ? "rgba(255, 255, 255, 0.96)" : "transparent";
        nav.style.backdropFilter = isScrolled ? "blur(16px)" : "none";
        nav.style.boxShadow = isScrolled ? "0 18px 42px rgba(0, 127, 168, 0.14)" : "none";
        nav.style.borderRadius = isScrolled ? "0 0 8px 8px" : "8px";
      }
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return null;
}
