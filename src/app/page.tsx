import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { NextChapter } from "@/components/next-chapter";
import { CHAPTERS } from "@/lib/chapters";
import { HomeHero } from "@/components/home-hero";
import { FeaturedTestimonial } from "@/components/featured-testimonial";
import { PartnerStrip } from "@/components/partner-strip";
import { CampusPartnerBand } from "@/components/campus-partner-band";

const PROGRAMS = [
  {
    no: "01",
    title: "Private Lessons",
    img: "/images/lesson-1.jpeg",
    body: "One-on-one coaching tailored to your swing, experience level, and goals. Lessons focus on building consistency, improving ball striking, and creating a clear plan for improvement.",
    href: "/private-lessons",
    cta: "Explore Lessons",
  },
  {
    no: "02",
    title: "Junior Golf Development",
    img: "/images/junior-1.jpg",
    body: "Structured coaching programs for junior golfers looking to improve technically, compete with confidence, and develop strong long-term habits.",
    href: "/junior-golf",
    cta: "Explore Junior Golf",
  },
  {
    no: "03",
    title: "Competitive Player Development",
    img: "/images/coaching-3.jpg",
    body: "Advanced coaching for tournament players, high school golfers, collegiate athletes, and aspiring professionals seeking higher-level performance.",
    href: "/contact",
    cta: "Get In Touch",
  },
  {
    no: "04",
    title: "CAMPUS Academy",
    img: "/images/campus-feature.jpg",
    body: "Elite junior golf development for players pursuing collegiate golf opportunities through structured coaching, performance development, and recruiting support.",
    href: "/campus-academy",
    cta: "Explore Academy",
  },
];

const QUOTES = [
  {
    body: "Scott carefully listened to my issue and provided simple, effective feedback that immediately improved my ball striking.",
    by: "Private Lesson Student",
  },
  {
    body: "Excellent, no-nonsense approach to improving the golf swing.",
    by: "Westwood Member",
  },
  {
    body: "Scott is great at simplifying concepts and building confidence. Every lesson has a purpose.",
    by: "Junior Parent",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* PHILOSOPHY — image-banner with text overlaid */}
      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {/* eyebrow + title bar */}
          <Reveal variant="up" className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-sky-2">The Approach</p>
              <h2 className="display-lg mt-4 text-[clamp(2rem,4vw,3rem)]">
                Coaching built around{" "}
                <span className="text-sky">real improvement.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-ink/75 text-[15.5px] leading-relaxed">
                Every golfer has different goals, learning styles, and
                challenges. Coaching is built around simplifying the process —
                and helping players improve in ways that translate to the golf
                course.
              </p>
            </div>
          </Reveal>

          {/* IMAGE BANNER with text overlay */}
          <Reveal variant="scale" delay={0.15}>
            <div className="relative aspect-[16/8] md:aspect-[16/6.5] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-30px_rgba(11,11,13,0.4)]">
              <Image
                src="/images/coaching-1.jpg"
                alt="Scott Hause coaching on the practice tee"
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* dark gradient overlay so text reads */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
              {/* text on the banner */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl px-8 md:px-14">
                  <p className="eyebrow text-sky">Philosophy In Practice</p>
                  <h3 className="display-lg mt-4 text-white text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                    Simplify the swing.{" "}
                    <span className="text-sky">Build trust.</span> Translate to
                    the course.
                  </h3>
                  <p className="mt-5 text-white/80 text-[15px] md:text-[16px] leading-relaxed">
                    Long-term development, measurable improvement, and a game
                    you can trust under pressure — every program designed to
                    actually transfer to scoring on the course.
                  </p>
                  <Link
                    href="/about"
                    className="btn btn-primary mt-7"
                  >
                    Read the philosophy <span aria-hidden>›</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-bg-soft py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
            <Reveal variant="up">
              <p className="eyebrow text-sky-2">Programs</p>
              <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">
                Four paths forward.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <p className="text-ink-soft max-w-md text-[15px] leading-relaxed">
                Pick the program that fits where you are now — every path is
                built around your goals and long-term development.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" step={0.12}>
            {PROGRAMS.map((p) => (
              <StaggerItem key={p.title}>
                <Link
                  href={p.href}
                  className="card group p-5 md:p-6 flex flex-col h-full"
                >
                  <div className="media-frame relative aspect-[16/10] mb-6">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <p className="eyebrow text-sky-2">Program · {p.no}</p>
                    <h3 className="mt-2 mb-3 text-[26px] md:text-[28px] font-semibold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="text-ink/75 text-[15.5px] leading-relaxed">
                      {p.body}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sky-2 font-semibold text-[13.5px] group-hover:gap-3 transition-all">
                      {p.cta} <span aria-hidden>›</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MEET SCOTT */}
      <section className="bg-bg py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal variant="left" className="md:col-span-5 order-2 md:order-1">
            <div className="floating-img relative aspect-[4/5]">
              <Image
                src="/images/about-scott.jpg"
                alt="Scott Hause"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            variant="right"
            delay={0.1}
            className="md:col-span-7 order-1 md:order-2 md:pl-6"
          >
            <p className="eyebrow text-sky-2">Meet Scott Hause</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.6vw,3.6rem)]">
              The most respected coach{" "}
              <span className="text-sky">in Texas.</span>
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-ink/80 max-w-xl">
              <p>
                Scott Hause is one of the most respected golf coaches in Texas,
                known for helping players simplify the game and develop skills
                that hold up under pressure. A PGA Professional and Golf Digest
                Best Teacher in Texas, Scott has coached players ranging from
                beginners to elite juniors, collegiate athletes, and touring
                professionals.
              </p>
              <p>
                As Director of Instruction at Westwood Golf Club in Houston,
                Scott combines technical coaching with practical on-course
                application — helping players understand not only what to
                improve, but how to improve it.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-dark">
                Learn More About Scott <span aria-hidden>›</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturedTestimonial />

      <PartnerStrip />

      <CampusPartnerBand />

      {/* TESTIMONIALS */}
      <section className="bg-bg-soft py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal variant="up">
            <p className="eyebrow text-sky-2">Players</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3.2rem)] max-w-3xl">
              Clear feedback.{" "}
              <span className="text-sky">Immediate results.</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14" step={0.1}>
            {QUOTES.map((q, i) => (
              <StaggerItem key={i}>
                <figure className="card p-8 md:p-10 flex flex-col justify-between min-h-[280px] h-full">
                  <div>
                    <svg
                      className="w-9 h-9 text-sky/80 mb-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.5 6C5.91 6 3 8.91 3 12.5V18h6v-6H5.5c0-2.21 1.79-4 4-4V6zm9 0c-3.59 0-6.5 2.91-6.5 6.5V18h6v-6h-3.5c0-2.21 1.79-4 4-4V6z" />
                    </svg>
                    <blockquote className="text-[17px] md:text-[18px] leading-relaxed text-ink/90 font-medium">
                      {q.body}
                    </blockquote>
                  </div>
                  <figcaption className="eyebrow text-ink-soft mt-8">
                    — {q.by}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <NextChapter chapter={CHAPTERS.home} />
    </>
  );
}
