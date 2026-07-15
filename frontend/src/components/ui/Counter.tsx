"use client";

import { useEffect, useRef } from "react";
import { animate } from "motion/react";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";
import { useInViewOnce } from "@/lib/motion/useInViewOnce";

type CounterProps = {
  to: number;
  decimals?: number;
  suffix?: string;
};

function format(value: number, decimals: number): string {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Number-Counter: zählt einmalig hoch, sobald er in den Viewport kommt.
 * Bei `prefers-reduced-motion` steht der Endwert sofort da.
 * SSR-sicher: rendert von Anfang an den Endwert (kein Layout-Shift,
 * keine Hydration-Abweichung) und startet die Zählung erst clientseitig.
 */
export function Counter({ to, decimals = 0, suffix = "" }: CounterProps) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const valueRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotionGate();

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration: motionTokens.duration.crawl,
      ease: motionTokens.easing.smooth,
      onUpdate: (v) => {
        if (valueRef.current) {
          valueRef.current.textContent = format(v, decimals);
        }
      },
    });
    return () => controls.stop();
  }, [inView, reduced, to, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      <span ref={valueRef}>{format(to, decimals)}</span>
      {suffix}
    </span>
  );
}
