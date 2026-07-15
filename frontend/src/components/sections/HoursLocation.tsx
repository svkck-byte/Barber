"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { Reveal } from "@/components/motion/Reveal";
import { ClockIcon, MapPinIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { motionTokens } from "@/lib/motion/tokens";

const mapsQuery = encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`,
);

/** Öffnungszeiten & Standort — Karten-Platzhalter statt externem Embed. */
export function HoursLocation() {
  return (
    <section id="kontakt" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Besuch uns"
          title="Öffnungszeiten & Standort"
          description="Ohne Termin? Komm einfach vorbei — oder sichere dir deinen Platz per WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Öffnungszeiten */}
          <Reveal className="h-full">
            <GradientBorder className="h-full" innerClassName="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <ClockIcon size={22} />
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                  Öffnungszeiten
                </h3>
              </div>
              <dl>
                {site.hours.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line/60 py-3.5 last:border-0"
                  >
                    <dt className="font-medium text-ink">{row.label}</dt>
                    <dd
                      className={
                        row.time === "Geschlossen"
                          ? "text-muted"
                          : "font-semibold tabular-nums text-accent"
                      }
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-muted">
                Termine nach Vereinbarung — auf Anfrage auch außerhalb der
                Öffnungszeiten.
              </p>
            </GradientBorder>
          </Reveal>

          {/* Standort / Karten-Platzhalter */}
          <Reveal className="h-full" delay={motionTokens.stagger.items}>
            {/* TODO: Bei Bedarf echtes Karten-Embed (z. B. Google Maps iframe)
                einsetzen — Datenschutzhinweis in der Datenschutzerklärung
                ist dafür bereits vorbereitet. */}
            <div className="relative flex h-full min-h-72 flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface p-8 text-center">
              {/* Dezentes Raster als Karten-Andeutung */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px]"
              />
              <div className="relative">
                <span className="glow-gold mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPinIcon size={26} />
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                  {site.name}
                </h3>
                <address className="mt-3 text-base not-italic leading-relaxed text-muted">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
                >
                  Route planen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
