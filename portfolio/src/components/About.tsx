"use client";

import { motion } from "framer-motion";

const competencies = [
  "REST API Design",
  "Clean Architecture",
  "System Design",
  "PostgreSQL & EF Core",
  "Docker & DevOps",
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4">
              About
            </h2>
          </div>

          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 mb-8">
                Building reliable systems is what I do. After 4+ years optimizing 
                real-time engines in Unity, I now focus on crafting backend services 
                that scale — applying the same rigor to API design and distributed 
                architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-muted leading-relaxed mb-12">
                I write clean code, design with simplicity in mind, and believe 
                the best solutions are the ones you can explain in a sentence. 
                Currently exploring event-driven architecture and distributed systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm font-medium tracking-wider uppercase text-foreground/60 mb-5">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {competencies.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm border border-border rounded-full text-muted hover:border-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
