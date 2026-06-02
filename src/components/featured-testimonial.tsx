"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Aurora } from "./aurora";

export function FeaturedTestimonial() {
  return (
    <section className="relative bg-ink text-white overflow-hidden py-28 md:py-40">
      <Aurora tone="sky" intensity={0.45} className="z-[1]" />

      {/* Massive SWING SOLUTIONS watermark logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={1600}
          height={660}
          className="w-[140%] max-w-none opacity-[0.05] logo-light select-none"
          priority={false}
        />
      </div>

      {/* sky vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(11,11,13,0) 0%, rgba(11,11,13,0.65) 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-7 relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            <iframe
              title="Scott Hause Golf — Geoff Blum"
              src="https://player.vimeo.com/video/423877729?h=012a522fc3&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              frameBorder={0}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex absolute -bottom-5 -right-5 px-4 py-3 rounded-xl bg-ink border border-white/10 items-center gap-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky animate-pulse" />
            <span className="eyebrow text-white/90 text-[10px]">Watch · 1 min</span>
          </motion.div>
        </motion.div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-5"
        >
          <span className="block font-serif text-sky text-7xl md:text-8xl leading-none mb-3 select-none">
            “
          </span>
          <blockquote className="font-display text-white text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] tracking-tight">
            Scott has been a great match for me, and I have had a lot of fun
            getting better.
          </blockquote>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-display text-white text-[24px] md:text-[28px] leading-none">
              Geoff Blum
            </p>
            <p className="eyebrow text-sky mt-3">
              Houston Astros Broadcaster · Former MLB Player
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
