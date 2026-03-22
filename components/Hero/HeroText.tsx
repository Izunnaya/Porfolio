"use client";
import { motion, type Variants } from "framer-motion";
import socialLinks from "@/utils/HeroSocialLinks";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroText() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Status badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <span className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted border border-border px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.div variants={itemVariants}>
        <p className="section-label mb-3">Full Stack Engineer</p>
        <h1
          className="font-display leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          <span className="text-text">Michael</span>
          <br />
          <span className="text-gold-gradient">Ugorji</span>
          <span className="text-gold">.</span>
        </h1>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={itemVariants}
        className="text-muted text-base leading-relaxed max-w-md"
        style={{ fontFamily: "var(--font-body)" }}
      >
        I build production-grade web applications with TypeScript, React, and
        Node.js. Three years shipping features users actually use, across
        fintech, blockchain, and SaaS.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="group flex items-center gap-2 bg-gold text-bg text-sm font-mono tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-gold/90 transition-all duration-300"
        >
          View Projects
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 border border-border text-text text-sm font-mono tracking-widest uppercase px-6 py-3 rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social links */}

      <motion.div
        variants={itemVariants}
        className="flex items-center gap-6 pt-2"
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted hover:text-gold transition-colors duration-300"
          >
            {s.icon}
          </a>
        ))}
        <span className="w-16 h-px bg-border" />
        <a
          href="mailto:izunnaya11@gmail.com"
          className="text-xs font-mono text-muted hover:text-gold transition-colors tracking-widest"
        >
          ugorjimicheal.um@gmail.com
        </a>
      </motion.div>
    </motion.div>
  );
}
