import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/nav";
import { InteriorHero } from "@/components/interior-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact — Scott Hause Golf · Houston, TX",
  description:
    "Reach out to Scott Hause Golf for private lessons, junior development programs, and CAMPUS Academy inquiries.",
};

const PROGRAMS = [
  { label: "Private Lessons", href: "/private-lessons" },
  { label: "Junior Golf Development", href: "/junior-golf" },
  { label: "Competitive Player Development", href: "/contact" },
  { label: "CAMPUS Academy", href: "/campus-academy" },
  { label: "General Inquiry", href: "/contact" },
];

const QUICK_ACTIONS = [
  {
    kicker: "Phone",
    title: CONTACT.phone,
    href: CONTACT.phoneHref,
    icon: "phone",
  },
  {
    kicker: "Email",
    title: CONTACT.email,
    href: `mailto:${CONTACT.email}?subject=Lesson%20Inquiry`,
    icon: "mail",
  },
  {
    kicker: "Located At",
    title: CONTACT.club,
    sub: CONTACT.city,
    icon: "pin",
  },
];

function ActionIcon({ kind }: { kind: string }) {
  if (kind === "phone")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  if (kind === "mail")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Contact"
        title="Start your path toward"
        highlight="better golf."
        tagline="For lesson availability, junior programs, and CAMPUS Academy inquiries — Scott responds to every message personally."
        img="/images/coaching-4.jpg"
        imgAlt="Scott Hause on the green"
        watermark="GO"
        stats={[
          { value: "1:1", label: "Reply" },
          { value: "Same", label: "Day reply" },
          { value: "All", label: "Programs" },
        ]}
        ctas={
          <>
            <Link
              href={CONTACT.phoneHref}
              className="btn btn-primary"
            >
              Call Scott <span aria-hidden>›</span>
            </Link>
            <Link
              href={`mailto:${CONTACT.email}?subject=Lesson%20Inquiry`}
              className="btn btn-outline-light"
            >
              Send Email
            </Link>
          </>
        }
      />

      {/* DIRECT CONTACT GRID */}
      <section className="bg-bg py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* LEFT: action cards */}
          <div className="md:col-span-7">
            <Reveal variant="up" className="mb-10">
              <p className="eyebrow text-sky-2">Reach Scott Directly</p>
              <h2 className="display-lg mt-5 text-[clamp(2rem,4vw,3rem)]">
                The fastest ways{" "}
                <span className="text-sky">to start.</span>
              </h2>
            </Reveal>

            <Stagger className="space-y-3" step={0.1}>
              {QUICK_ACTIONS.map((a) => {
                const inner = (
                  <div className="card p-6 flex items-center gap-5 group hover:!shadow-[var(--shadow-card-lift)] transition-shadow">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky/10 text-sky-2 shrink-0">
                      <ActionIcon kind={a.icon} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="eyebrow text-ink-soft">{a.kicker}</p>
                      <p className="text-xl md:text-2xl font-semibold tracking-tight text-ink group-hover:text-sky-2 transition-colors truncate">
                        {a.title}
                      </p>
                      {a.sub && (
                        <p className="mt-1 text-ink-soft text-[14px]">
                          {a.sub}
                        </p>
                      )}
                    </div>
                    {a.href && (
                      <span className="text-ink-soft text-2xl group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                    )}
                  </div>
                );
                return (
                  <StaggerItem key={a.kicker}>
                    {a.href ? (
                      <a href={a.href}>{inner}</a>
                    ) : (
                      inner
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal variant="up" delay={0.2}>
              <div className="card mt-8 p-6 bg-bg-soft">
                <p className="eyebrow text-ink-soft">Lesson Hours</p>
                <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
                  Lessons by appointment — Scott teaches morning through
                  afternoon at Westwood. Call or email for the soonest open
                  block.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: sticky helper card */}
          <aside className="md:col-span-5">
            <div className="md:sticky md:top-28 space-y-4">
              <Reveal variant="right">
                <div className="card p-7 md:p-8">
                  <p className="eyebrow text-sky-2">When You Reach Out</p>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-ink leading-snug">
                    Mention the program you&apos;re interested in.
                  </h3>
                  <ul className="mt-7 space-y-1">
                    {PROGRAMS.map((p, i) => (
                      <li key={p.label}>
                        <Link
                          href={p.href}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-bg-soft transition-colors group"
                        >
                          <span className="font-mono text-[11px] text-sky-2 w-7 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 text-[15px] font-semibold text-ink">
                            {p.label}
                          </span>
                          <span className="text-ink-soft group-hover:text-sky-2 transition-colors">
                            ›
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="right" delay={0.1}>
                <div className="card-dark p-7 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74,159,196,0.3) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <p className="eyebrow text-sky">Helpful Detail</p>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/85">
                      Include <em>player age</em>, <em>experience level</em>,
                      and a one-line note on goals — it helps Scott prepare a
                      personalized response and recommend the right starting
                      point.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* WESTWOOD STRIP */}
      <section className="relative bg-ink text-white overflow-hidden">
        <Image
          src="/images/coaching-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <Reveal variant="up" className="md:col-span-8">
            <p className="eyebrow text-sky">Where You&apos;ll Train</p>
            <h2 className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Westwood Golf Club{" "}
              <span className="text-sky">· Houston, Texas.</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl text-[15.5px] leading-relaxed">
              One of the area&apos;s premier golf environments, and the home
              of Scott Hause Golf. Lessons, junior development, and CAMPUS
              Academy training all happen here.
            </p>
          </Reveal>
          <div className="md:col-span-4 flex flex-wrap gap-2">
            <span className="chip chip-light">PGA Professional</span>
            <span className="chip chip-light">Golf Digest · TX</span>
            <span className="chip chip-light">CAMPUS Academy</span>
          </div>
        </div>
      </section>
    </>
  );
}
