"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { pricingPackages, whatsappLink, type PricingPackage } from "@/lib/site";
import { motionTokens, springs } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";
import { cx } from "@/lib/cx";

function PackageCard({ pkg }: { pkg: PricingPackage }) {
  const reduced = useReducedMotionGate();

  const inner = (
    <div className="flex h-full flex-col p-6 md:p-8">
      {pkg.popular && (
        <p className="gradient-gold mb-4 self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1c1206]">
          Beliebt
        </p>
      )}
      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
        {pkg.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{pkg.description}</p>
      <p className="mt-5 font-display text-5xl font-semibold text-gradient-gold">
        {pkg.price}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-ink">
            <CheckIcon size={16} className="shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          "mt-8 inline-flex min-h-12 items-center justify-center rounded-full text-sm font-semibold",
          pkg.popular
            ? "gradient-gold text-[#1c1206]"
            : "border border-line text-ink transition-colors hover:border-accent/60",
        )}
      >
        Termin buchen
      </a>
    </div>
  );

  return (
    <motion.div
      className="h-full"
      whileHover={reduced ? undefined : { y: -motionTokens.distance.xs }}
      transition={springs.snappy}
    >
      {pkg.popular ? (
        <GradientBorder animated glow className="h-full">
          {inner}
        </GradientBorder>
      ) : (
        <div className="h-full rounded-2xl border border-line bg-surface">
          {inner}
        </div>
      )}
    </motion.div>
  );
}

/** Preis-Pakete — das beliebteste Paket bekommt den animierten Neon-Rahmen. */
export function Pricing() {
  return (
    <section id="preise" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Preise"
          title="Faire Pakete, keine Überraschungen"
          description="Alle Preise inklusive Beratung und Styling. Einzelleistungen findest du oben bei den Leistungen."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <RevealItem key={pkg.name} className="h-full">
              <PackageCard pkg={pkg} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
