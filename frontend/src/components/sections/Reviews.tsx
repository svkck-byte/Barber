"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { StarIcon } from "@/components/ui/icons";
import { reviews } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1 text-accent"
      role="img"
      aria-label={`${rating} von 5 Sternen`}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} size={16} />
      ))}
    </div>
  );
}

/** Kundenstimmen (Platzhalter). TODO: Durch echte Google-Bewertungen ersetzen. */
export function Reviews() {
  return (
    <section id="bewertungen" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Bewertungen"
          title="Was unsere Kunden sagen"
          description="4,9 von 5 Sternen bei über 320 Google-Bewertungen."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <RevealItem key={review.name} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <Stars rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  „{review.text}“
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted">
                  {review.name}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
