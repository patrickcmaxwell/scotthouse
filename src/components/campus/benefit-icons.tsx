import type { SVGProps } from "react";

const props: SVGProps<SVGSVGElement> = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconPlan() {
  return (
    <svg {...props}>
      <rect x="6" y="5" width="20" height="22" rx="3" />
      <line x1="10" y1="11" x2="22" y2="11" />
      <line x1="10" y1="16" x2="20" y2="16" />
      <line x1="10" y1="21" x2="18" y2="21" />
    </svg>
  );
}

export function IconFlag() {
  return (
    <svg {...props}>
      <line x1="9" y1="28" x2="9" y2="5" />
      <path d="M9 7 L24 11 L9 16 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTrophy() {
  return (
    <svg {...props}>
      <path d="M9 5 H23 V12 A7 7 0 0 1 9 12 Z" />
      <path d="M9 8 H5 A2 2 0 0 0 5 12 Q5 14 9 14" />
      <path d="M23 8 H27 A2 2 0 0 1 27 12 Q27 14 23 14" />
      <line x1="16" y1="19" x2="16" y2="23" />
      <line x1="12" y1="27" x2="20" y2="27" />
      <line x1="13" y1="23" x2="19" y2="23" />
    </svg>
  );
}

export function IconVideo() {
  return (
    <svg {...props}>
      <rect x="4" y="9" width="16" height="14" rx="2" />
      <path d="M20 13 L28 9 V23 L20 19 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArc() {
  return (
    <svg {...props}>
      <path d="M4 25 Q16 5 28 25" />
      <circle cx="4" cy="25" r="2" fill="currentColor" />
      <circle cx="28" cy="25" r="2" fill="currentColor" />
      <circle cx="16" cy="11" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconCompass() {
  return (
    <svg {...props}>
      <circle cx="16" cy="16" r="11" />
      <path d="M12 20 L18 12 L20 20 L14 12 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPlatform() {
  return (
    <svg {...props}>
      <rect x="4" y="6" width="24" height="16" rx="2" />
      <line x1="4" y1="11" x2="28" y2="11" />
      <circle cx="7.5" cy="8.5" r="0.6" fill="currentColor" />
      <line x1="10" y1="16" x2="22" y2="16" />
      <line x1="10" y1="19" x2="18" y2="19" />
      <line x1="13" y1="26" x2="19" y2="26" />
      <line x1="16" y1="22" x2="16" y2="26" />
    </svg>
  );
}

export function IconScope() {
  return (
    <svg {...props}>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="16" y1="26" x2="16" y2="30" />
      <line x1="2" y1="16" x2="6" y2="16" />
      <line x1="26" y1="16" x2="30" y2="16" />
    </svg>
  );
}

export const ICONS = {
  plan: IconPlan,
  flag: IconFlag,
  trophy: IconTrophy,
  video: IconVideo,
  arc: IconArc,
  compass: IconCompass,
  platform: IconPlatform,
  scope: IconScope,
} as const;

export type IconKey = keyof typeof ICONS;
