"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "clean architecture",
  "maintainable systems",
  "scalable APIs",
  "practical engineering",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl">
            Fullstack Software Engineer with experience designing modular backend systems 
            and modern web applications. My background includes building real-time 
            applications and transitioning into scalable backend services and frontend platforms.
          </p>

          <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl">
            I work across the full stack using C#, .NET, Node.js, React, and modern API architectures.
          </p>

          <div>
            <p className="text-sm text-muted mb-3">I focus on:</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs border border-border rounded-full text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
