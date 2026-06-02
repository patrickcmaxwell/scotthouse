"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Aurora, Grain } from "./aurora";

type Stat = { value: string; label: string };

export function InteriorHero({
  eyebrow,
  title,
  highlight,
  tagline,
  img,
  imgAlt,
  watermark,
  stats,
  ctas,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  tagline: string;
  img: string;
  imgAlt: string;
  watermark?: string;
  stats?: Stat[];
  ctas?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const mouseX = useTransform(smx, (v) => `${v * 14}px`);
  const glowX = useTransform(smx, (v) => `${v * -22}px`);
  const glowY = useTransform(smy, (v) => `${v * -22}px`);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-white flex items-center"
    >
      {/* FULL-BLEED background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY, x: mouseX }}>
        <div className="absolute -inset-10">
          <Image
            src={img}
            alt={imgAlt}
            fill
            priority
            sizes="120vw"
            className="object-cover opacity-90"
          />
        </div>
      </motion.div>

      {/* Aurora */}
      <Aurora tone="mixed" intensity={0.5} className="z-[1]" />

      {/* Veil */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,13,0.7) 0%, rgba(11,11,13,0.2) 38%, rgba(11,11,13,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,11,13,0.85) 0%, rgba(11,11,13,0.35) 45%, rgba(11,11,13,0.1) 100%)",
        }}
      />

      {/* mouse glow */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="absolute -right-32 -bottom-32 z-[2] h-[680px] w-[680px] rounded-full blur-3xl pointer-events-none"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,159,196,0.45) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <Grain opacity={0.07} />

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 pt-32 md:pt-36"
      >
        <div className="max-w-3xl relative">
          {watermark && (
            <motion.span
              aria-hidden
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.06, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-display text-white absolute -top-12 -left-2 leading-none select-none pointer-events-none whitespace-nowrap"
              style={{ fontSize: "clamp(160px, 18vw, 280px)" }}
            >
              {watermark}
            </motion.span>
          )}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative inline-flex items-center gap-3"
          >
            <span className="block h-px w-10 bg-sky" />
            <span className="eyebrow text-sky">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="display-xl mt-5 relative leading-[0.95] text-[clamp(2.4rem,5vw,4.2rem)] max-w-[18ch]"
          >
            {title}{" "}
            {highlight && <span className="text-sky">{highlight}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative mt-7 max-w-2xl text-white/85 text-[16px] md:text-[18px] leading-relaxed"
          >
            {tagline}
          </motion.p>

          {ctas && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative mt-9 flex flex-wrap gap-3"
            >
              {ctas}
            </motion.div>
          )}

          {stats && stats.length > 0 && (
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="relative mt-12 grid grid-cols-3 max-w-md border-t border-white/15 pt-6"
            >
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-sky text-[32px] md:text-[38px] leading-none">
                    {s.value}
                  </dt>
                  <dd className="eyebrow text-white/55 mt-1.5">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-10 z-10 flex items-center gap-3 text-white/55"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.span
          className="w-12 h-px bg-white/50 origin-left"
          animate={{ scaleX: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
}
