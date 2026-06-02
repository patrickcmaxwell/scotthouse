import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InteriorHero } from "@/components/interior-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { NextChapter } from "@/components/next-chapter";
import { CHAPTERS } from "@/lib/chapters";
import { PillarIcon, type PillarKind } from "@/components/pillar-icons";

export const metadata: Metadata = {
  title: "Private Golf Lessons — Scott Hause Golf · Houston",
  description:
    "Personalized one-on-one golf coaching at Westwood Golf Club with Scott Hause, PGA. Built around your swing, your goals, and long-term improvement.",
};

const FOCUS: Array<{ label: string; icon: PillarKind }> = [
  { label: "Full Swing", icon: "swing" },
  { label: "Ball Striking", icon: "swing" },
  { label: "Driver Performance", icon: "arc" },
  { label: "Short Game", icon: "flag" },
  { label: "Putting", icon: "scorecard" },
  { label: "Wedge Play", icon: "flag" },
  { label: "Course Management", icon: "course" },
  { label: "Tournament Prep", icon: "trophy" },
  { label: "Practice Structure", icon: "bucket" },
  { label: "Junior Development", icon: "mind" },
];

const FLOW = [
  {
    no: "01",
    minute: "0 → 10",
    title: "Connect",
    body: "Where you are right now — recent rounds, what's working, what isn't, what you want from this lesson.",
  },
  {
    no: "02",
    minute: "10 → 30",
    title: "Diagnose",
    body: "Live ball-flight, swing capture, and the one or two patterns actually driving your results.",
  },
  {
    no: "03",
    minute: "30 → 55",
    title: "Build",
    body: "Targeted drills, immediate feedback, and clear go-home plan — the change you can keep without me.",
  },
  {
    no: "04",
    minute: "55 → 60",
    title: "Plan",
    body: "Next steps, practice structure, and when to come back. Improvement on a schedule, not a hope.",
  },
];

const EXPECT = [
  {
    title: "Individualized coaching",
    body: "Built around your swing, experience level, and the goals you bring to every lesson.",
  },
  {
    title: "Clear improvement plans",
    body: "A structured pathway with measurable progress — not a different fix every visit.",
  },
  {
    title: "Practical drills & feedback",
    body: "Drills you can actually use between lessons to lock in real change.",
  },
  {
    title: "Structured development",
    body: "Long-term skill building, not band-aids — game-changers that hold under pressure.",
  },
  {
    title: "Performance-focused",
    body: "Every concept tied back to lower scores and a more confident player.",
  },
];

export default function PrivateLessonsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Private Lessons · Houston"
        title="Coaching designed around"
        highlight="your game."
        tagline="Personalized one-on-one lessons with Scott Hause — built around your swing, your goals, and the way you actually learn."
        img="/images/lesson-1.jpeg"
        imgAlt="Private lesson at Westwood Golf Club"
        watermark="01"
        stats={[
          { value: "60", label: "Minute blocks" },
          { value: "1:1", label: "Always private" },
          { value: "All", label: "Skill levels" },
        ]}
        ctas={
          <>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Book a Lesson <span aria-hidden>›</span>
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Ask About Hours
            </Link>
          </>
        }
      />

      {/* INTRO */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="up" className="md:col-span-5">
            <p className="eyebrow text-sky-2">What To Expect</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              Clear feedback,{" "}
              <span className="text-sky">practical coaching,</span> real
              results.
            </h2>
          </Reveal>
          <Reveal
            variant="up"
            delay={0.1}
            className="md:col-span-6 md:col-start-7 space-y-5 text-[17px] leading-relaxed text-ink/80"
          >
            <p>
              Private lessons with Scott Hause are designed to help golfers
              improve through clear communication, structured feedback, and
              practical coaching that translates to the course.
            </p>
            <p>
              Every lesson is tailored to the individual player. Focus is placed
              on simplifying improvement and building consistency over time.
            </p>
            <p>
              Beginners through competitive golfers — there&apos;s a starting
              point for every skill level.
            </p>
          </Reveal>
        </div>

        {/* image strip */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-20 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal variant="left" className="md:col-span-7 floating-img relative aspect-[16/10]">
            <Image
              src="/images/coaching-3.jpg"
              alt="Golf lesson instruction"
              fill
              sizes="(min-width:768px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal variant="right" delay={0.1} className="md:col-span-5 floating-img relative aspect-[4/5]">
            <Image
              src="/images/coaching-2.jpg"
              alt="On-course coaching"
              fill
              sizes="(min-width:768px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* THE FLOW — vertical timeline */}
      <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 80% 40%, rgba(74,159,196,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal variant="up" className="md:col-span-4">
            <p className="eyebrow text-sky">A Typical Lesson</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">
              Every hour{" "}
              <span className="text-sky">has a shape.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70 max-w-sm">
              Lessons aren&apos;t freestyle. Each block has a clear job — so
              you leave with something to take to the range.
            </p>
            <Link href="/contact" className="btn btn-outline-light mt-9">
              Book a Block <span aria-hidden>›</span>
            </Link>
          </Reveal>
          <Stagger className="md:col-span-7 md:col-start-6 space-y-4" step={0.1}>
            {FLOW.map((f) => (
              <StaggerItem key={f.no}>
                <div className="card-dark p-6 md:p-7 grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-2">
                    <p className="eyebrow text-sky">{f.no}</p>
                    <p className="mt-2 font-mono text-[11px] text-white/55">
                      {f.minute} min
                    </p>
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-display text-white text-[22px] md:text-[26px] leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">
                      {f.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FOCUS — icon cards */}
      <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 0% 20%, rgba(74,159,196,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-12">
            <Reveal variant="up" className="md:col-span-7">
              <p className="eyebrow text-sky">Areas Of Focus</p>
              <h2 className="display-lg mt-5 text-[clamp(2rem,4.2vw,3.4rem)]">
                Ten things we&apos;ll{" "}
                <span className="text-sky">work on.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={0.1} className="md:col-span-5">
              <p className="text-white/70 text-[15px] leading-relaxed">
                From foundational swing mechanics to tournament-week
                preparation — coaching scales to fit what you actually need.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4" step={0.05}>
            {FOCUS.map((f) => (
              <StaggerItem key={f.label}>
                <div className="card-dark p-5 md:p-6 h-full relative overflow-hidden group flex flex-col items-start">
                  <span
                    aria-hidden
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.4) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <PillarIcon kind={f.icon} />
                  </div>
                  <span className="relative mt-5 text-[15.5px] md:text-[16px] font-semibold tracking-tight text-white">
                    {f.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHAT EVERY LESSON DELIVERS */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal variant="up" className="max-w-3xl mb-14">
            <p className="eyebrow text-sky-2">Every Lesson Delivers</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              Five things you{" "}
              <span className="text-sky">walk away with.</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5" step={0.08}>
            {EXPECT.map((e, i) => (
              <StaggerItem key={e.title}>
                <div className="card p-6 flex flex-col h-full relative overflow-hidden group">
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.32) 0%, transparent 70%)",
                    }}
                  />
                  <p className="relative eyebrow text-sky-2">
                    {String(i + 1).padStart(2, "0")} · Deliverable
                  </p>
                  <h3 className="relative mt-3 text-[17px] font-semibold tracking-tight text-ink leading-snug">
                    {e.title}
                  </h3>
                  <p className="relative mt-2 text-[13.5px] leading-relaxed text-ink/70">
                    {e.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <NextChapter chapter={CHAPTERS.privateLessons} />
    </>
  );
}
