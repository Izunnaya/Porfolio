"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import socialLinks from "@/utils/HeroSocialLinks";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Radial glow — left */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      {/* Radial glow — right */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(92,107,192,0.08) 0%, transparent 70%)",
          transform: "translate(20%, -50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
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
              I build production-grade web applications with TypeScript, React,
              and Node.js. Three years shipping features users actually use,
              across fintech, blockchain, and SaaS.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
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
                izunnaya11@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-2xl border border-dashed border-gold/10"
              />

              {/* Glow behind portrait */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,168,67,0.12) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.15)",
                }}
              />

              {/* Portrait */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 rounded-2xl overflow-hidden"
                style={{
                  width: "clamp(260px, 35vw, 400px)",
                  aspectRatio: "3/4",
                  boxShadow:
                    "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,168,67,0.15)",
                }}
              >
                <Image
                  src="/portrait.jpg"
                  alt="Michael Ugorji"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 400px"
                />

                {/* Subtle vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(8,8,15,0.3) 100%)",
                  }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl px-4 py-3 z-20"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-0.5">
                  Experience
                </p>
                <p className="text-text font-display text-lg font-medium">
                  3+ Years
                </p>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-surface border border-border rounded-xl px-4 py-3 z-20"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-0.5">
                  Focused On
                </p>
                <p className="text-gold font-mono text-sm font-medium">
                  TypeScript
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
