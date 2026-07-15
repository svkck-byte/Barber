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
- [ ] Design-Iterationen nach Nutzer-Feedback (Nutzer entscheidet als Nächstes)

## Backlog / Offene Punkte
- P0: Nutzer-Feedback zum Design einholen und umsetzen
- P1: Platzhalter in site.ts ersetzen (Telefon, WhatsApp, Adresse, Instagram, Domain)
- P1: Galerie nutzt Gradient-Platzhalter → echte Fotos (public/gallery/)
- P2: GitHub-Push über "Save to Github"-Feature
