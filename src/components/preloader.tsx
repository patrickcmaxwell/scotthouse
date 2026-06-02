"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const minHold = 2600;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minHold - elapsed);
      window.setTimeout(() => {
        setDone(true);
        document.body.style.overflow = "";
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = window.setTimeout(finish, 5000);
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.6, 0, 0.4, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden text-white"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, #1a2536 0%, #0c0c0a 70%)",
          }}
        >
          {/* Sunset glow horizon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(231,161,74,0.35) 0%, rgba(74,159,196,0.18) 35%, rgba(74,159,196,0) 70%)",
            }}
          />

          {/* Aurora orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute -left-32 top-1/4 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(74,159,196,0.45) 0%, transparent 65%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.45, scale: 1 }}
            transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
            className="absolute -right-24 bottom-1/4 w-[620px] h-[620px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(231,161,74,0.35) 0%, transparent 65%)",
            }}
          />

          {/* Center stage: huge SVG flag scene */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <svg
              width="560"
              height="380"
              viewBox="0 0 560 380"
              className="block max-w-[80vw] h-auto"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* faint distant horizon line */}
              <motion.line
                x1="0" y1="260" x2="560" y2="260"
                stroke="rgba(255,255,255,0.15)"
                strokeDasharray="4 8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.1 }}
              />

              {/* hill — big sweeping arc */}
              <motion.path
                d="M-20 280 Q280 130 580 280"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.15, ease: "easeInOut" }}
              />

              {/* second softer hill behind */}
              <motion.path
                d="M-20 300 Q200 200 380 250 Q480 270 580 240"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.3, delay: 0.35, ease: "easeInOut" }}
              />

              {/* flag pole — at hill apex */}
              <motion.line
                x1="280" y1="195"
                x2="280" y2="65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
              />

              {/* flag pennant — fills + waves slightly */}
              <motion.path
                d="M280 68 L370 86 L280 110 Z"
                fill="#4a9fc4"
                stroke="#4a9fc4"
                initial={{ pathLength: 0, opacity: 0, scaleX: 0 }}
                animate={{ pathLength: 1, opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
                style={{ transformOrigin: "280px 80px" }}
              />

              {/* golf ball arc trajectory — dashed */}
              <motion.path
                d="M-30 340 Q140 60 280 195"
                stroke="rgba(231,161,74,0.7)"
                strokeWidth="1.5"
                strokeDasharray="3 7"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
              />

              {/* golf ball — travels along arc */}
              <motion.circle
                r="7"
                fill="white"
                stroke="rgba(231,161,74,0.8)"
                strokeWidth="1.5"
                initial={{
                  cx: -30,
                  cy: 340,
                  opacity: 0,
                }}
                animate={{
                  cx: [(-30), 140, 280],
                  cy: [(340), 60, 195],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.55,
                  ease: [0.4, 0.05, 0.5, 0.2],
                  times: [0, 0.5, 1],
                }}
              />

              {/* ball bounce + rest indicator (subtle pulse at the cup) */}
              <motion.circle
                cx="280" cy="195"
                r="2"
                fill="white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 6, 0], opacity: [0, 0.4, 0] }}
                transition={{ duration: 1.4, delay: 2.1, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          {/* SWING SOLUTIONS — letter-by-letter */}
          <motion.div
            className="relative z-10 -mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.85 }}
          >
            <div className="flex justify-center gap-[3px] sm:gap-[5px]">
              {"SWING SOLUTIONS".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 1.85 + i * 0.045,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="font-display text-white tracking-[0.35em] text-[18px] sm:text-[22px] inline-block"
                  style={ch === " " ? { width: "0.5em" } : undefined}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="mt-4 eyebrow text-white/55"
            >
              Scott Hause Golf · Houston
            </motion.p>
          </motion.div>

          {/* progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <motion.div
              className="h-full bg-sky"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>

          {/* grain overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
