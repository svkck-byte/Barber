import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { InstagramIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

/** Footer mit Kontakt, Öffnungszeiten, Social & Rechtlichem (Server-Komponente). */
export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Marke */}
        <div>
          <p className="font-display text-xl font-semibold uppercase tracking-wider">
            <span className="text-ink">Haval</span>{" "}
            <span className="text-gradient-gold">Barber</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline} Dein Barbershop in {site.address.city}.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Haval Barber auf Instagram"
            className="mt-4 inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-ink"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPinIcon size={18} className="mt-0.5 shrink-0 text-accent" />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </address>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon size={18} className="shrink-0 text-accent" />
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-ink"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-gold-soft"
              >
                Termin per WhatsApp →
              </a>
            </li>
          </ul>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Öffnungszeiten
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {site.hours.map((row) => (
              <li key={row.label} className="flex justify-between gap-4">
                <span>{row.label}</span>
                <span className="tabular-nums">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Rechtliches
          </h2>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            <li>
              <Link
                href="/impressum"
                className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
