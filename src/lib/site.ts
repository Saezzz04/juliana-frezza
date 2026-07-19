/**
 * Single source of truth for site content.
 * Copy transcribed from the brand board — see docs/brandboard/.
 * Do not hardcode any of this in components.
 */

export const SITE = {
  name: "Juliana Frezza",
  role: "International Lawyer",
  tagline: "Strategic legal counsel for complex matters",
  location: "Barcelona — Worldwide",
  // TODO: real number before launch — the board ships a placeholder.
  phone: { display: "+34 600 000 000", href: "tel:+34600000000" },
  email: { user: "info", domain: "julianafrezza.com" },
  social: [
    // TODO: real profile URLs before launch.
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
} as const

/**
 * docs/brandboard/10-web-structure.md
 * INSIGHTS is in the board's nav but has no wireframe and no content.
 * Shipping a dead link is worse than shipping five pages — it stays out until
 * there's a decision to publish. See the TODO in that file.
 */
export const NAV = [
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Experiences", to: "/experience" },
  { label: "Contact", to: "/contact" },
] as const

/** docs/brandboard/05-practice-areas.md — order is by strategic weight, not alphabetical. */
export const PRACTICE_AREAS = [
  { slug: "complex-litigation", title: "Complex Litigation" },
  { slug: "corporate-disputes", title: "Corporate Disputes" },
  { slug: "corporate-restructuring", title: "Corporate Restructuring" },
  { slug: "economic-crime", title: "Economic Crime" },
  { slug: "asset-recovery", title: "Asset Recovery" },
  { slug: "cross-border-matters", title: "Cross-Border Matters" },
  { slug: "strategic-legal-advisory", title: "Strategic Legal Advisory" },
  { slug: "private-client-matters", title: "Private Client Matters" },
] as const

export type PracticeArea = (typeof PRACTICE_AREAS)[number]

/**
 * docs/brandboard/14-wireframe-experiences.md
 * No client names, no exact figures, no named jurisdictions. The vagueness is
 * professional privilege, not lazy copy. Every entry opens with a past-tense verb.
 * TODO: these four are board placeholders — the real list needs a confidentiality review.
 */
export const EXPERIENCE = [
  {
    id: "01",
    text: "Advised creditors in a multi-million euro restructuring involving international stakeholders.",
  },
  {
    id: "02",
    text: "Represented clients in complex litigation and dispute resolution matters.",
  },
  {
    id: "03",
    text: "Managed cross-border legal matters involving multiple jurisdictions and legal systems.",
  },
  {
    id: "04",
    text: "Advised companies and private clients on strategic legal issues and risk management.",
  },
] as const

/** docs/brandboard/03-brand-personality.md */
export const PERSONALITY = [
  "Strategic",
  "Intelligent",
  "Discreet",
  "Independent",
  "International",
  "Sophisticated",
  "Selective",
  "Results-driven",
] as const

/**
 * Assembled at runtime so scrapers don't lift the address straight out of the
 * HTML. The visible text still renders server-side-friendly and screen readers
 * read it normally — this only obfuscates the mailto: href.
 */
export function emailHref() {
  return `mailto:${[SITE.email.user, SITE.email.domain].join("@")}`
}

export function emailText() {
  return `${SITE.email.user}@${SITE.email.domain}`
}
