import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CampusHero } from "@/components/campus/campus-hero";
import { ProcessTimeline } from "@/components/campus/process-timeline";
import { StatCard } from "@/components/campus/stat-card";
import { BenefitCard } from "@/components/campus/benefit-card";
import type { IconKey } from "@/components/campus/benefit-icons";
import { Stagger, StaggerItem, Reveal } from "@/components/reveal";
import { NextChapter } from "@/components/next-chapter";
import { CHAPTERS } from "@/lib/chapters";
import { CampusPartnerBand } from "@/components/campus-partner-band";

export const metadata: Metadata = {
  title: "CAMPUS Academy Houston — Scott Hause Golf",
  description:
    "Elite junior golf development for players pursuing collegiate opportunities. Structured coaching, tournament prep, and CAMPUS recruiting platform access.",
};

const STATS: Array<{
  value: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  label: string;
}> = [
  { value: 20, suffix: "+", unit: "yrs", label: "Coaching juniors across every level of the game" },
  { value: 4, unit: "stages", label: "Sequential development pathway, end to end" },
  { value: 100, suffix: "%", label: "Personalized — every player gets their own plan" },
  { value: 1, prefix: "#", unit: "TX", label: "Golf Digest Best Teachers · PGA Network" },
];

const BENEFITS: Array<{ title: string; body: string; icon: IconKey }> = [
  {
    title: "Structured Coaching Plans",
    body: "A personal development plan revisited every cycle — not one generic curriculum.",
    icon: "plan",
  },
  {
    title: "Competitive Development",
    body: "Practice that builds tournament-ready skill — not just range-ready swings.",
    icon: "flag",
  },
  {
    title: "Tournament Preparation",
    body: "Course strategy, mental routines, and pre-event prep dialed in for every start.",
    icon: "trophy",
  },
  {
    title: "Video Analysis & Feedback",
    body: "High-frame swing capture, side-by-side comparison, and reviewable feedback you can study.",
    icon: "video",
  },
  {
    title: "Long-Term Player Development",
    body: "A multi-year arc, not a quick fix — built around how juniors actually develop.",
    icon: "arc",
  },
  {
    title: "Recruiting Guidance",
    body: "Roadmap, timelines, school-fit conversations, and direct coaching on the process.",
    icon: "compass",
  },
  {
    title: "CAMPUS Recruiting Platform",
    body: "Player profile, tournament results, video, academics — all in one place coaches actually visit.",
    icon: "platform",
  },
  {
    title: "College Coach Visibility",
    body: "Surfaced to the coaches who recruit in your range — built for the modern recruiting funnel.",
    icon: "scope",
  },
];

const FAQ = [
  {
    q: "Who is CAMPUS Academy Houston for?",
    a: "Junior golfers committed to competitive tournament play and pursuing collegiate golf opportunities. Players range from rising tournament newcomers through nationally-ranked recruits.",
  },
  {
    q: "How is this different from private lessons?",
    a: "Private lessons focus on swing development. CAMPUS Academy combines coaching with tournament infrastructure, recruiting tools, and a multi-year roadmap toward college golf.",
  },
  {
    q: "What does the evaluation process include?",
    a: "Scott reviews scoring history, technical skill set, competitive goals, and academic profile — then maps a personalized starting point and development plan.",
  },
  {
    q: "What's the time commitment?",
    a: "Programs scale to fit each family — but serious players typically train multiple sessions per week, with tournament prep blocks built around the competitive schedule.",
  },
];

