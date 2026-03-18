"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    value: "izunnaya11@gmail.com",
    href: "mailto:izunnaya11@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Izunnaya",
    href: "https://github.com/Izunnaya",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/michael-ugorji",
    href: "https://linkedin.com/in/michael-ugorji",
  },
  {
    label: "Blog",
    value: "hashnode.com/@Izunnaya",
    href: "https://hashnode.com/@Izunnaya",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 relative border-t border-border/40">
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-6">Get In Touch</p>
            <h2
              className="font-display text-text leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Let&apos;s build
              <br />
              <span className="text-gold-gradient">something real.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-12 text-base">
              Open to remote opportunities, contract work, and interesting conversations.
              If you&apos;re building something that matters, I want to hear about it.
            </p>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href="mailto:izunnaya11@gmail.com"
              className="inline-flex items-center gap-3 bg-gold text-bg text-sm font-mono tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-gold/90 transition-all duration-300 group"
            >
              Send a Message
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
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group border border-border rounded-lg p-4 hover:border-gold/30 transition-all duration-300 text-left"
              >
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1.5">
                  {link.label}
                </p>
                <p className="text-xs text-text/70 group-hover:text-gold transition-colors truncate">
                  {link.value}
                </p>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-muted tracking-widest">
            © 2025 Michael Ugorji
          </p>
          <p className="font-mono text-xs text-muted/50">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
