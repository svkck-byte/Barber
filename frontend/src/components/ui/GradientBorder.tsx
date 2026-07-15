"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cx } from "@/lib/cx";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";

type GradientBorderProps = {
  children: ReactNode;
  className?: string;
  /** Klassen für die innere Surface (Padding etc.) */
  innerClassName?: string;
  /** Wandernder Gold-Schimmer auf der Border */
  animated?: boolean;
  /** Amber-Glow um das Element */
  glow?: boolean;
  /** Border „zündet" erst, wenn das Element in den Viewport kommt */
  igniteOnView?: boolean;
  /** Verzögerung fürs Zünden (Sekunden) */
  igniteDelay?: number;
};

/**
 * Gold-Neon-Border: 1px-Gradient-Rahmen (Gold→Bernstein) um eine dunkle
 * Surface. Der Gradient liegt als eigene Ebene hinter dem Inhalt, damit
 * er unabhängig ein-/ausgeblendet werden kann („Ignite"-Effekt).
 */
export function GradientBorder({
  children,
  className,
  innerClassName,
  animated = false,
  glow = false,
  igniteOnView = false,
  igniteDelay = 0,
}: GradientBorderProps) {
  const reduced = useReducedMotionGate();

  return (
    <div
      className={cx(
        "relative rounded-2xl bg-line p-px",
        glow && "glow-gold",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className={cx(
          "absolute inset-0 rounded-[inherit] gradient-gold",
          animated && "animate-gold-pan",
        )}
        initial={{ opacity: igniteOnView ? 0 : 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: motionTokens.viewport.margin }}
        transition={{
          duration: reduced
            ? motionTokens.duration.fast
            : motionTokens.duration.slow,
          ease: motionTokens.easing.smooth,
          delay: reduced ? 0 : igniteDelay,
        }}
      />
      <div
        className={cx(
          "relative h-full rounded-[calc(1rem-1px)] bg-surface",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
