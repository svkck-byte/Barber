/** Winziger className-Joiner — hält Komponenten frei von Template-Rauschen. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
