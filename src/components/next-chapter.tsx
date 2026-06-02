"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type Chapter = {
  no: string;
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  href: string;
};

export function NextChapter({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <section ref={ref} className="bg-bg pt-10 pb-28 md:pb-40 md:pt-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Link
            href={chapter.href}
            className="card group relative grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden"
          >
            {/* image side */}
            <div className="md:col-span-6 relative h-[300px] md:h-[440px] overflow-hidden">
              <motion.div className="absolute inset-0" style={{ y: imgY }}>
                <Image
                  src={chapter.img}
                  alt={chapter.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-bg/0"
                style={{ opacity }}
              />
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="eyebrow text-sky">Continue · {chapter.no}</span>
              </div>
            </div>

            {/* copy side */}
            <div className="md:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-8">
              <div>
                <p className="eyebrow text-sky-2">{chapter.eyebrow}</p>
                <h3 className="display-lg mt-5 text-[clamp(2rem,4.6vw,3.4rem)] text-ink">
                  {chapter.title}
                </h3>
                <p className="mt-6 text-[16px] leading-relaxed text-ink/75 max-w-md">
                  {chapter.body}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="eyebrow text-ink-soft">Next Chapter</span>
                <div className="relative">
                  <motion.div
                    className="btn btn-primary btn-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span>Keep Exploring</span>
                    <motion.span
                      aria-hidden
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      ›
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
