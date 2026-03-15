"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-light text-foreground mb-2">
            Get in touch
          </h2>
          <p className="text-sm text-muted">
            Have a project in mind? Let&apos;s talk.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-muted mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-transparent text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-muted mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-transparent text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 text-sm border border-border rounded-md bg-transparent text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-foreground text-background font-medium text-sm rounded-md border-2 border-foreground hover:bg-transparent hover:text-foreground transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
