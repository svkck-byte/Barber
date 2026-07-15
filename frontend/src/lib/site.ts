/**
 * Zentrale Geschäftsdaten für Haval Barber.
 * Alle mit TODO markierten Werte sind Platzhalter und müssen
 * vor dem Launch durch echte Daten ersetzt werden.
 */

export const site = {
  name: "Haval Barber",
  tagline: "Präzision. Stil. Handwerk.",
  description:
    "Haval Barber – dein Barbershop in Emmerich am Rhein. Präzise Haarschnitte, klassische Rasur mit heißem Handtuch und perfekte Bartkonturen. Termin einfach per WhatsApp oder Telefon.",

  // TODO: Echte Telefonnummer eintragen (Format: +49 und Vorwahl ohne 0)
  phoneDisplay: "+49 2822 XXXXXXX",
  phoneHref: "tel:+49XXXXXXXXXX",
  // TODO: Echte WhatsApp-Nummer eintragen (nur Ziffern, mit Ländercode)
  whatsappHref: "https://wa.me/49XXXXXXXXXX",
  whatsappText: "Hallo! Ich möchte gerne einen Termin vereinbaren.",

  // TODO: Echte E-Mail-Adresse eintragen
  email: "info@haval-barber.de",
  instagram: "https://instagram.com/haval.barber.1",
  facebook: "https://www.facebook.com/hval255",

  address: {
    street: "Steinstraße 3",
    zip: "46446",
    city: "Emmerich am Rhein",
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
  { value: 100, suffix: " %", label: "Weiterempfehlung auf Facebook" },
  { value: 5.0, decimals: 1, label: "Bewertung (5 Sterne)" },
  { value: 560, suffix: "+", label: "Follower auf Facebook" },
  { value: 1600, suffix: "+", label: "Views unserer Reels" },
];

/* ------------------------------------------------------------------ */
/* Bewertungen — echte Facebook-Rezensionen (facebook.com/hval255)     */
/* ------------------------------------------------------------------ */

export type Review = {
  name: string;
  text: string;
  rating: number;
  date?: string;
};

export const reviews: Review[] = [
  {
    name: "Adrian J.",
    text: "Sehr gut, perfekt und immer nett.",
    rating: 5,
    date: "Juni 2026",
  },
  {
    name: "Christian K.",
    text: "Bester Mann!",
    rating: 5,
    date: "Juni 2022",
  },
  {
    name: "Andrzej K.",
    text: "Polecam! Man kann auf Deutsch und Englisch sprechen — bequeme Plätze, toll mit Kindern, echter Meister-Stylist.",
    rating: 5,
    date: "Dezember 2024",
  },
  {
    name: "Miron A.",
    text: "The best! Recomand.",
    rating: 5,
    date: "Mai 2024",
  },
  {
    name: "Agnieszka A.",
    text: "Danke für den Besuch — der Kleine ist super zufrieden. Ein Meister seines Fachs!",
    rating: 5,
    date: "Juli 2022",
  },
];

/* ------------------------------------------------------------------ */
/* Galerie — echte Fotos aus dem Shop (Quelle: Facebook-Seite)         */
/* ------------------------------------------------------------------ */

export type GalleryItem = {
  label: string;
  /** Bildpfad unterhalb von public/ */
  src: string;
};

export const galleryItems: GalleryItem[] = [
  { label: "Skin Fade mit Kontur", src: "/gallery/skin-fade.jpg" },
  { label: "Bart & Skin Fade", src: "/gallery/bart-fade.jpg" },
  { label: "Hard Part mit Linie", src: "/gallery/hard-part.jpg" },
  { label: "Freestyle-Design", src: "/gallery/freestyle-kreuz.jpg" },
  { label: "Modern Crop", src: "/gallery/modern-crop.jpg" },
  { label: "Low Taper Fade", src: "/gallery/low-taper.jpg" },
  { label: "Vollbart & Fade", src: "/gallery/vollbart.jpg" },
  { label: "Zickzack-Design", src: "/gallery/zickzack.jpg" },
];
