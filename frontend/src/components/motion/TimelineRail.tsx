"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionGate } from "@/lib/motion/gate";

/**
 * Die vertikale Gold-Timeline (memorable detail): Sie setzt die im Hero
 * gezeichnete Linie fort und füllt sich scroll-linked von oben nach unten,
 * während sie alle Sektionen räumlich verbindet. Ein glühender Punkt
 * markiert die aktuelle Position.
 *
 * Bei `prefers-reduced-motion`: statische, voll sichtbare Linie.
 * Auf kleinen Screens ausgeblendet (rein dekorativ).
 */
export function TimelineRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionGate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end end"],
  });

  const dotTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-5 hidden w-px lg:block xl:left-10"
      >
        {/* Basis-Linie */}
        <div className="absolute inset-0 bg-line" />
        {/* Gold-Füllung, scroll-linked */}
        <motion.div
          className="gradient-gold-vertical absolute inset-0 origin-top"
          style={reduced ? undefined : { scaleY: scrollYProgress }}
        />
        {/* Glühender Punkt an der Scroll-Position */}
        {!reduced && (
          <motion.div
            className="glow-gold-strong absolute -left-[3.5px] h-2 w-2 rounded-full bg-accent"
            style={{ top: dotTop }}
          />
        )}
      </div>
      {children}
    </div>
  );
}
