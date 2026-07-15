"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ScissorsIcon } from "@/components/ui/icons";
import { galleryItems } from "@/lib/site";
import { cx } from "@/lib/cx";

/**
 * Galerie mit CSS-Gradient-Platzhaltern (keine externen Assets).
 * TODO: Durch echte Fotos ersetzen — Bilder nach `public/gallery/` legen
 * und die <div>-Platzhalter gegen <Image>-Komponenten (next/image) tauschen.
 */
export function Gallery() {
  return (
    <section id="galerie" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galerie"
          title="Ergebnisse, die für sich sprechen"
          description="Ein Ausschnitt unserer Arbeit — mehr davon täglich auf Instagram."
        />

        <RevealGroup className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems.map((item) => (
            <RevealItem key={item.label}>
              <figure className="group relative aspect-square overflow-hidden rounded-xl border border-line">
                {/* Platzhalter-Fläche (TODO: echtes Foto) */}
                <div
                  role="img"
                  aria-label={`Platzhalter-Bild: ${item.label}`}
                  className={cx(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                    item.tone,
                  )}
                >
                  <ScissorsIcon
                    size={48}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/20"
                  />
                </div>
                {/* Verlauf für Label-Lesbarkeit */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/90 to-transparent"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 text-xs font-medium text-ink">
                  {item.label}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
