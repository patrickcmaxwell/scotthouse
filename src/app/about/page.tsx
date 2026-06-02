import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InteriorHero } from "@/components/interior-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { NextChapter } from "@/components/next-chapter";
import { CHAPTERS } from "@/lib/chapters";
import { PillarIcon, type PillarKind } from "@/components/pillar-icons";

export const metadata: Metadata = {
  title: "About Scott Hause — PGA Professional · Houston, TX",
  description:
    "Director of Instruction at Westwood Golf Club, Golf Digest Best Teacher in Texas, and PGA Professional. Two decades of coaching.",
};

const FOCUS: Array<{ icon: PillarKind; title: string; body: string }> = [
  {
    icon: "swing",
    title: "Why ball flight happens",
    body: "Decoding what the club is doing — so you can adjust on the fly, not memorize positions.",
  },
  {
    icon: "mind",
    title: "How to make effective adjustments",
    body: "The smallest change that produces the biggest result, every time we touch your swing.",
  },
  {
    icon: "bucket",
    title: "How to practice with purpose",
    body: "Practice plans you can run alone — structured blocks, measurable feedback, no spinning your wheels.",
  },
  {
    icon: "course",
    title: "How to transfer it to the course",
    body: "Bridging the gap between practice tee and Sunday tee box — the only place improvement matters.",
  },
];

const TIMELINE: Array<{ era: string; title: string; sub?: string }> = [
  { era: "Early Career", title: "First PGA Professional appointment", sub: "Texas" },
  { era: "Building", title: "Junior development program scaled", sub: "Tournaments + collegiate prep" },
  { era: "Leadership", title: "Director of Instruction · Westwood", sub: "Houston" },
  { era: "Today", title: "Golf Digest Best Teachers · Texas", sub: "CAMPUS Academy Houston" },
];

const RECOGNITION = [
  { kicker: "Recognition", title: "Golf Digest Best Teachers in Texas" },
  { kicker: "Certification", title: "PGA Professional · Class A" },
  { kicker: "Appointment", title: "Director of Instruction · Westwood" },
  { kicker: "Network", title: "Official CAMPUS Academy Location" },
];

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        eyebrow="About Scott Hause"
        title="The most respected coach"
        highlight="in Texas."
        tagline="Helping golfers simplify the game and perform at a higher level — from first lesson to tour-week prep."
        img="/images/about-scott.jpg"
        imgAlt="Scott Hause on the course"
        watermark="20+"
        stats={[
          { value: "20+", label: "Years coaching" },
          { value: "#1", label: "Texas teachers" },
          { value: "Tour", label: "Level coaching" },
        ]}
        ctas={
          <>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Book a Lesson <span aria-hidden>›</span>
            </Link>
            <Link href="/campus-academy" className="btn btn-outline-light">
              CAMPUS Academy
            </Link>
          </>
        }
      />

      {/* BIO + TIMELINE */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal variant="up" className="md:col-span-5">
            <p className="eyebrow text-sky-2">Two Decades In</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              Twenty years of clear,{" "}
              <span className="text-sky">structured coaching.</span>
            </h2>
          </Reveal>
          <Reveal
            variant="up"
            delay={0.1}
            className="md:col-span-6 md:col-start-7 space-y-5 text-[17px] leading-relaxed text-ink/80"
          >
            <p>
              Scott Hause has spent more than two decades helping golfers
              improve through clear communication, structured coaching, and
              practical development strategies.
            </p>
            <p>
              Recognized as one of the Golf Digest Best Teachers in Texas, Scott
              has worked with players of all skill levels — from beginners
              learning the fundamentals to elite juniors, collegiate athletes,
              and touring professionals.
            </p>
            <p>
              As Director of Instruction at Westwood Golf Club in Houston, Scott
              leads private coaching, junior development, and competitive
              training in one of the area&apos;s premier golf environments.
            </p>
          </Reveal>
        </div>

        {/* CAREER TIMELINE — horizontal track */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-24">
          <Reveal variant="up">
            <p className="eyebrow text-sky-2">The Arc</p>
            <h3 className="display-lg mt-3 text-[clamp(1.6rem,2.4vw,2rem)]">
              From first appointment to Director of Instruction.
            </h3>
          </Reveal>
          <Stagger className="mt-14 relative" step={0.12}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
              {/* hairline connector */}
              <div
                aria-hidden
                className="hidden md:block absolute left-0 right-0 h-px bg-rule"
                style={{ top: "44px" }}
              />
              {TIMELINE.map((t, i) => (
                <StaggerItem key={t.era}>
                  <div className="relative">
                    <p className="eyebrow text-sky-2 mb-3">
                      Phase {String(i + 1).padStart(2, "0")} · {t.era}
                    </p>
                    {/* clean dot on the line */}
                    <span
                      aria-hidden
                      className="hidden md:block absolute left-0 w-3 h-3 rounded-full bg-sky ring-4 ring-bg"
                      style={{ top: "38px" }}
                    />
                    <p className="mt-7 md:mt-10 font-display text-ink text-[clamp(1.4rem,2vw,1.7rem)] leading-tight">
                      {t.title}
                    </p>
                    {t.sub && (
                      <p className="mt-2 text-[13.5px] text-ink-soft">
                        {t.sub}
                      </p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* PHILOSOPHY + FOCUS — magazine card layout */}
      <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(74,159,196,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <Reveal variant="left" className="md:col-span-5">
            <div className="floating-img relative aspect-[4/5]">
              <Image
                src="/images/about-scott.jpg"
                alt="Scott Hause coaching"
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="eyebrow text-white/65 text-[10px]">Coaching Style</p>
                <p className="font-display text-white text-[22px] leading-tight mt-1">
                  Simplify. Build trust. Translate.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.15} className="md:col-span-7">
            <p className="eyebrow text-sky">A Simpler Approach</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.2vw,3.4rem)]">
              Golf instruction should make the game{" "}
              <span className="text-sky">clearer.</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-white/80 max-w-2xl">
              Not more complicated. Scott&apos;s coaching philosophy centers
              around simplifying the golf swing, creating efficient practice
              habits, and helping players build confidence that translates onto
              the course. Long-term development, measurable improvement, a game
              you can trust under pressure.
            </p>

            <Stagger className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3" step={0.08}>
              {FOCUS.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="relative card-dark p-5 h-full overflow-hidden group">
                    <span
                      aria-hidden
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(74,159,196,0.35) 0%, transparent 70%)",
                      }}
                    />
                    <div className="relative">
                      <PillarIcon kind={f.icon} />
                    </div>
                    <h3 className="relative mt-5 text-[15.5px] font-semibold tracking-tight text-white leading-snug">
                      {f.title}
                    </h3>
                    <p className="relative mt-2 text-[13px] leading-relaxed text-white/70">
                      {f.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* RECOGNITION — masonry-style band */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal variant="up" className="max-w-3xl mb-14">
            <p className="eyebrow text-sky-2">Recognition</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
              Recognized at every level{" "}
              <span className="text-sky">of the game.</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" step={0.08}>
            {RECOGNITION.map((r, i) => (
              <StaggerItem key={r.title}>
                <div className="card p-7 h-full flex flex-col justify-between min-h-[180px] relative overflow-hidden group">
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.35) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <p className="eyebrow text-sky-2 text-[10px]">
                      0{i + 1} · {r.kicker}
                    </p>
                  </div>
                  <h3 className="relative text-[18px] md:text-[19px] font-semibold tracking-tight text-ink leading-snug">
                    {r.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <NextChapter chapter={CHAPTERS.about} />
    </>
  );
}
