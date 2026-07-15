"use client";

import type { ComponentType } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import {
  CrownIcon,
  RazorIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { serviceCategories, type ServiceCategory } from "@/lib/site";
import { motionTokens } from "@/lib/motion/tokens";

const CATEGORY_ICONS: Record<
  ServiceCategory["icon"],
  ComponentType<{ size?: number; className?: string }>
> = {
  cut: ScissorsIcon,
  beard: RazorIcon,
  combo: CrownIcon,
  extras: SparklesIcon,
};

/** Kategorisierte Leistungs-Cards — die Gold-Border „zündet" bei In-View. */
export function Services() {
  return (
    <section id="leistungen" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leistungen"
          title="Handwerk, klar sortiert"
          description="Vom präzisen Fade bis zur klassischen Nassrasur — alles aus einer Hand, alles mit Zeit und Sorgfalt."
        />

        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.icon];
            return (
              <RevealItem key={category.id} className="h-full">
                <GradientBorder
                  igniteOnView
                  igniteDelay={index * motionTokens.stagger.items}
                  className="h-full"
                  innerClassName="p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                      {category.title}
                    </h3>
                  </div>
                  <ul>
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="flex items-baseline justify-between gap-4 border-b border-line/60 py-3.5 last:border-0"
                      >
                        <div>
                          <p className="font-medium text-ink">{service.name}</p>
                          <p className="mt-0.5 text-sm text-muted">
                            {service.description}
                          </p>
                        </div>
                        <p className="whitespace-nowrap font-semibold tabular-nums text-accent">
                          {service.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </GradientBorder>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
