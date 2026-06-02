"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Aurora, Grain } from "./aurora";

export function HomeHero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Mouse-tracking parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const mouseX = useTransform(smx, (v) => `${v * 16}px`);
  const mouseY = useTransform(smy, (v) => `${v * 16}px`);
  const glowX = useTransform(smy, (v) => `${v * -30}px`);
  const glowY = useTransform(smx, (v) => `${v * -30}px`);

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
      {/* Background photo + parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, x: mouseX }}
      >
        <div className="absolute -inset-10">
          <Image
            src="/images/hero-main.jpg"
            alt="Scott Hause on the practice tee"
            fill
            priority
            sizes="120vw"
            className="object-cover object-[60%_center] opacity-85"
          />
        </div>
      </motion.div>

      {/* Aurora atmosphere */}
      <Aurora tone="mixed" intensity={0.55} className="z-[1]" />

      {/* Veil */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,13,0.65) 0%, rgba(11,11,13,0.18) 40%, rgba(11,11,13,0.92) 100%)",
        }}
      />

      {/* Sky-blue mouse-tracking glow */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="absolute right-[-160px] bottom-[-160px] z-[2] h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,159,196,0.45) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <Grain opacity={0.06} />

      {/* Hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10"
      >
        <div className="max-w-3xl pt-32 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-3"
          >
            <span className="block h-px w-10 bg-sky" />
            <span className="eyebrow text-sky">
              Houston · Westwood Golf Club
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="display-xl mt-5 text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[0.95] max-w-[16ch]"
          >
            Elite golf coaching, built around{" "}
            <span className="text-sky">real improvement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 max-w-xl text-white/85 text-[16px] md:text-[18px] leading-relaxed"
          >
            Scott Hause helps golfers simplify the game, improve performance,
            and train with purpose — from beginners to elite juniors and
            touring professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/contact" className="btn btn-primary">
              Book a Lesson <span aria-hidden>›</span>
            </Link>
            <Link href="/campus-academy" className="btn btn-outline-light">
              Explore CAMPUS Academy
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue (bottom-right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex items-center gap-3 text-white/55"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.span
          className="block w-12 h-px bg-white/50 origin-left"
          animate={{ scaleX: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
