"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PARTNERS = [
  {
    src: "/images/partners/golf-digest-best-in-state.jpg",
    alt: "Golf Digest Best Teachers by State",
    label: "Golf Digest · Best Teachers in Texas",
    h: 80,
    rounded: true,
  },
  {
    src: "/images/partners/titleist.png",
    alt: "Titleist",
    label: "Titleist · Performance Partner",
    h: 36,
    rounded: false,
  },
  {
    src: "/images/partners/golf-digest-home.png",
    alt: "Golf Digest",
    label: "As featured · Golf Digest",
    h: 60,
    rounded: true,
  },
];

export function PartnerStrip() {
  return (
    <section className="bg-bg-soft border-y border-rule py-14 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          <div className="md:w-1/4 shrink-0 text-center md:text-left">
            <p className="eyebrow text-sky-2">Recognized By</p>
            <h3 className="font-display text-ink text-[clamp(1.4rem,1.8vw,1.6rem)] leading-tight mt-3">
              Trusted by golf&apos;s{" "}
              <span className="text-sky">most respected names.</span>
            </h3>
          </div>

          <div className="flex-1 grid grid-cols-3 items-center gap-6 md:gap-12">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              >
                <div className="flex items-center justify-center h-[80px]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={200}
                    height={p.h}
                    style={{ height: p.h, width: "auto" }}
                    className={p.rounded ? "" : ""}
                  />
                </div>
                <p className="hidden md:block eyebrow text-ink-soft text-[10px] text-center">
                  {p.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
