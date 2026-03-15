"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wider uppercase text-foreground/60 border border-border rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-4"
        >
          Lautaro Sabena
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-muted font-light mb-6"
        >
          Fullstack Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-muted/80 mb-8 max-w-lg mx-auto"
        >
          Fullstack developer with strong experience in C# and modern web technologies. 
          I design and build scalable backend services, modern web applications, and 
          API-driven systems using .NET, React, and cloud-ready architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="px-5 py-2.5 bg-foreground text-background font-medium text-sm rounded-md border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/lautaro-sabena"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border-2 border-border text-foreground font-medium text-sm rounded-md hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lautarosabena/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border-2 border-border text-foreground font-medium text-sm rounded-md hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
