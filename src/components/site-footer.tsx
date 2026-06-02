import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, CONTACT } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-bg pt-24 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/logo.png"
              alt="Scott Hause Golf — Swing Solutions"
              width={260}
              height={108}
              className="h-14 md:h-16 w-auto logo-light"
            />
            <p className="mt-7 text-white/65 max-w-md text-[15px] leading-relaxed">
              Elite golf coaching in Houston — private lessons, junior
              development, and official CAMPUS Academy training with Scott
              Hause, PGA.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip chip-light">PGA Professional</span>
              <span className="chip chip-light">Golf Digest · TX</span>
              <span className="chip chip-light">CAMPUS Academy</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/40 mb-4">Navigate</p>
            <ul className="space-y-2.5 text-[14px]">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-sky transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/40 mb-4">Programs</p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/private-lessons" className="text-white/80 hover:text-sky">
                  Private Lessons
                </Link>
              </li>
              <li>
                <Link href="/junior-golf" className="text-white/80 hover:text-sky">
                  Junior Golf
                </Link>
              </li>
              <li>
                <Link href="/campus-academy" className="text-white/80 hover:text-sky">
                  CAMPUS Academy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/40 mb-4">Contact</p>
            <ul className="space-y-2.5 text-[14px] text-white/80">
              <li>{CONTACT.club}</li>
              <li>{CONTACT.city}</li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-sky">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-sky">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/45">
          <p>© {year} Scott Hause Golf. All rights reserved.</p>
          <p className="eyebrow">Houston · Texas</p>
        </div>
      </div>
    </footer>
  );
}
