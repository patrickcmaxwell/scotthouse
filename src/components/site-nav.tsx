"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV } from "@/lib/nav";
import { MobileMenu } from "./mobile-menu";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Transparent over dark hero (every page) until scrolled
  const overDark = !scrolled;
  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-rule shadow-[0_4px_18px_-12px_rgba(11,11,13,0.12)]"
    : "bg-transparent border-b border-transparent";
  const linkText = overDark ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ink";
  const indicatorBg = overDark ? "rgba(255,255,255,0.14)" : "rgba(74,159,196,0.18)";
  const indicatorBorder = overDark ? "rgba(255,255,255,0.22)" : "rgba(74,159,196,0.4)";

  const activeKey = NAV.find((n) => pathname.startsWith(n.href))?.href ?? null;
  const indicatorKey = hovered ?? activeKey;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[68px] md:h-[76px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center shrink-0 relative z-10">
            <Image
              src="/images/logo.png"
              alt="Scott Hause Golf — Swing Solutions"
              width={130}
              height={54}
              priority
              className={`h-8 md:h-9 w-auto transition-[filter] duration-300 ${
                overDark ? "" : "logo-dark"
              }`}
            />
          </Link>

          <nav
            className="hidden lg:flex relative items-center"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV.map((item) => {
              const isActive = item.href === activeKey;
              const isLit = item.href === indicatorKey;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  className={`relative px-4 py-2 mx-0.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors duration-200 ${linkText} ${
                    isActive ? (overDark ? "!text-white" : "!text-ink") : ""
                  }`}
                >
                  {isLit && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: indicatorBg,
                        border: `1px solid ${indicatorBorder}`,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn-primary btn-sm"
            >
              Book a Lesson <span aria-hidden>›</span>
            </Link>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 ${
                overDark ? "text-white" : "text-ink"
              }`}
            >
              <span className="block h-[2px] w-6 bg-current" />
              <span className="block h-[2px] w-6 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
