import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Haval Barber.",
  robots: { index: false },
};

/**
 * Impressum — Platzhalterstruktur nach § 5 DDG.
 * TODO: Alle [TODO]-Felder mit echten Betreiberdaten füllen und
 * anwaltlich prüfen lassen.
 */
export default function ImpressumPage() {
  return (
    <main
      id="main"
      className="mx-auto w-full max-w-2xl px-4 pb-24 pt-32 sm:px-6"
    >
      <h1 className="font-display text-4xl font-semibold uppercase tracking-wide text-ink md:text-5xl">
        Impressum
      </h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-ink">
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            Haval Barber
            <br />
            [TODO: Vollständiger Name des Inhabers]
            <br />
            Musterstraße 12 [TODO: echte Adresse]
            <br />
            44135 Dortmund
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p className="mt-3">
            Telefon: +49 231 XXXXXXX [TODO: echte Telefonnummer]
            <br />
            E-Mail: info@haval-barber.de [TODO: echte E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            [TODO: USt-IdNr. eintragen — oder Abschnitt entfernen, falls nicht
            vorhanden]
          </p>
        </section>

        <section>
          <h2>Aufsichtsbehörde / Kammer</h2>
          <p className="mt-3">
            [TODO: Zuständige Handwerkskammer eintragen, z. B. Handwerkskammer
            Dortmund. Friseurhandwerk ist zulassungspflichtig — Eintragung in
            die Handwerksrolle angeben.]
          </p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p className="mt-3">
            [TODO: Name und Anschrift der verantwortlichen Person]
          </p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p className="mt-3">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p className="mt-3">
            Unser Angebot enthält Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Für diese fremden
            Inhalte übernehmen wir keine Gewähr; verantwortlich ist stets der
            jeweilige Anbieter oder Betreiber der Seiten.
          </p>
        </section>
      </div>
    </main>
  );
}
