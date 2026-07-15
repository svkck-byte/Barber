"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Image from "next/image";
import { galleryItems } from "@/lib/site";

/**
 * Galerie mit echten Fotos aus dem Shop (public/gallery/).
 */
export function Gallery() {
  return (
    <section id="galerie" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galerie"
          title="Ergebnisse, die für sich sprechen"
          description="Ein Ausschnitt unserer Arbeit — mehr davon täglich auf Instagram und Facebook."
        />

        <RevealGroup className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems.map((item) => (
            <RevealItem key={item.label}>
              <figure
                className="group relative aspect-square overflow-hidden rounded-xl border border-line"
                data-testid={`gallery-item-${item.src.split("/").pop()?.replace(".jpg", "")}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
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
