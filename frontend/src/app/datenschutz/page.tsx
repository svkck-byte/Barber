import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Haval Barber.",
  robots: { index: false },
};

/**
 * Datenschutzerklärung — DSGVO-Platzhalterstruktur.
 * TODO: Alle [TODO]-Felder füllen und die Erklärung vor dem Launch
 * datenschutzrechtlich prüfen lassen (z. B. via Generator + Anwalt).
 */
export default function DatenschutzPage() {
  return (
    <main
      id="main"
      className="mx-auto w-full max-w-2xl px-4 pb-24 pt-32 sm:px-6"
    >
      <h1 className="font-display text-4xl font-semibold uppercase tracking-wide text-ink md:text-5xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-ink">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            [TODO: Name des Inhabers], Haval Barber
            <br />
            Musterstraße 12, 44135 Dortmund [TODO: echte Adresse]
            <br />
            E-Mail: info@haval-barber.de [TODO: echte E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2>2. Hosting und Server-Logfiles</h2>
          <p className="mt-3">
            Diese Website wird bei [TODO: Hosting-Anbieter, z. B. Vercel Inc.
            / IONOS] gehostet. Beim Aufruf der Seiten werden automatisch
            Informationen (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene
            Seite, Browsertyp) in Server-Logfiles gespeichert. Die
            Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der sicheren Bereitstellung der
            Website). [TODO: Auftragsverarbeitungsvertrag mit dem Hoster
            abschließen und Anbieter hier korrekt benennen.]
          </p>
        </section>

        <section>
          <h2>3. Kontaktaufnahme per WhatsApp und Telefon</h2>
          <p className="mt-3">
            Zur Terminvereinbarung bieten wir die Kontaktaufnahme per
            WhatsApp und Telefon an. Wenn Sie uns über WhatsApp
            kontaktieren, werden Ihre Daten (Telefonnummer, Profilname,
            Nachrichteninhalt) durch WhatsApp Ireland Ltd. verarbeitet;
            dabei können Daten in Drittländer (u. a. USA) übertragen werden.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines
            Vertragsverhältnisses). Weitere Informationen finden Sie in der
            Datenschutzerklärung von WhatsApp.
          </p>
        </section>

        <section>
          <h2>4. Externe Verlinkungen</h2>
          <p className="mt-3">
            Unsere Website verlinkt auf externe Dienste (Instagram, Google
            Maps zur Routenplanung). Beim Klick auf diese Links verlassen
            Sie unsere Website; es gelten die Datenschutzbestimmungen des
            jeweiligen Anbieters. Es werden keine externen Inhalte
            automatisch auf unserer Seite eingebunden. [TODO: Diesen
            Abschnitt anpassen, falls später ein Karten-Embed oder
            Social-Media-Widget integriert wird.]
          </p>
        </section>

        <section>
          <h2>5. Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website verwendet keine Cookies zu Analyse- oder
            Marketingzwecken und kein Tracking. [TODO: Anpassen, falls
            später Analyse-Tools eingesetzt werden — dann Einwilligung über
            ein Consent-Banner einholen.]
          </p>
        </section>

        <section>
          <h2>6. Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten: Recht auf Auskunft
            (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
            (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18
            DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch
            gegen die Verarbeitung (Art. 21 DSGVO). Zur Ausübung Ihrer
            Rechte genügt eine formlose Mitteilung an die oben genannten
            Kontaktdaten.
          </p>
        </section>

        <section>
          <h2>7. Beschwerderecht</h2>
          <p className="mt-3">
            Ihnen steht ein Beschwerderecht bei einer
            Datenschutz-Aufsichtsbehörde zu. Zuständig ist [TODO: zuständige
            Landesdatenschutzbehörde eintragen, z. B. LDI NRW].
          </p>
        </section>

        <section>
          <h2>8. Stand</h2>
          <p className="mt-3">
            Stand dieser Datenschutzerklärung: [TODO: Datum eintragen]
          </p>
        </section>
      </div>
    </main>
  );
}
