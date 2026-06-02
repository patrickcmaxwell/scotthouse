"use client";

import { motion } from "framer-motion";
import { ICONS, type IconKey } from "./benefit-icons";

export function BenefitCard({
  no,
  title,
  body,
  icon,
}: {
  no: string;
  title: string;
  body: string;
  icon: IconKey;
}) {
  const Icon = ICONS[icon];
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="card relative p-7 h-full flex flex-col overflow-hidden group"
    >
      {/* sky glow that lights up on hover */}
      <div
        aria-hidden
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(74,159,196,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="eyebrow text-ink-soft">{no}</span>
        <span className="text-ink/40 group-hover:text-sky group-hover:rotate-[14deg] transition-all duration-300">
          <Icon />
        </span>
      </div>
      <h3 className="relative mt-7 text-[19px] md:text-[20px] font-semibold tracking-tight text-ink leading-snug">
        {title}
      </h3>
      <p className="relative mt-2 text-[13.5px] leading-relaxed text-ink/70 flex-1">
        {body}
      </p>
      <div className="relative mt-5 h-px bg-rule" />
      <div className="relative mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        <span>Included</span>
        <motion.span
          aria-hidden
          className="text-sky-2 text-base font-semibold"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          ✓
        </motion.span>
      </div>
    </motion.div>
  );
}
