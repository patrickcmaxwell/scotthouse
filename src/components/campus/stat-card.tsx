"use client";

import { motion } from "framer-motion";
import { StatCounter } from "./stat-counter";

export function StatCard({
  value,
  prefix,
  suffix,
  unit,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="card-dark p-7 md:p-8 h-full flex flex-col justify-between min-h-[200px]"
    >
      <p className="eyebrow text-sky">By The Numbers</p>
      <div className="flex items-baseline gap-2 mt-4">
        <span className="font-display text-white text-[clamp(3rem,5.4vw,4.6rem)] leading-none">
          <StatCounter to={value} prefix={prefix} suffix={suffix} />
        </span>
        {unit && (
          <span className="font-display text-sky text-[clamp(1.2rem,2vw,1.6rem)] leading-none">
            {unit}
          </span>
        )}
      </div>
      <p className="mt-4 text-[13.5px] leading-snug text-white/70">{label}</p>
    </motion.div>
  );
}
