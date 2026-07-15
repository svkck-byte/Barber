import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: Echte Domain eintragen, sobald vorhanden
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Barbershop in ${site.address.city} | Haarschnitt & Bartpflege`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Barbershop",
    site.address.city,
    "Herrenfriseur",
    "Haarschnitt",
    "Bartpflege",
    "Skin Fade",
    "Rasur",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} – Barbershop in ${site.address.city}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${site.name} – Barbershop in ${site.address.city}`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-lg bg-accent px-4 py-3 font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
