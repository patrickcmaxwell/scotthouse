import type { Chapter } from "@/components/next-chapter";

export const CHAPTERS: Record<string, Chapter> = {
  home: {
    no: "02",
    eyebrow: "Chapter Two",
    title: "Meet the coach.",
    body: "Two decades, every level of the game — Director of Instruction at Westwood and one of the Golf Digest Best Teachers in Texas.",
    img: "/images/about-scott.jpg",
    href: "/about",
  },
  about: {
    no: "03",
    eyebrow: "Chapter Three",
    title: "Step into private lessons.",
    body: "One-on-one coaching tailored to your swing, experience level, and goals. Where most players start.",
    img: "/images/lesson-1.jpeg",
    href: "/private-lessons",
  },
  privateLessons: {
    no: "04",
    eyebrow: "Chapter Four",
    title: "Junior players take the next step.",
    body: "A structured development environment for technical, mental, and competitive growth — from first tournament to last.",
    img: "/images/junior-1.jpg",
    href: "/junior-golf",
  },
  juniorGolf: {
    no: "05",
    eyebrow: "Chapter Five",
    title: "Enter CAMPUS Academy.",
    body: "Elite junior development for the collegiate path — coaching, competition, and recruiting under one roof.",
    img: "/images/campus-feature.jpg",
    href: "/campus-academy",
  },
  campus: {
    no: "06",
    eyebrow: "Final Chapter",
    title: "Start the conversation.",
    body: "Tell Scott where you are and where you want to go. He responds to every inquiry personally.",
    img: "/images/coaching-4.jpg",
    href: "/contact",
  },
};
