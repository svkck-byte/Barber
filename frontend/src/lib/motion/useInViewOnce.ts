"use client";

/**
 * Einmaliger In-View-Trigger (z. B. für Number-Counter):
 * feuert genau einmal, sobald das Element den Viewport erreicht.
 */

import { useRef } from "react";
import { useInView } from "motion/react";

export function useInViewOnce<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}
