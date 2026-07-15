"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { StarIcon } from "@/components/ui/icons";
import { reviews, site } from "@/lib/site";

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

/** Kundenstimmen — echte Empfehlungen von unserer Facebook-Seite. */
export function Reviews() {
  return (
    <section id="bewertungen" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Bewertungen"
          title="Was unsere Kunden sagen"
          description="100 % Weiterempfehlung auf Facebook — hier ein paar Stimmen."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <RevealItem key={review.name} className="h-full">
              <figure
                className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6"
                data-testid={`review-${review.name.replace(/[^a-zA-Z]/g, "")}`}
              >
                <Stars rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  „{review.text}“
                </blockquote>
                <figcaption className="mt-4 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-semibold text-muted">{review.name}</span>
                  {review.date && (
                    <span className="text-xs text-muted/70">{review.date}</span>
                  )}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-sm text-muted">
          Quelle:{" "}
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline-offset-4 hover:underline"
            data-testid="reviews-facebook-link"
          >
            Facebook-Bewertungen
          </a>{" "}
          — 5 von 5 Empfehlungen.
        </p>
      </div>
    </section>
  );
}
