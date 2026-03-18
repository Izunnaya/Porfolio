"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI", "React Hook Form"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "GraphQL", "REST APIs", "Prisma", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "CI/CD", "Docker", "Git", "GitHub Actions"],
  },
  {
    label: "Tools & Other",
    items: ["WebSockets", "Web3.js", "Auth0", "Google AI", "Figma"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 relative border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Technology</p>
          <h2
            className="font-display text-text leading-none"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            Stack<span className="text-gold">.</span>
          </h2>
          <div className="line-gold mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="border border-border bg-surface/30 rounded-xl p-6 hover:border-gold/20 transition-colors duration-300"
            >
              <p className="font-mono text-xs text-gold tracking-widest uppercase mb-5">
                {cat.label}
              </p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                    <span className="text-sm text-muted hover:text-text transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 border border-border/50 bg-surface/20 rounded-xl p-6 flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-mono text-xs text-muted tracking-widest uppercase">
              Currently expanding into
            </p>
          </div>
          {["Cloud Architecture", "Distributed Systems", "AWS", "Kubernetes"].map((item) => (
            <span
              key={item}
              className="text-xs font-mono text-gold/70 border border-gold/20 px-3 py-1.5 rounded-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
