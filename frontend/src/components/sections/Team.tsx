"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { team } from "@/lib/site";

/**
 * Team-Karten mit Initialen-Avataren als Platzhalter.
 * TODO: Echte Portraitfotos ergänzen (public/team/*.jpg + next/image).
 */
export function Team() {
  return (
    <section id="team" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Team"
          title="Die Hände hinter dem Schnitt"
          description="Drei Barber, ein Anspruch: Du stehst auf und es sitzt."
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <RevealItem key={member.name} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-surface p-6 text-center md:p-8">
                {/* Avatar-Platzhalter mit Gold-Ring */}
                <div
                  role="img"
                  aria-label={`Platzhalter-Portrait von ${member.name}`}
                  className="gradient-gold mx-auto mb-5 flex size-24 items-center justify-center rounded-full p-px"
                >
                  <span className="flex size-full items-center justify-center rounded-full bg-surface-2">
                    <span className="font-display text-2xl font-semibold text-gradient-gold">
                      {member.initials}
                    </span>
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
