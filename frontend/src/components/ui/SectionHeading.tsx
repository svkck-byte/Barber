"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/**
 * Konsistente Sektions-Überschrift: Gold-Eyebrow, Display-Titel, optionaler
 * Beschreibungstext — mit Standard-Reveal.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cx(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
