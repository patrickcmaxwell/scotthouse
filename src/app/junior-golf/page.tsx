import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InteriorHero } from "@/components/interior-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { NextChapter } from "@/components/next-chapter";
import { CHAPTERS } from "@/lib/chapters";
import { PillarIcon, type PillarKind } from "@/components/pillar-icons";

export const metadata: Metadata = {
  title: "Junior Golf Development — Scott Hause Golf · Houston",
  description:
    "Structured coaching for junior golfers focused on long-term improvement, competitive growth, and collegiate-pathway development.",
};

const STAGES = [
  {
    age: "8 — 12",
    label: "Foundations",
    body: "Movement quality, fundamentals, falling in love with the game. Skill-building disguised as fun.",
  },
  {
    age: "13 — 15",
    label: "Competitive",
    body: "First tournaments, scoring habits, practice structure. Building the engine for high-level golf.",
  },
  {
    age: "16 — 18",
    label: "Collegiate",
    body: "Tournament prep, recruiting strategy, on-course strategy. The final climb to college golf.",
  },
];

const AREAS: Array<{ icon: PillarKind; title: string; body: string }> = [
  {
    icon: "swing",
    title: "Swing Fundamentals",
    body: "The mechanics that hold up at every level — clean, repeatable, owned by the player.",
  },
  {
    icon: "bucket",
    title: "Practice Habits",
    body: "How to practice alone. Structured blocks, measurable reps, no spinning wheels.",
  },
  {
    icon: "flag",
    title: "Competitive Preparation",
    body: "Pre-event prep, tournament routines, and what to do when it doesn't go to plan.",
  },
  {
    icon: "scorecard",
    title: "Scoring Skills",
    body: "Wedges, putting, scrambling — the shots that actually drop scores.",
  },
  {
    icon: "course",
    title: "Course Management",
    body: "Strategy by hole, by lie, by wind. Decisions that protect the round.",
  },
  {
    icon: "mind",
    title: "Mental Performance",
    body: "Focus, breath, resets. Building a competitor that owns the tee box.",
  },
  {
    icon: "trophy",
    title: "Tournament Readiness",
    body: "From first AJGA to recruiting events — arriving ready, every time.",
  },
  {
    icon: "arc",
    title: "Long-Term Development",
    body: "A multi-year arc, not a quick fix — built around how juniors actually grow.",
  },
];

export default function JuniorGolfPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Junior Golf Development"
        title="Built for the next"
        highlight="generation of players."
        tagline="A structured environment focused on long-term improvement, competitive growth, and the habits that build great players."
        img="/images/junior-1.jpg"
        imgAlt="Junior golfer at Westwood"
        watermark="03"
        stats={[
          { value: "8 → 18", label: "Age range" },
          { value: "All", label: "Tournament tracks" },
          { value: "→ Pro", label: "Career arc" },
        ]}
        ctas={
          <>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Start Development <span aria-hidden>›</span>
            </Link>
            <Link href="/campus-academy" className="btn btn-outline-light">
              CAMPUS Academy
            </Link>
          </>
        }
      />

      {/* INTRO + AGE STAGES */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="up" className="md:col-span-5">
            <p className="eyebrow text-sky-2">The Arc</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              From first tournament{" "}
              <span className="text-sky">to college signing day.</span>
            </h2>
          </Reveal>
          <Reveal
            variant="up"
            delay={0.1}
            className="md:col-span-6 md:col-start-7 space-y-5 text-[17px] leading-relaxed text-ink/80"
          >
            <p>
              Junior golfers progress through three distinct windows. Each one
              has a job — and the coaching has to match where they are, not
              where the calendar says they should be.
            </p>
            <p>
              Programs are tailored to current stage of development and the
              player&apos;s long-term competitive goals.
            </p>
          </Reveal>
        </div>

        {/* AGE STAGE CARDS with connector arc */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-20 relative">
          {/* Arc connector */}
          <svg
            aria-hidden
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="hidden md:block absolute left-12 right-12 top-[44px] h-[40px] w-[calc(100%-6rem)] z-0"
          >
            <path
              d="M0 70 Q500 0 1000 70"
              fill="none"
              stroke="rgba(74,159,196,0.4)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
          </svg>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10" step={0.12}>
            {STAGES.map((s, i) => (
              <StaggerItem key={s.age}>
                <div className="card p-7 md:p-8 h-full relative overflow-hidden group">
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.35) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="font-display text-sky text-[32px] leading-none">
                      {s.age}
                    </span>
                    <span className="eyebrow text-ink-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-[22px] md:text-[24px] font-semibold tracking-tight text-ink">
                    {s.label}
                  </h3>
                  <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink/70">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DEVELOPMENT AREAS */}
      <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(74,159,196,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <Reveal variant="up">
              <p className="eyebrow text-sky">Development Areas</p>
              <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
                Eight pillars,{" "}
                <span className="text-sky">one player.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <p className="text-white/65 max-w-md text-[15px] leading-relaxed">
                Long-term development requires more than swing mechanics.
                Coaching covers the full athletic and competitive picture.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" step={0.06}>
            {AREAS.map((a) => (
              <StaggerItem key={a.title}>
                <div className="relative h-full card-dark p-6 md:p-7 overflow-hidden group">
                  {/* glow on hover */}
                  <span
                    aria-hidden
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.4) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <PillarIcon kind={a.icon} />
                  </div>
                  <h3 className="relative mt-6 text-[18px] md:text-[20px] font-semibold tracking-tight text-white leading-snug">
                    {a.title}
                  </h3>
                  <p className="relative mt-2 text-[13.5px] leading-relaxed text-white/70">
                    {a.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COMPETITIVE — split image */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal variant="left" className="md:col-span-6">
            <div className="floating-img relative aspect-[4/5]">
              <Image
                src="/images/junior-2.jpg"
                alt="Junior golfer competitive training"
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <p className="eyebrow text-white/65 text-[10px]">Practice</p>
                <p className="font-display text-white text-[20px] mt-1 leading-tight">
                  Short game · Greens complex
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.1} className="md:col-span-6">
            <p className="eyebrow text-sky-2">Built For Competitive Golf</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Performance habits{" "}
              <span className="text-sky">that travel.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/80">
              <p>
                For players pursuing tournament golf and collegiate
                opportunities, development extends beyond swing mechanics
                alone.
              </p>
              <p>
                Scott works with players to improve scoring consistency,
                practice efficiency, competitive preparation, and overall
                performance habits required for higher-level golf.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/campus-academy" className="btn btn-outline-dark">
                Explore CAMPUS Academy
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                Contact Scott
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <NextChapter chapter={CHAPTERS.juniorGolf} />
    </>
  );
}
