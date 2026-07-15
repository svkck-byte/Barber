/**
 * Zentrale Geschäftsdaten für Haval Barber.
 * Alle mit TODO markierten Werte sind Platzhalter und müssen
 * vor dem Launch durch echte Daten ersetzt werden.
 */

export const site = {
  name: "Haval Barber",
  tagline: "Präzision. Stil. Handwerk.",
  description:
    "Haval Barber – dein Barbershop in Dortmund. Präzise Haarschnitte, klassische Rasur mit heißem Handtuch und perfekte Bartkonturen. Termin einfach per WhatsApp oder Telefon.",

  // TODO: Echte Telefonnummer eintragen (Format: +49 und Vorwahl ohne 0)
  phoneDisplay: "+49 231 XXXXXXX",
  phoneHref: "tel:+49XXXXXXXXXX",
  // TODO: Echte WhatsApp-Nummer eintragen (nur Ziffern, mit Ländercode)
  whatsappHref: "https://wa.me/49XXXXXXXXXX",
  whatsappText: "Hallo! Ich möchte gerne einen Termin vereinbaren.",

  // TODO: Echte E-Mail-Adresse eintragen
  email: "info@haval-barber.de",
  // TODO: Echtes Instagram-Profil eintragen
  instagram: "https://instagram.com/havalbarber",

  // TODO: Echte Adresse eintragen
  address: {
    street: "Musterstraße 12",
    zip: "44135",
    city: "Dortmund",
    region: "NRW",
    country: "DE",
  },

  // TODO: Echte Öffnungszeiten eintragen
  hours: [
    { label: "Montag – Freitag", time: "09:00 – 19:00 Uhr" },
    { label: "Samstag", time: "09:00 – 18:00 Uhr" },
    { label: "Sonntag", time: "Geschlossen" },
  ],

  /** Strukturierte Öffnungszeiten für LocalBusiness JSON-LD */
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    { dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
  ],

  // TODO: Echte Domain eintragen, sobald vorhanden
  url: "https://www.haval-barber.de",
} as const;

export function whatsappLink(): string {
  return `${site.whatsappHref}?text=${encodeURIComponent(site.whatsappText)}`;
}

/* ------------------------------------------------------------------ */
/* Leistungen (kategorisiert)                                          */
/* ------------------------------------------------------------------ */