export default function CampusAcademyPage() {
  return (
    <>
      <CampusHero />

      <CampusPartnerBand />

      {/* THESIS */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="up" className="md:col-span-5">
            <p className="eyebrow text-sky-2">The Thesis</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Not recreational{" "}
              <span className="text-sky">instruction.</span>
            </h2>
          </Reveal>
          <Reveal
            variant="up"
            delay={0.1}
            className="md:col-span-6 md:col-start-7 space-y-5 text-[17px] leading-relaxed text-ink/80"
          >
            <p>
              CAMPUS Academy Houston is built for junior golfers serious about
              competing at the next level. Led by Scott Hause, the program
              combines elite coaching, multi-year player development, and access
              to the CAMPUS recruiting platform college coaches actually use.
            </p>
            <p>
              The standard isn&apos;t showing up — it&apos;s improving on a
              schedule, training with intent, and arriving at every tournament
              with a plan that holds up under pressure.
            </p>
          </Reveal>
        </div>

        {/* Floating image */}
        <Reveal variant="scale" delay={0.2} className="mx-auto max-w-[1440px] px-6 md:px-10 mt-20">
          <div className="floating-img relative aspect-[16/8]">
            <Image
              src="/images/campus-feature.jpg"
              alt="CAMPUS Academy training session"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5" step={0.08}>
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <StatCard
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  unit={s.unit}
                  label={s.label}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* BENEFITS GRID */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal variant="up" className="mb-14 md:mb-20 max-w-3xl">
            <p className="eyebrow text-sky-2">What Players Receive</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Eight things every CAMPUS player{" "}
              <span className="text-sky">gets.</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" step={0.06}>
            {BENEFITS.map((b, i) => (
              <StaggerItem key={b.title}>
                <BenefitCard
                  no={String(i + 1).padStart(2, "0")}
                  title={b.title}
                  body={b.body}
                  icon={b.icon}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* RECRUITING DARK BAND */}
      <section className="relative bg-ink text-white overflow-hidden">
        <Image
          src="/images/campus-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-28 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal variant="up" className="md:col-span-7">
            <p className="eyebrow text-sky">Modern Recruiting</p>
            <h2 className="display-lg mt-6 text-[clamp(2.2rem,5vw,4rem)]">
              Tournament scores{" "}
              <span className="text-sky">aren&apos;t enough anymore.</span>
            </h2>
            <p className="mt-7 text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
              Today&apos;s recruiting process requires more than tournament
              scores alone. CAMPUS helps players build recruiting profiles —
              tournament results, video, academic information, and the insights
              college coaches actually evaluate — all in one place.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Apply for Evaluation
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Contact Scott
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal variant="up" className="md:col-span-4">
            <p className="eyebrow text-sky-2">Common Questions</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              Things parents{" "}
              <span className="text-sky">ask first.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/70 max-w-sm">
              Don&apos;t see your question? Scott responds to every inquiry
              personally — reach out directly.
            </p>
            <div className="mt-7">
              <Link href="/contact" className="btn btn-dark">
                Ask Scott Directly <span aria-hidden>›</span>
              </Link>
            </div>
          </Reveal>
          <Stagger className="md:col-span-8 space-y-3" step={0.06}>
            {FAQ.map((f) => (
              <StaggerItem key={f.q}>
                <details className="card p-7 group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-[18px] md:text-[19px] font-semibold tracking-tight text-ink pr-4">
                      {f.q}
                    </h3>
                    <span className="text-sky-2 text-2xl group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                    {f.a}
                  </p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* APPLY CTA — big card */}
      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal variant="up">
            <div className="card-dark relative overflow-hidden p-10 md:p-20">
              {/* Decorative svg flag */}
              <svg
                className="absolute -right-20 -top-10 w-[520px] h-[520px] text-sky/10"
                viewBox="0 0 320 220"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M10 150 Q160 70 310 150" />
                <line x1="160" y1="105" x2="160" y2="22" />
                <path d="M160 24 L218 38 L160 56 Z" fill="currentColor" />
              </svg>

              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                <div className="md:col-span-8">
                  <p className="eyebrow text-sky">Join CAMPUS Academy Houston</p>
                  <h2 className="display-lg mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] max-w-[14ch]">
                    Start the{" "}
                    <span className="text-sky">evaluation.</span>
                  </h2>
                  <p className="mt-6 text-white/75 max-w-xl text-[15.5px] leading-relaxed">
                    Tell Scott about the player — current level, tournament
                    history, and goals. From there, the development pathway gets
                    personal.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn btn-primary">
                    Apply for Evaluation
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light">
                    Book a Lesson
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <NextChapter chapter={CHAPTERS.campus} />
    </>
  );
}
