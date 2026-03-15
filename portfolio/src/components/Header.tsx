"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Lautaro Sabena
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="px-3 py-1.5 text-xs border border-border rounded-md text-foreground hover:border-foreground transition-colors"
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
        </div>
      </nav>
    </header>
  );
}
