"use client";

import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/site";

/** Kurze USP-/Zahlen-Leiste mit Number-Countern direkt unter dem Hero. */
export function TrustBand() {
  return (
    <section aria-label="Kennzahlen" className="border-y border-line bg-surface/40">
      <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <RevealItem key={stat.label} className="text-center">
            <p className="text-gradient-gold font-display text-4xl font-semibold md:text-5xl">
              <Counter
                to={stat.value}
                decimals={stat.decimals ?? 0}
                suffix={stat.suffix ?? ""}
              />
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
