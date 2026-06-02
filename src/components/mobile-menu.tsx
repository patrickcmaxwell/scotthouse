"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { NAV, CONTACT } from "@/lib/nav";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.18 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const },
  },
};

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="m-menu"
          initial={{ clipPath: "circle(0% at calc(100% - 32px) 36px)" }}
          animate={{
            clipPath: "circle(180% at calc(100% - 32px) 36px)",
            transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] as const },
          }}
          exit={{
            clipPath: "circle(0% at calc(100% - 32px) 36px)",
            transition: { duration: 0.45, ease: [0.6, 0, 0.7, 0.4] as const },
          }}
          className="fixed inset-0 z-[90] bg-ink text-white overflow-hidden flex flex-col"
        >
          {/* atmospheric glow */}
          <div
            aria-hidden
            className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(74,159,196,0.42) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-32 w-[460px] h-[460px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(231,161,74,0.22) 0%, transparent 65%)",
            }}
          />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between px-6 h-[68px]">
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/logo.png"
                alt="Scott Hause Golf — Swing Solutions"
                width={130}
                height={54}
                className="h-9 w-auto logo-light"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/15"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>
          </div>

          {/* VERTICAL NAV — big tap targets */}
          <motion.nav
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10 flex-1 flex flex-col justify-center px-6"
          >
            {NAV.map((l, i) => (
              <motion.div key={l.href} variants={item}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="eyebrow text-sky/80 text-[11px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-white text-[34px] sm:text-[40px] uppercase tracking-tight leading-none group-hover:text-sky transition-colors">
                      {l.label}
                    </span>
                  </span>
                  <span aria-hidden className="text-sky text-2xl group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* BOTTOM — CTA + contact */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="relative z-10 px-6 pb-7"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="btn btn-primary w-full !py-4 !text-[15px]"
            >
              Book a Lesson Now <span aria-hidden>›</span>
            </Link>
            <div className="mt-5 flex flex-col items-center gap-1 text-[12.5px] text-white/65">
              <a href={CONTACT.phoneHref} className="hover:text-sky">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-sky">
                {CONTACT.email}
              </a>
              <p className="text-white/40 mt-1">
                {CONTACT.club} · {CONTACT.city}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
