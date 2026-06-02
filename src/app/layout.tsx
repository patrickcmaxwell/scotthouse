import type { Metadata } from "next";
import { Inter_Tight, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Preloader } from "@/components/preloader";

const sans = Inter_Tight({
  variable: "--font-sans-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const display = Oswald({
  variable: "--font-display-cond",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Scott Hause Golf — Elite Coaching in Houston",
  description:
    "Private golf lessons, junior development, and CAMPUS Academy training with Scott Hause, PGA Professional and Golf Digest Best Teacher in Texas.",
  metadataBase: new URL("https://scotthausegolf.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Preloader />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
