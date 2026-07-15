# PRD – Haval Barber Landingpage

## Original Problem Statement
Privates GitHub-Repo `svkck-byte/haval-barber` klonen und einrichten. Nutzer möchte die Landingpage weiter designen und bearbeiten (Modus: erst anschauen, dann entscheiden).

## Projekt
- One-Page-Landingpage für Barbershop "Haval Barber" (Dortmund), dark theme, Gold/Bernstein-Akzente
- Tech: Next.js 16.2.10 (App Router), React 19.2.4, Tailwind CSS v4, motion (framer) 12.42.2, TypeScript
- Kein Backend nötig (statische Seite); Backend-Stub (FastAPI health) nur für Supervisor

## Architektur / Setup (15.06.2026)
- Repo geklont nach /app/frontend (Supervisor erwartet Frontend auf Port 3000)
- Backend-Stub: /app/backend/server.py (GET /api/health)
- WICHTIG: Frontend läuft im PRODUCTION-Modus (`next build` + `next start`), NICHT dev.
  Grund: Next dev (Turbopack & Webpack) hydratisiert nicht über den Preview-Proxy,
  weil der HMR-Websocket (/_next/webpack-hmr) am Proxy mit 502 scheitert.
  → Nach jeder Codeänderung: `cd /app/frontend && yarn build && sudo supervisorctl restart frontend`
- next.config.ts: allowedDevOrigins für preview.emergentagent.com + preview.emergentcf.cloud ergänzt

## Struktur
- src/app/page.tsx (Sektionen: Hero, TrustBand, Services, Pricing, Gallery, Team, Reviews, HoursLocation, CtaBand)
- src/components/sections/*, src/components/ui/*, src/components/motion/* (Reveal, TimelineRail)
- src/lib/site.ts = zentrale Geschäftsdaten (viele TODO-Platzhalter: Telefon, WhatsApp, Adresse, Instagram)
- src/lib/motion/tokens.ts = Motion-Design-Tokens

## Status
- [x] Repo geklont & lauffähig eingerichtet (Preview funktioniert, Hydration ok)
- [x] Firmenlogo integriert (15.06.2026): Hero zeigt jetzt das Logo (public/logo.png, weiß auf transparent umgefärbt aus Kundendatei) mit Gold-Glow + Fade/Scale-Entrance. Ersetzt die frühere animierte Wortmarke + Rasiermesser-SVG. SEO: sr-only h1.
- [x] Logo farblich angepasst (15.06.2026): CSS-Klasse .logo-gold (globals.css) nutzt logo.png als mask-image mit Brand-Gold-Gradient als Füllung
- [x] Navbar-Logo + Favicon (15.06.2026): Navbar zeigt Logo (h-14, .logo-gold) statt Text-Schriftzug; Favicon (src/app/favicon.ico) generiert: dunkler Hintergrund + goldenes Logo
- [x] Facebook-Daten & echte Fotos integriert (15.06.2026):
  - Quelle: facebook.com/hval255 ("Haval . Barber", 562 Follower, 100% Empfehlung/5 Reviews)
  - Echte Adresse: Steinstraße 3, 46446 Emmerich am Rhein (vorher Platzhalter Dortmund!) — site.ts, JSON-LD, Hero-Eyebrow, Maps-Link
  - Instagram: instagram.com/haval.barber.1; site.facebook ergänzt
  - Galerie: 8 echte Kundenfotos (public/gallery/*.jpg, next/image), Standort-Karte zeigt echtes Ladenfoto (public/shop-front.jpg)
  - TrustBand-Stats auf echte FB-Zahlen umgestellt
  - OFFEN: Telefon/WhatsApp-Nummer & Öffnungszeiten auf FB nicht öffentlich einsehbar → weiterhin Platzhalter
- [ ] Design-Iterationen nach Nutzer-Feedback

## Backlog / Offene Punkte
- P0: Nutzer-Feedback zum Design einholen und umsetzen
- P1: Platzhalter in site.ts ersetzen (Telefon, WhatsApp, Adresse, Instagram, Domain)
- P1: Galerie nutzt Gradient-Platzhalter → echte Fotos (public/gallery/)
- P2: GitHub-Push über "Save to Github"-Feature
