"use client";

import { motion } from "framer-motion";

const baseProps = {
  width: 56,
  height: 56,
  viewBox: "0 0 56 56",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const draw = (i = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.0, delay: 0.1 + i * 0.05, ease: "easeOut" as const },
  },
});

// === Individual icons ===
export function IconSwing() {
  return (
    <svg {...baseProps}>
      {/* arc */}
      <motion.path
        d="M8 42 Q28 8 48 42"
        stroke="rgb(74,159,196)"
        strokeWidth={2.2}
        variants={draw(0)}
      />
      {/* club shaft */}
      <motion.line
        x1="28" y1="14" x2="40" y2="40"
        stroke="white"
        strokeWidth={2}
        variants={draw(1)}
      />
      {/* clubhead */}
      <motion.path
        d="M38 38 L44 42 L40 44 Z"
        fill="white"
        stroke="white"
        strokeWidth={1}
        variants={draw(2)}
      />
      {/* ball */}
      <motion.circle cx="10" cy="44" r="2.5" fill="white" variants={draw(3)} />
    </svg>
  );
}

export function IconBucket() {
  return (
    <svg {...baseProps}>
      {/* bucket */}
      <motion.path
        d="M14 22 L18 46 H38 L42 22 Z"
        stroke="rgb(74,159,196)"
        strokeWidth={2.2}
        variants={draw(0)}
      />
      <motion.line
        x1="14" y1="22" x2="42" y2="22"
        stroke="rgb(74,159,196)"
        strokeWidth={2.2}
        variants={draw(1)}
      />
      {/* balls stacked */}
      <motion.circle cx="24" cy="18" r="3" stroke="white" strokeWidth={1.8} variants={draw(2)} />
      <motion.circle cx="32" cy="18" r="3" stroke="white" strokeWidth={1.8} variants={draw(3)} />
      <motion.circle cx="28" cy="11" r="3" stroke="white" strokeWidth={1.8} variants={draw(4)} />
    </svg>
  );
}

export function IconFlag() {
  return (
    <svg {...baseProps}>
      <motion.line
        x1="18" y1="50" x2="18" y2="10"
        stroke="white"
        strokeWidth={2.2}
        variants={draw(0)}
      />
      <motion.path
        d="M18 12 L42 18 L18 26 Z"
        fill="rgb(74,159,196)"
        stroke="rgb(74,159,196)"
        strokeWidth={2}
        variants={draw(1)}
      />
      <motion.ellipse
        cx="18" cy="50" rx="10" ry="2.5"
        stroke="white"
        strokeWidth={1.6}
        variants={draw(2)}
      />
    </svg>
  );
}

export function IconScorecard() {
  return (
    <svg {...baseProps}>
      <motion.rect
        x="10" y="10" width="36" height="36" rx="4"
        stroke="rgb(74,159,196)"
        strokeWidth={2.2}
        variants={draw(0)}
      />
      <motion.line x1="10" y1="20" x2="46" y2="20" stroke="rgb(74,159,196)" strokeWidth={1.8} variants={draw(1)} />
      <motion.line x1="16" y1="28" x2="32" y2="28" stroke="white" strokeWidth={1.6} variants={draw(2)} />
      <motion.line x1="16" y1="34" x2="36" y2="34" stroke="white" strokeWidth={1.6} variants={draw(3)} />
      <motion.line x1="16" y1="40" x2="28" y2="40" stroke="white" strokeWidth={1.6} variants={draw(4)} />
      <motion.path d="M36 38 L40 42 L46 32" stroke="white" strokeWidth={2} variants={draw(5)} />
    </svg>
  );
}

export function IconCourse() {
  return (
    <svg {...baseProps}>
      {/* fairway curve */}
      <motion.path
        d="M8 46 Q22 22 36 26 Q44 28 46 14"
        stroke="rgb(74,159,196)"
        strokeWidth={2.4}
        variants={draw(0)}
      />
      {/* tee */}
      <motion.circle cx="8" cy="46" r="3" fill="white" variants={draw(1)} />
      {/* green */}
      <motion.ellipse cx="46" cy="14" rx="6" ry="4" stroke="white" strokeWidth={1.6} variants={draw(2)} />
      {/* pin */}
      <motion.line x1="46" y1="14" x2="46" y2="6" stroke="white" strokeWidth={1.6} variants={draw(3)} />
      <motion.path d="M46 7 L52 9 L46 11 Z" fill="rgb(74,159,196)" variants={draw(4)} />
    </svg>
  );
}