export type Service = {
  name: string;
  description: string;
  price: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: "cut" | "beard" | "combo" | "extras";
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "haarschnitt",
    title: "Haarschnitt",
    icon: "cut",
    services: [
      {
        name: "Klassischer Herrenschnitt",
        description: "Schnitt, Waschen & Styling nach Wunsch",
        price: "24 €",
      },
      {
        name: "Skin Fade / Taper",
        description: "Präziser Übergang, Kontur mit dem Messer",
        price: "28 €",
      },
      {
        name: "Maschinenschnitt",
        description: "Eine Länge, inkl. Kontur",
        price: "18 €",
      },
      {
        name: "Kinderhaarschnitt (bis 12 J.)",
        description: "Geduldig & kindgerecht",
        price: "16 €",
      },
    ],
  },
  {
    id: "bart",
    title: "Bart & Rasur",
    icon: "beard",
    services: [
      {
        name: "Bartschnitt & Kontur",
        description: "Trimmen, Konturieren, Pflegeöl",
        price: "15 €",
      },
      {
        name: "Royal Shave",
        description: "Klassische Nassrasur mit heißem Handtuch",
        price: "25 €",
      },
      {
        name: "Bartfärbung",
        description: "Natürliche Abdeckung grauer Partien",
        price: "ab 20 €",
      },
    ],
  },
  {
    id: "kombi",
    title: "Kombi-Pakete",
    icon: "combo",
    services: [
      {
        name: "Cut & Beard",
        description: "Haarschnitt + Bartschnitt mit Kontur",
        price: "35 €",
      },
      {
        name: "Full Service",
        description: "Cut, Bart, Augenbrauen & Black Mask",
        price: "45 €",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    icon: "extras",
    services: [
      {
        name: "Augenbrauen (Faden)",
        description: "Saubere Form in Minuten",
        price: "8 €",
      },
      {
        name: "Black Mask",
        description: "Tiefenreinigung fürs Gesicht",
        price: "10 €",
      },
      {
        name: "Waschen & Styling",
        description: "Frisch gestylt zwischendurch",
        price: "10 €",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Preis-Pakete                                                        */
/* ------------------------------------------------------------------ */

export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Classic",
    price: "24 €",
    description: "Der Standard — sauber und präzise.",
    features: ["Beratung", "Haarschnitt", "Waschen", "Styling"],
  },
  {
    name: "Cut & Beard",
    price: "35 €",
    description: "Unser beliebtestes Paket.",
    features: [
      "Beratung",
      "Haarschnitt",
      "Bartschnitt & Kontur",
      "Heißes Handtuch",
      "Styling",
    ],
    popular: true,
  },
  {
    name: "Full Service",
    price: "45 €",
    description: "Das komplette Programm.",
    features: [
      "Haarschnitt & Bart",
      "Augenbrauen (Faden)",
      "Black Mask",
      "Kopfmassage",
      "Styling",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Zahlen / Trust                                                      */
/* ------------------------------------------------------------------ */

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Jahre Erfahrung" },
  { value: 8500, suffix: "+", label: "Zufriedene Kunden" },
  { value: 4.9, decimals: 1, label: "Google-Bewertung" },
  { value: 320, suffix: "+", label: "Bewertungen" },
];

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Haval",
    role: "Inhaber · Master Barber",
    bio: "Über 12 Jahre Handwerk. Spezialist für klassische Schnitte und Nassrasur.",
    initials: "HA",
  },
  {
    name: "Deniz",
    role: "Barber",
    bio: "Der Fade-Experte im Team — von Low bis High Skin Fade.",
    initials: "DE",
  },
  {
    name: "Aram",
    role: "Barber",
    bio: "Bart-Spezialist mit ruhiger Hand und Auge fürs Detail.",
    initials: "AR",
  },
];

/* ------------------------------------------------------------------ */
/* Bewertungen (realistische Platzhalter)                              */
/* ------------------------------------------------------------------ */

export type Review = {
  name: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Miguel S.",
    text: "Bester Fade in Dortmund, ohne Diskussion. Haval nimmt sich Zeit und das Ergebnis sitzt jedes Mal.",
    rating: 5,
  },
  {
    name: "Jonas K.",
    text: "Royal Shave mit heißem Handtuch — fühlt sich an wie Kurzurlaub. Absolute Empfehlung.",
    rating: 5,
  },
  {
    name: "Firat D.",
    text: "Termin per WhatsApp gemacht, pünktlich drangekommen, top Beratung. So muss das.",
    rating: 5,
  },
  {
    name: "Lukas B.",
    text: "Mein Sohn (8) geht sonst ungern zum Friseur — hier fühlt er sich wohl. Danke an das Team!",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Galerie-Platzhalter                                                 */
/* TODO: Durch echte Fotos ersetzen (public/gallery/*.jpg + next/image) */
/* ------------------------------------------------------------------ */

export type GalleryItem = {
  label: string;
  /** Tailwind-Klassen für den Gradient-Platzhalter */
  tone: string;
};

export const galleryItems: GalleryItem[] = [
  { label: "Skin Fade mit Kontur", tone: "from-stone-800 via-surface to-bg" },
  { label: "Bartkontur & Pflege", tone: "from-amber-950/60 via-surface to-bg" },
  { label: "Klassischer Seitenscheitel", tone: "from-zinc-800 via-surface to-bg" },
  { label: "Royal Shave", tone: "from-stone-900 via-surface-2 to-bg" },
  { label: "Modern Crop", tone: "from-neutral-800 via-surface to-bg" },
  { label: "Low Taper Fade", tone: "from-amber-900/40 via-surface to-bg" },
  { label: "Vollbart-Trimm", tone: "from-zinc-900 via-surface-2 to-bg" },
  { label: "Buzz Cut mit Linie", tone: "from-stone-800 via-surface-2 to-bg" },
];
