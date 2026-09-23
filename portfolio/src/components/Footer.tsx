"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="glass mt-1 px-[22px] py-3.5 flex flex-wrap gap-3 items-center justify-between rounded-full text-[13px] text-muted">
      <p>© {new Date().getFullYear()} Lautaro Sabena</p>
      <div className="flex gap-[18px] font-medium">
        <a href="mailto:lautaro@example.com" className="hover:text-foreground transition-colors">
          {t("footer.email")}
        </a>
        <a href="https://github.com/lautaro-sabena" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          {t("footer.github")}
        </a>
        <a href="https://www.linkedin.com/in/lautarosabena/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          {t("footer.linkedin")}
        </a>
      </div>
    </footer>
  );
}
