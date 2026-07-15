"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";
import { PhoneButton, WhatsAppButton } from "@/components/ui/CtaButtons";
import { ChevronDownIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Wortmarke: Char-für-Char-Reveal                                     */
/* ------------------------------------------------------------------ */

const WORDS = ["HAVAL", "BARBER"] as const;

const charContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.chars,
      delayChildren: motionTokens.stagger.delayChildren,
    },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: motionTokens.distance.xl },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.smooth,
    },
  },
};

function Wordmark({ reduced }: { reduced: boolean }) {
  const className =
    "font-display text-6xl font-semibold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl";

  if (reduced) {
    // Ohne Animation: Inhalt sofort vollständig sichtbar
    return (
      <h1 className={className}>
        <span className="text-ink">HAVAL</span>{" "}
        <span className="text-gradient-gold">BARBER</span>
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      aria-label="Haval Barber"
      variants={charContainer}
      initial="hidden"
      animate="visible"
    >
      {WORDS.map((word, w) => (
        <span
          key={word}
          aria-hidden
          className={
            w === 0
              ? "inline-block whitespace-nowrap text-ink"
              : "inline-block whitespace-nowrap text-gradient-gold"
          }
        >
          {w > 0 && <span className="inline-block">&nbsp;</span>}
          {word.split("").map((char, c) => (
            <motion.span
              key={`${w}-${c}`}
              className="inline-block"
              variants={charVariant}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

/* ------------------------------------------------------------------ */
/* Stilisiertes Rasiermesser: SVG-Path-Draw                            */
/* ------------------------------------------------------------------ */

const RAZOR_PATHS = [
  {
    // Klinge
    d: "M28 118 L262 118 C288 118 300 106 309 91 L343 38 C348 29 341 22 332 24 L88 30 C54 33 30 58 28 86 Z",
    delay: 0.3,
  },
  {
    // Griff
    d: "M312 84 L512 132 C532 137 528 158 509 153 L302 104",
    delay: 0.8,
  },
  {
    // Schliff-Linie auf der Klinge
    d: "M58 74 L294 66",
    delay: 1.3,
  },
] as const;

function RazorDraw({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 560 180"
      className="w-72 max-w-full sm:w-96 md:w-[460px]"
      role="img"
      aria-label="Stilisiertes Rasiermesser aus einer goldenen Linie"
    >
      <defs>
        <linearGradient id="gold-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FDE68A" />
          <stop offset="0.5" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#B45309" />
        </linearGradient>
      </defs>
      {RAZOR_PATHS.map(({ d, delay }) =>
        reduced ? (
          <path
            key={d}
            d={d}
            stroke="url(#gold-stroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ) : (
          <motion.path
            key={d}
            d={d}
            stroke="url(#gold-stroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: motionTokens.duration.draw,
                ease: motionTokens.easing.smooth,
                delay,
              },
              opacity: { duration: motionTokens.duration.fast, delay },
            }}
          />
        ),
      )}
      {/* Gelenk-Niete */}
      {reduced ? (
        <circle cx="307" cy="94" r="5" fill="#F59E0B" />
      ) : (
        <motion.circle
          cx="307"
          cy="94"
          r="5"
          fill="#F59E0B"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "307px 94px" }}
          transition={{
            duration: motionTokens.duration.normal,
            ease: motionTokens.easing.bounce,
            delay: 1.0,
          }}
        />
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionGate();

  // Scroll-linked Exit: Hero blendet aus & skaliert leicht, während die
  // Timeline übernimmt (räumliche Kontinuität).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, motionTokens.scale.subtle],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, motionTokens.distance.xl]);

  return (
    <section
      ref={ref}
      id="start"
      className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-36"
    >
      {/* Gold-Radial-Glow */}
      <div
        aria-hidden
        className="animate-glow-breathe absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,rgba(245,158,11,0.14),transparent_70%)]"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={reduced ? undefined : { opacity, scale, y }}
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
          Barbershop · {site.address.city}
        </p>

        <Wordmark reduced={reduced} />

        <div className="my-8 md:my-10">
          <RazorDraw reduced={reduced} />
        </div>

        <p className="max-w-md text-lg leading-relaxed text-muted md:text-xl">
          {site.tagline} Präzise Schnitte, klassische Rasur und Bartpflege —
          Termin in 30 Sekunden.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <WhatsAppButton size="lg" className="w-full sm:w-auto" />
          <PhoneButton size="lg" className="w-full sm:w-auto" />
        </div>
      </motion.div>

      {/* Scroll-Indikator: Die Gold-Linie beginnt hier und wird unterhalb
          des Heros zur durchgehenden Timeline. */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <ChevronDownIcon size={16} className="text-accent" />
        <div className="gradient-gold-vertical h-14 w-px" />
      </div>
    </section>
  );
}
