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
      className="px-2 py-1 text-xs font-medium border border-border rounded-md text-foreground hover:border-foreground transition-colors flex items-center gap-1.5"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{language === "en" ? "EN" : "ES"}</span>
    </button>
  );
}
