"use client";

import { motion } from "framer-motion";

const competencies = [
  "Backend Development",
  "REST APIs",
  "Clean Architecture",
  "Database Design",
  "Performance Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-12"
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m a software engineer with a passion for building robust,
              scalable systems. My journey began with game development in Unity,
              where I spent 4+ years crafting real-time applications and learning
              the intricacies of performance optimization.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, I&apos;m focused on backend development with .NET, applying the
              same principles of performance and architecture I learned in
              real-time systems to build reliable APIs and microservices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in clean code, thoughtful architecture, and continuous
              learning. When I&apos;m not coding, you&apos;ll find me exploring
              new technologies and contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Core Competencies
            </h3>
            <ul className="space-y-3">
              {competencies.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
