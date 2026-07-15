"use client";

import { motion } from "motion/react";
import { cx } from "@/lib/cx";
import { site, whatsappLink } from "@/lib/site";
import { motionTokens, springs } from "@/lib/motion/tokens";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

type Size = "md" | "lg";

const sizeClasses: Record<Size, string> = {
  // Touch-Target ≥ 44px ist über min-h garantiert
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-14 px-8 text-base",
};

/**
 * Primärer CTA: Termin per WhatsApp — Gold-Gradient mit dunkler Schrift
 * (Kontrast > 8:1 auf Amber).
 */
export function WhatsAppButton({
  size = "md",
  className,
}: {
  size?: Size;
  className?: string;
}) {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: motionTokens.scale.pop }}
      whileTap={{ scale: motionTokens.scale.press }}
      transition={springs.snappy}
      className={cx(
        "gradient-gold glow-gold inline-flex items-center justify-center gap-2.5 rounded-full font-semibold text-[#1c1206]",
        sizeClasses[size],
        className,
      )}
    >
      <WhatsAppIcon size={size === "lg" ? 22 : 20} />
      Termin per WhatsApp
    </motion.a>
  );
}

/** Sekundärer CTA: Anrufen — Outline auf dunkler Surface. */
export function PhoneButton({
  size = "md",
  className,
}: {
  size?: Size;
  className?: string;
}) {
  return (
    <motion.a
      href={site.phoneHref}
      whileHover={{ scale: motionTokens.scale.pop }}
      whileTap={{ scale: motionTokens.scale.press }}
      transition={springs.snappy}
      className={cx(
        "inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-surface/60 font-semibold text-ink backdrop-blur transition-colors hover:border-accent/60",
        sizeClasses[size],
        className,
      )}
    >
      <PhoneIcon size={size === "lg" ? 22 : 20} />
      <span>
        Anrufen{" "}
        <span className="hidden text-muted sm:inline">
          · {site.phoneDisplay}
        </span>
      </span>
    </motion.a>
  );
}
