"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Oceanwave",
    role: "Frontend Engineer",
    period: "2022 — Present",
    type: "Full-time",
    description:
      "Building and maintaining production React applications. Delivered measurable page load improvements and shipped features with significant user engagement impact across multiple product lines.",
    highlights: [
      "Measurable improvements to page load performance",
      "Shipped features with direct user engagement impact",
      "React, TypeScript, Next.js, WebSockets",
    ],
    current: true,
  },
  {
    company: "Metchain",
    role: "Frontend Engineer",
    period: "2022",
    type: "Contract",
    description:
      "Migrated entire legacy codebase to Next.js. Implemented blockchain integrations including wallet connections, on-chain interactions, and redesigned user onboarding.",
    highlights: [
      "Full Next.js codebase migration",
      "Web3.js wallet integration",
      "Improved onboarding conversion",
    ],
    current: false,
  },
  {
    company: "Trusoft",
    role: "Software Engineer",
    period: "2021 — 2022",
    type: "Full-time",
    description:
      "Full-stack development across multiple client projects. Worked across the stack from database to UI, building and deploying production applications.",
    highlights: [
      "Full-stack product delivery",
      "React, Node.js, Express, MongoDB",
      "Production deployments with CI/CD",
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 relative border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Career</p>
          <h2
            className="font-display text-text leading-none"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            Experience<span className="text-gold">.</span>
          </h2>
          <div className="line-gold mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[11px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[14px] w-[23px] h-[23px] hidden md:flex items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      exp.current
                        ? "bg-gold border-gold"
                        : "bg-bg border-border group-hover:border-gold/40 transition-colors"
                    }`}
                  />
                </div>

                <div className="border border-border bg-surface/30 rounded-xl p-6 hover:border-gold/20 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-display text-text text-xl">{exp.company}</h3>
                        {exp.current && (
                          <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-gold tracking-widest">{exp.period}</p>
                      <p className="font-mono text-xs text-muted mt-0.5">{exp.type}</p>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs font-mono text-muted/70 border border-border/60 px-2.5 py-1 rounded-sm bg-bg/40"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
