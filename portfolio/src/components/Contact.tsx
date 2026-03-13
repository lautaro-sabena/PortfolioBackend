"use client";

import { motion } from "framer-motion";

const contactLinks = [
  { href: "mailto:lautaro@example.com", label: "Email" },
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-muted mb-10 leading-relaxed">
            I&apos;m currently available for freelance work and full-time opportunities.
            If you have a project that needs some love, let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border border-border rounded-full text-sm text-muted hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                {link.label}
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
