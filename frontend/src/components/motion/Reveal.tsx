"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Verzögerung in Sekunden (z. B. für manuelles Staggern) */
  delay?: number;
  /** Transform-Distanz aus den Motion-Tokens */
  distance?: keyof typeof motionTokens.distance;
};

/**
 * Standard-Scroll-Reveal: blendet Inhalte einmalig ein, sobald sie in den
 * Viewport kommen. Bei `prefers-reduced-motion` nur ein kurzer Opacity-Fade.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = "lg",
}: RevealProps) {
  const reduced = useReducedMotionGate();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : motionTokens.distance[distance] }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: motionTokens.viewport.margin }}
      transition={{
        duration: reduced
          ? motionTokens.duration.fast
          : motionTokens.duration.slow,
        ease: motionTokens.easing.smooth,
        delay: reduced ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.items,
      delayChildren: motionTokens.stagger.delayChildren,
    },
  },
};

/**
 * Container für gestaffelte Reveals — Kinder als <RevealItem> rendern.
 */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: motionTokens.viewport.margin }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotionGate();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : motionTokens.distance.md },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduced
              ? motionTokens.duration.fast
              : motionTokens.duration.normal,
            ease: motionTokens.easing.smooth,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
