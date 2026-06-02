"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const STAGES = [
  {
    no: "01",
    title: "Evaluate",
    short: "Where you are.",
    body: "Scoring trends, technical strengths and gaps, tournament history, academic profile, and where you want to go.",
  },
  {
    no: "02",
    title: "Develop",
    short: "Build the player.",
    body: "Technical skills, practice structure, scoring ability, and the competitive habits that hold up under tournament pressure.",
  },
  {
    no: "03",
    title: "Compete",
    short: "Translate to tournaments.",
    body: "Structured tournament prep, on-course strategy, mental routines — turning practice gains into measurable scoring drops.",
  },
  {
    no: "04",
    title: "Recruit",
    short: "Get the offer.",
    body: "CAMPUS recruiting platform, video profiles, college coach visibility, and a personalized pathway to your program of fit.",
  },
];

function StageDot({
  progress,
  range,
}: {
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const borderColor = useTransform(
    progress,
    range,
    ["rgba(255,255,255,0.25)", "rgb(74,159,196)"]
  );
  const background = useTransform(
    progress,
    range,
    ["rgba(11,11,13,1)", "rgb(74,159,196)"]
  );
  const scale = useTransform(progress, range, [1, 1.15]);
  return (
    <motion.div
      className="w-[22px] h-[22px] rounded-full border-2 z-10"
      style={{ borderColor, backgroundColor: background, scale }}
    />
  );
}

export function ProcessTimeline() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ballLeft = useTransform(scrollYProgress, (v) => `calc(${v * 100}% - 9px)`);

  return (
    <section ref={ref} className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(74,159,196,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-20"
        >
          <div>
            <p className="eyebrow text-sky">The Process</p>
            <h2 className="display-lg mt-5 text-[clamp(2.2rem,5vw,4rem)] max-w-[16ch]">
              Four stages.{" "}
              <span className="text-sky">One trajectory.</span>
            </h2>
          </div>
          <p className="text-white/65 max-w-md text-[15px] leading-relaxed">
            The CAMPUS process is sequential — every stage builds on the last,
            with measurable progress and a clear next step at every step.
          </p>
        </motion.div>

        {/* DESKTOP — dot row + cards below, single relative wrapper */}
        <div className="hidden md:block">
          {/* Track + traveling ball: ALL at the same y, aligned with the dots */}
          <div className="relative h-[22px] mb-8">
            {/* Background line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/12" />
            {/* Progress fill */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 right-0 h-px bg-sky origin-left"
              style={{ scaleX: lineScale }}
            />
            {/* Traveling ball on the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white"
              style={{
                left: ballLeft,
                boxShadow:
                  "0 0 0 4px rgba(74,159,196,0.22), 0 0 22px rgba(74,159,196,0.7)",
              }}
            />
            {/* Dots — evenly spaced ON the line */}
            <div className="absolute inset-0 grid grid-cols-4">
              {STAGES.map((s, i) => (
                <div key={s.no} className="flex items-center justify-center">
                  <StageDot
                    progress={scrollYProgress}
                    range={[i / STAGES.length, (i + 0.6) / STAGES.length]}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-4 gap-5">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="card-dark p-6 md:p-7 h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-sky">{s.no}</span>
                  <span className="eyebrow text-white/40">Stage</span>
                </div>
                <h3 className="font-display text-[34px] md:text-[42px] mt-4 leading-none text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sky text-[15px] font-semibold">
                  {s.short}
                </p>
                <p className="mt-5 text-[14.5px] leading-relaxed text-white/75">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE — vertical rail with sky-blue line through index badges */}
        <ol className="md:hidden relative pl-14">
          {/* vertical rail */}
          <span
            aria-hidden
            className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-sky/60 via-white/15 to-transparent"
          />
          {STAGES.map((s, i) => (
            <motion.li
              key={s.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative pb-5"
            >
              {/* index badge sitting ON the rail */}
              <span className="absolute -left-14 top-3 flex items-center justify-center w-11 h-11 rounded-full bg-ink border border-sky/50 font-mono text-sky text-[12px] font-semibold">
                {s.no}
              </span>
              <div className="card-dark p-6">
                <h3 className="font-display text-[28px] leading-none text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sky text-[14px] font-semibold">
                  {s.short}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-white/75">
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
