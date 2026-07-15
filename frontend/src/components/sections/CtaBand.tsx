"use client";

import { Reveal } from "@/components/motion/Reveal";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { PhoneButton, WhatsAppButton } from "@/components/ui/CtaButtons";

/** Abschließendes CTA-Band mit animiertem Neon-Rahmen und Glow. */
export function CtaBand() {
  return (
    <section aria-label="Termin vereinbaren" className="px-4 pb-24 sm:px-6 md:pb-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <GradientBorder animated glow innerClassName="px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-ink md:text-5xl">
              Bereit für den{" "}
              <span className="text-gradient-gold">nächsten Schnitt?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Schreib uns kurz per WhatsApp oder ruf direkt an — wir finden
              einen Termin, der passt.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
              <PhoneButton size="lg" className="w-full sm:w-auto" />
            </div>
          </GradientBorder>
        </Reveal>
      </div>
    </section>
  );
}
