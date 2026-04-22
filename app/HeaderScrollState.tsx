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
        nav.style.background = isScrolled ? "#ffffff" : "transparent";
        nav.style.backdropFilter = isScrolled ? "blur(16px)" : "none";
        nav.style.boxShadow = isScrolled ? "0 16px 36px rgba(8, 45, 59, 0.12)" : "none";
        nav.style.border = isScrolled ? "1px solid rgba(0, 180, 233, 0.12)" : "0";
        nav.style.borderRadius = isScrolled ? "0 0 10px 10px" : "8px";
      }
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return null;
}
