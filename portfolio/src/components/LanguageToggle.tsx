"use client";

import { Globe } from "lucide-react";
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
      className="chip h-[34px] px-[11px] flex items-center gap-1.5 text-xs font-semibold rounded-full text-foreground hover:bg-[var(--glass-strong)] transition-colors cursor-pointer"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{language === "en" ? "EN" : "ES"}</span>
    </button>
  );
}
