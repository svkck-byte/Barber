import { TimelineRail } from "@/components/motion/TimelineRail";
import { Hero } from "@/components/sections/Hero";
import { TrustBand } from "@/components/sections/TrustBand";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { HoursLocation } from "@/components/sections/HoursLocation";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/lib/site";

/** LocalBusiness-Schema (HairSalon) für lokale Auffindbarkeit. */
function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${site.url}/#hairsalon`,
    name: site.name,
    description: site.description,
    url: site.url,
    // TODO: Echte Telefonnummer (identisch mit src/lib/site.ts)
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: site.openingHoursSpecification.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [site.instagram],
  };
}

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <Hero />
      {/* Die Gold-Timeline verbindet alle Sektionen unterhalb des Heros */}
      <TimelineRail>
        <TrustBand />
        <Services />
        <Pricing />
        <Gallery />
        <Reviews />
        <HoursLocation />
        <CtaBand />
      </TimelineRail>
    </main>
  );
}
