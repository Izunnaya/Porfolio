"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traits = [
  {
    label: "Frontend",
    desc: "Pixel-accurate UIs that perform. React, Next.js, and Tailwind as a daily driver.",
  },
  {
    label: "Backend",
    desc: "REST and GraphQL APIs, Node.js services, PostgreSQL, MongoDB. End-to-end thinking.",
  },
  {
    label: "Infrastructure",
    desc: "CI/CD pipelines, Vercel, cloud deployment. Shipping is part of the job.",
  },
  {
    label: "Blockchain",
    desc: "Web3 integrations, wallet connections, on-chain interactions with Web3.js.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative">
      {/* Subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left: Label + heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">About</p>
            <h2
              className="font-display text-text leading-none mb-8"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              Building things
              <br />
              <span className="text-gold-gradient">that matter.</span>
            </h2>
            <div className="line-gold mb-8" />
            <p className="text-muted text-base leading-relaxed">
              I didn&apos;t start as an engineer. I came from chemistry, taught myself to code
              during COVID, and discovered that solving real problems with software was exactly
              what I wanted to do with my time.
            </p>
            <p className="text-muted text-base leading-relaxed mt-4">
              Three years later I&apos;ve shipped production code at Oceanwave, Metchain, and Trusoft.
              Real users. Real traffic. Real consequences when something breaks.
            </p>
            <p className="text-muted text-base leading-relaxed mt-4">
              Now I&apos;m focused on distributed systems, cloud architecture, and building
              toward opportunities that stretch what I can do.
            </p>
          </motion.div>

          {/* Right: Traits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                className="border border-border rounded-lg p-6 bg-surface/50 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <p className="font-mono text-xs tracking-widest uppercase text-gold">
                    {t.label}
                  </p>
                </div>
                <p className="text-muted text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
