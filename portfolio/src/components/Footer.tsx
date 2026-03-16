"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6 border-t border-border">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between text-xs text-muted">
        <p>© {new Date().getFullYear()} Lautaro Sabena</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:lautaro@example.com"
            className="hover:text-foreground transition-colors"
          >
            {t("footer.email")}
          </a>
          <a
            href="https://github.com/lautaro-sabena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {t("footer.github")}
          </a>
          <a
            href="https://www.linkedin.com/in/lautarosabena/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {t("footer.linkedin")}
          </a>
        </div>
      </div>
    </footer>
  );
}
