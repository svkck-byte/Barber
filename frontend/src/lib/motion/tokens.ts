/**
 * Zentrale Motion-Tokens — die einzige Quelle für Dauer, Easing, Distanz & Federn.
 * Regel: Keine Roh-Zahlen in Komponenten. Immer von hier importieren.
 */

type Bezier = [number, number, number, number];

export const motionTokens = {
  /** Dauer in Sekunden */
  duration: {
    instant: 0.08,
    fast: 0.18,
    normal: 0.35,
    slow: 0.6,
    crawl: 1.0,
    /** SVG-Path-Draw im Hero */
    draw: 1.6,
  },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as Bezier,
    sharp: [0.4, 0, 0.2, 1] as Bezier,
    bounce: [0.34, 1.56, 0.64, 1] as Bezier,
    linear: [0, 0, 1, 1] as Bezier,
  },
  /** Transform-Distanzen in px */
  distance: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 48,
  },
  scale: {
    subtle: 0.98,
    press: 0.95,
    pop: 1.04,
    /** Hover-Zoom in der Galerie */
    zoom: 1.06,
  },
  /** Stagger-Intervalle (Regel: Listen 0.05–0.10s) */
  stagger: {
    chars: 0.04,
    items: 0.08,
    delayChildren: 0.1,
  },
  /** Gemeinsame Viewport-Marge für whileInView-Reveals */
  viewport: {
    margin: "-80px",
  },
} as const;

export const springs = {
  /** Standard-UI: Buttons, Chips, Nav-Items */
  snappy: { type: "spring", stiffness: 300, damping: 30 },
  /** Cards, Panels, sanftes Landen */
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  /** Verspielte Momente */
  bouncy: { type: "spring", stiffness: 400, damping: 10 },
  /** Tooltips, Popovers, Dropdowns */
  instant: { type: "spring", stiffness: 600, damping: 35 },
  /** Drag-Release / natürliche Physik */
  release: { type: "spring", stiffness: 200, damping: 20, restDelta: 0.001 },
} as const;
