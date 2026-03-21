"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Resourcify",
    subtitle: "Developer Resource Platform",
    description:
      "Advanced filtering logic and AI-powered navigation to improve resource discoverability. Integrates Google Generative AI to help developers find what they need faster.",
    problem:
      "Developers waste time searching scattered resources across the web.",
    solution:
      "Centralized platform with AI-guided discovery and intelligent filtering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Google Generative AI"],
    demo: "https://resourcify.vercel.app",
    github: "https://github.com/Izunnaya/resourcify",
    highlight: true,
  },
  {
    number: "02",
    title: "Jobify",
    subtitle: "Job Board Platform",
    description:
      "Full-stack job board with post, search, and apply workflows. Server-side rendering, image upload, and form handling built on a modern stack.",
    problem:
      "Job boards feel static. Users need dynamic, real-time posting and discovery.",
    solution:
      "SSR-first architecture with Prisma ORM and PostgreSQL for reliable data.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
    demo: "https://jobify-app.vercel.app",
    github: "https://github.com/Izunnaya/jobify",
    highlight: false,
  },
  {
    number: "03",
    title: "Foody",
    subtitle: "Food Ordering Application",
    description:
      "Scalable food ordering app built to simulate real startup workflows. Auth0 authentication, REST API, cloud hosting, and a clean React frontend.",
    problem:
      "Building a scalable food platform requires solid API design and auth from day one.",
    solution:
      "Separated frontend and backend repos, Auth0 for auth, MongoDB for flexible data.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Auth0",
      "ShadCN UI",
    ],
    demo: null,
    github: "https://github.com/Izunnaya/food-ordering-app",
    highlight: false,
  },
  {
    number: "04",
    title: "StrayShot",
    subtitle: "AAA Shooter Game WebApp",
    description:
      "Real-time player data and event integration for a competitive shooter game platform. WebSocket-powered live updates and REST API consumption.",
    problem:
      "Game dashboards need live data. Polling is too slow and too costly.",
    solution:
      "WebSocket architecture for real-time player events and leaderboard updates.",
    tech: ["React", "TypeScript", "WebSockets", "REST APIs"],
    demo: "https://strayshot.vercel.app",
    github: null,
    highlight: false,
  },
  {
    number: "05",
    title: "MetChain",
    subtitle: "Blockchain Platform",
    description:
      "Migrated an entire codebase to Next.js with full blockchain integrations. Wallet connections, on-chain interactions, and improved user onboarding.",
    problem: "Legacy codebase couldn't support modern blockchain UX patterns.",
    solution:
      "Full Next.js migration, Web3.js wallet integration, and redesigned onboarding flow.",
    tech: ["React", "TypeScript", "Next.js", "Web3.js"],
    demo: "https://metchain.io",
    github: null,
    highlight: false,
  },
  {
    number: "06",
    title: "FitnessPlus",
    subtitle: "Fitness & Wellness Platform",
    description:
      "Membership management, workout scheduling, and e-commerce for fitness products. Full-stack with Node.js backend and MongoDB.",
    problem:
      "Fitness platforms need multiple user flows: scheduling, shopping, and membership.",
    solution:
      "Unified full-stack application with Express API and React frontend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://fitnessplus.vercel.app",
    github: null,
    highlight: false,
  },
];

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Selected Work</p>
          <div className="flex items-end justify-between gap-8">
            <h2
              className="font-display text-text leading-none"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              Projects<span className="text-gold">.</span>
            </h2>
            <p className="text-muted text-sm max-w-xs text-right hidden md:block">
              Some production-level projects across multiple domains and tech
              stacks.
            </p>
          </div>
          <div className="line-gold mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`project-card group border rounded-xl p-6 md:p-8 ${
                project.highlight
                  ? "border-gold/20 bg-gradient-to-br from-surface to-surface/50"
                  : "border-border bg-surface/30"
              }`}
            >
              <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 md:gap-10 items-start">
                {/* Number */}
                <div className="hidden md:block">
                  <span className="font-mono text-xs text-gold/40 tracking-widest">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="font-display text-text text-2xl md:text-3xl group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    {project.highlight && (
                      <span className="shrink-0 text-xs font-mono tracking-widest uppercase text-gold border border-gold/30 px-2.5 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-bg/60 border border-border/60 rounded-lg p-3">
                      <p className="font-mono text-xs text-muted/60 tracking-widest uppercase mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-muted">{project.problem}</p>
                    </div>
                    <div className="bg-bg/60 border border-border/60 rounded-lg p-3">
                      <p className="font-mono text-xs text-gold/60 tracking-widest uppercase mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-muted">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-muted/70 border border-border/60 px-2.5 py-1 rounded-sm bg-bg/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex md:flex-col items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text border border-border px-4 py-2.5 rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-300 whitespace-nowrap"
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted border border-border/50 px-4 py-2.5 rounded-sm hover:border-gold/30 hover:text-text transition-all duration-300 whitespace-nowrap"
                    >
                      <GitHubIcon />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