export function IconMind() {
  return (
    <svg {...baseProps}>
      {/* concentric focus rings */}
      <motion.circle cx="28" cy="28" r="18" stroke="rgb(74,159,196)" strokeWidth={2.2} variants={draw(0)} />
      <motion.circle cx="28" cy="28" r="11" stroke="white" strokeWidth={1.8} variants={draw(1)} />
      <motion.circle cx="28" cy="28" r="4" fill="rgb(74,159,196)" variants={draw(2)} />
      <motion.line x1="28" y1="4" x2="28" y2="10" stroke="white" strokeWidth={1.6} variants={draw(3)} />
      <motion.line x1="28" y1="46" x2="28" y2="52" stroke="white" strokeWidth={1.6} variants={draw(4)} />
      <motion.line x1="4" y1="28" x2="10" y2="28" stroke="white" strokeWidth={1.6} variants={draw(5)} />
      <motion.line x1="46" y1="28" x2="52" y2="28" stroke="white" strokeWidth={1.6} variants={draw(6)} />
    </svg>
  );
}

export function IconTrophy() {
  return (
    <svg {...baseProps}>
      <motion.path
        d="M18 10 H38 V22 A10 10 0 0 1 18 22 Z"
        stroke="rgb(74,159,196)"
        strokeWidth={2.2}
        fill="rgba(74,159,196,0.15)"
        variants={draw(0)}
      />
      <motion.path d="M18 14 H10 A2 2 0 0 0 10 22 Q10 26 18 26" stroke="white" strokeWidth={1.8} variants={draw(1)} />
      <motion.path d="M38 14 H46 A2 2 0 0 1 46 22 Q46 26 38 26" stroke="white" strokeWidth={1.8} variants={draw(2)} />
      <motion.line x1="28" y1="34" x2="28" y2="42" stroke="white" strokeWidth={2} variants={draw(3)} />
      <motion.line x1="20" y1="46" x2="36" y2="46" stroke="white" strokeWidth={2} variants={draw(4)} />
      <motion.line x1="22" y1="42" x2="34" y2="42" stroke="white" strokeWidth={1.8} variants={draw(5)} />
    </svg>
  );
}

export function IconArc() {
  return (
    <svg {...baseProps}>
      {/* x-axis */}
      <motion.line x1="8" y1="44" x2="48" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} variants={draw(0)} />
      {/* growth curve */}
      <motion.path
        d="M8 40 Q18 38 24 30 T46 8"
        stroke="rgb(74,159,196)"
        strokeWidth={2.4}
        variants={draw(1)}
      />
      {/* milestone dots */}
      <motion.circle cx="14" cy="38" r="2.5" fill="white" variants={draw(2)} />
      <motion.circle cx="24" cy="30" r="2.5" fill="white" variants={draw(3)} />
      <motion.circle cx="36" cy="18" r="2.5" fill="white" variants={draw(4)} />
      <motion.circle cx="46" cy="8" r="3.5" fill="rgb(74,159,196)" variants={draw(5)} />
    </svg>
  );
}

// === Wrapper that triggers stroke-draw on viewport enter + hover rotate ===
export function PillarIcon({
  kind,
}: {
  kind: keyof typeof ICONS;
}) {
  const C = ICONS[kind];
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ rotate: 4, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="relative inline-flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 overflow-hidden"
    >
      {/* sky-blue glow */}
      <span
        aria-hidden
        className="absolute -inset-2 rounded-2xl opacity-60 blur-xl"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(74,159,196,0.35), transparent 70%)",
        }}
      />
      <span className="relative">
        <C />
      </span>
    </motion.div>
  );
}

export const ICONS = {
  swing: IconSwing,
  bucket: IconBucket,
  flag: IconFlag,
  scorecard: IconScorecard,
  course: IconCourse,
  mind: IconMind,
  trophy: IconTrophy,
  arc: IconArc,
} as const;

export type PillarKind = keyof typeof ICONS;
