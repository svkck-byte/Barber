"use client";

/**
 * Motion-Gate: Zentrale Entscheidung, ob animiert werden darf.
 * `prefers-reduced-motion` hat immer Vorrang; Low-End-Geräte
 * bekommen nur essenzielle Animationen.
 */

import { useReducedMotion } from "motion/react";

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function isLowEndDevice(): boolean {
  return (
    typeof navigator !== "undefined" && navigator.hardwareConcurrency <= 4
  );
}

export function shouldAnimate({ essential = false } = {}): boolean {
  if (prefersReducedMotion()) return false;
  if (!essential && isLowEndDevice()) return false;
  return true;
}

/**
 * Hook-Variante für Komponenten: reagiert live auf System-Einstellung.
 * SSR-sicher — auf dem Server (und im ersten Client-Render) `false`,
 * dadurch identisches Markup und keine Hydration-Warnung.
 */
export function useReducedMotionGate(): boolean {
  const reduced = useReducedMotion();
  return reduced ?? false;
}
