"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggle = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
      className="px-2 py-1 text-xs font-medium border border-border rounded-md text-foreground hover:border-foreground transition-colors"
    >
      {language === "en" ? "EN" : "ES"}
    </button>
  );
}
