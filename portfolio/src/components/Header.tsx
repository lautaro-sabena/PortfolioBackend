"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#projects", labelKey: "nav.work" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2" 
          : "bg-transparent py-3"
      }`}
    >
      <nav className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Lautaro Sabena
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="px-2 py-1 text-xs border border-border rounded-md text-foreground hover:border-foreground transition-colors"
          >
            CV
          </a>
          <a
            href="https://github.com/lautaro-sabena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lautarosabena/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
