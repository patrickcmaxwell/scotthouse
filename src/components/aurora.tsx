type Tone = "sky" | "warm" | "mixed";

const tones: Record<Tone, [string, string, string]> = {
  sky: [
    "rgba(74,159,196,0.45)",
    "rgba(143,210,239,0.32)",
    "rgba(47,126,168,0.4)",
  ],
  warm: [
    "rgba(231,161,74,0.38)",
    "rgba(228,0,20,0.18)",
    "rgba(74,159,196,0.35)",
  ],
  mixed: [
    "rgba(74,159,196,0.42)",
    "rgba(231,161,74,0.25)",
    "rgba(4,22,39,0.55)",
  ],
};

export function Aurora({
  tone = "mixed",
  intensity = 0.85,
  className = "",
}: {
  tone?: Tone;
  intensity?: number;
  className?: string;
}) {
  const [a, b, c] = tones[tone];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity: intensity }}
    >
      <div
        className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${a} 0%, transparent 65%)` }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${b} 0%, transparent 65%)` }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${c} 0%, transparent 65%)` }}
      />
    </div>
  );
}

export function Grain({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-overlay z-[3]"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
      }}
    />
  );
}

/** Bottom curve divider (white wave bleeding into a light section below). */
export function CurveDivider({
  fill = "var(--bg)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={`absolute left-0 right-0 h-[60px] w-full z-[4] ${
        flip ? "top-[-1px] rotate-180" : "bottom-[-1px]"
      } ${className}`}
      style={{ fill }}
    >
      <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
    </svg>
  );
}
