"use client";

import { useEffect, useState } from "react";

type Language = "en" | "bn";

const STORAGE_KEY = "site-language";

function readLanguage(): Language {
  if (typeof window !== "undefined") {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === "bn") {
      return "bn";
    }

    if (savedLanguage === "en") {
      return "en";
    }
  }

  if (typeof document !== "undefined") {
    if (
      document.documentElement.dataset.lang === "bn" ||
      document.documentElement.lang === "bn"
    ) {
      return "bn";
    }
  }

  return "en";
}

function applyLanguage(language: Language) {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language;
  window.localStorage.setItem(STORAGE_KEY, language);
}

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const nextLanguage = readLanguage();
    applyLanguage(nextLanguage);
    setLanguage(nextLanguage);
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  }

  return (
    <div
      className="languageToggle"
      aria-label="Choose website language"
      suppressHydrationWarning
    >
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        aria-pressed={language === "en"}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        type="button"
        className={language === "bn" ? "active" : ""}
        aria-pressed={language === "bn"}
        onClick={() => changeLanguage("bn")}
      >
        {"\u09AC\u09BE\u0982\u09B2\u09BE"}
      </button>
    </div>
  );
}
