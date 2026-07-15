"use client";

/**
 * Scroll-linked Reveal: Opacity/Y werden direkt an den Scroll-Fortschritt
 * des Elements gekoppelt (keine Re-Renders — MotionValues).
 */

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotionGate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.3],
    [reduced ? 0 : motionTokens.distance.lg, 0],
  );

  return { ref, style: reduced ? { opacity } : { opacity, y } };
}
