"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPortrait() {
  return (
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

        {/* Portrait image */}
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(8,8,15,0.3) 100%)",
            }}
          />
        </motion.div>

        {/* Experience badge */}
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
          <p className="text-text font-display text-lg font-medium">3+ Years</p>
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
          <p className="text-gold font-mono text-sm font-medium">TypeScript</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
