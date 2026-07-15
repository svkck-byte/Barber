"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";
import { PhoneButton, WhatsAppButton } from "@/components/ui/CtaButtons";
import { ChevronDownIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Firmenlogo: sanfter Reveal mit Gold-Glow                            */
/* ------------------------------------------------------------------ */

function LogoReveal({ reduced }: { reduced: boolean }) {
  const boxClassName =
    "logo-gold h-[46svh] max-h-[430px] min-h-[280px] select-none drop-shadow-[0_0_45px_rgba(245,158,11,0.35)]";

  if (reduced) {
    return (
      <div
        role="img"
        aria-label="Haval Barber – Haircuts & Shaves"
        className={boxClassName}
        data-testid="hero-logo"
      />
    );
  }

  return (
    <motion.div
      role="img"
      aria-label="Haval Barber – Haircuts & Shaves"
      className={boxClassName}
      data-testid="hero-logo"
      initial={{ opacity: 0, y: motionTokens.distance.xl, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: motionTokens.duration.crawl,
        ease: motionTokens.easing.smooth,
        delay: motionTokens.stagger.delayChildren,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionGate();

  // Scroll-linked Exit: Hero blendet aus & skaliert leicht, während die
  // Timeline übernimmt (räumliche Kontinuität).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, motionTokens.scale.subtle],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, motionTokens.distance.xl]);

  return (
    <section
      ref={ref}
      id="start"
      className="grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-36"
    >
      {/* Gold-Radial-Glow */}
      <div
        aria-hidden
        className="animate-glow-breathe absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,rgba(245,158,11,0.14),transparent_70%)]"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={reduced ? undefined : { opacity, scale, y }}
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
          Barbershop · {site.address.city}
        </p>

        <h1 className="sr-only">Haval Barber – Haircuts &amp; Shaves</h1>

        <LogoReveal reduced={reduced} />

        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted md:text-xl">
          {site.tagline} Präzise Schnitte, klassische Rasur und Bartpflege —
          Termin in 30 Sekunden.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <WhatsAppButton size="lg" className="w-full sm:w-auto" />
          <PhoneButton size="lg" className="w-full sm:w-auto" />
        </div>
      </motion.div>

      {/* Scroll-Indikator: Die Gold-Linie beginnt hier und wird unterhalb
          des Heros zur durchgehenden Timeline. */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <ChevronDownIcon size={16} className="text-accent" />
        <div className="gradient-gold-vertical h-14 w-px" />
      </div>
    </section>
  );
}
