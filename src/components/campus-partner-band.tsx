"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CampusPartnerBand() {
  return (
    <section className="relative bg-ink text-white overflow-hidden py-24 md:py-36">
      {/* Giant decorative CAMPUS "A" mark behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/images/campus/campus-academy-a.svg"
          alt=""
          width={880}
          height={882}
          className="h-[120%] w-auto opacity-[0.04]"
        />
      </div>

      {/* sky-blue glow vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 30% 50%, rgba(74,159,196,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20 items-center">
        {/* LEFT — campus + scott hause wordmark */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-7 flex items-center justify-center md:justify-start"
        >
          <Image
            src="/images/campus/campus-scotthause.svg"
            alt="CAMPUS Academy · Scott Hause Golf"
            width={722}
            height={215}
            className="w-full max-w-[640px] h-auto"
          />
        </motion.div>

        {/* RIGHT — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-5"
        >
          <div className="inline-flex items-center gap-3">
            <span className="block h-px w-10 bg-sky" />
            <span className="eyebrow text-sky">National Network</span>
          </div>

          <h2 className="display-lg mt-5 text-[clamp(2rem,3.6vw,2.8rem)] leading-tight">
            Proud <span className="text-sky">CAMPUS Academy</span> Partner.
          </h2>

          <div className="mt-6 h-[3px] w-16 bg-sky rounded-full" />

          <p className="mt-7 text-[15.5px] leading-relaxed text-white/80 max-w-xl">
            Scott Hause Golf is a designated CAMPUS Academy, part of a national
            network of elite programs committed to developing competitive
            junior golfers and guiding families through the modern college
            recruiting landscape.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/75 max-w-xl">
            CAMPUS Academies are selected for their proven player development,
            competitive results, and ability to help golfers identify realistic
            pathways to the next level.
          </p>

          <Link href="/campus-academy" className="btn btn-primary mt-9">
            Explore CAMPUS Academy <span aria-hidden>›</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
