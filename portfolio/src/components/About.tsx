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
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wider uppercase text-foreground/60 border border-border rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Available for work
            </span>
          </div>

          <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl">
            Fullstack Software Engineer with strong experience in C# and modern web technologies. 
            I design and build scalable backend services, modern web applications, and API-driven systems 
            using .NET, React, and cloud-ready architectures.
          </p>

          <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl">
            My background includes building real-time applications and transitioning into scalable 
            backend services and frontend platforms. I work across the full stack using C#, .NET, 
            Node.js, React, and modern API architectures.
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
