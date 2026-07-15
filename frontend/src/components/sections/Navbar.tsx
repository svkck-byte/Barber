"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cx } from "@/lib/cx";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotionGate } from "@/lib/motion/gate";
import { whatsappLink } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#preise", label: "Preise" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotionGate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/#start"
          aria-label="Haval Barber – zur Startsektion"
          className="flex items-center"
          onClick={() => setOpen(false)}
          data-testid="navbar-logo"
        >
          <span
            role="img"
            aria-hidden
            className="logo-gold h-14 transition-transform duration-300 hover:scale-105"
          />
          <span className="sr-only">Haval Barber</span>
        </Link>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex min-h-11 items-center px-3 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:text-ink"
            >
              {link.label}
              <span
                aria-hidden
                className="gradient-gold absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        {/* Desktop-CTA */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-gold hidden min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-[#1c1206] md:inline-flex"
        >
          <WhatsAppIcon size={18} />
          Termin
        </a>

        {/* Mobile-Burger */}
        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            id="mobile-menu"
            aria-label="Mobile Navigation"
            className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: reduced ? 0 : -motionTokens.distance.sm }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -motionTokens.distance.sm }}
            transition={{
              duration: motionTokens.duration.fast,
              ease: motionTokens.easing.smooth,
            }}
          >
            <ul className="px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-ink hover:bg-surface"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-line px-6 py-5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#1c1206]"
              >
                <WhatsAppIcon size={20} />
                Termin per WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm font-semibold text-ink"
              >
                <PhoneIcon size={20} />
                Anrufen
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
