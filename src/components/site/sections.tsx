import { Link } from "react-router"

import {
  emailHref,
  emailText,
  EXPERIENCE,
  PRACTICE_AREAS,
  SITE,
} from "@/lib/site"
import { cn } from "@/lib/utils"
import { ArrowLink, Figure } from "@/components/site/primitives"

/**
 * docs/brandboard/11-wireframe-home.md
 * Text is anchored low-left, never centred. The portrait must never sit under
 * the copy — if the text grows, the image moves, not the other way round.
 */
export function Hero() {
  return (
    <section className="dark relative flex min-h-dvh flex-col justify-end overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 lg:left-1/3">
        <Figure
          className="hero-pan"
          src="/images/hero-portrait.avif"
          alt="Juliana Frezza turning to look over her shoulder in a dark interior."
          placeholder
          brief="Hero portrait — turning away from camera, dark ground, blends into the ink. docs/brandboard/11"
        />
      </div>

      {/* Lets the headline sit on the image without a box behind it.
          The scrim runs bottom-to-top on phones and left-to-right from `lg`:
          the portrait fills the whole width on mobile, so a horizontal scrim
          would bury it behind the copy — the one thing 11-wireframe-home.md
          says must never happen. Vertical keeps the face clear above the text. */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent lg:bg-linear-to-r lg:to-40%" />

      {/* Concrete wall behind the headline column. It sits ABOVE the gradient —
          below it, the opaque left edge of the gradient hides it completely.
          The image is near-black by design, so it reads as a diagonal shadow
          rather than a second photograph. */}
      <div
        className="absolute inset-0 hidden lg:right-1/2 lg:block"
        // Cutting the texture off at a column edge leaves a visible vertical
        // seam against the portrait. It has to dissolve, not stop.
        style={{
          maskImage: "linear-gradient(to right, black 45%, transparent 95%)",
        }}
      >
        <Figure
          src="/images/hero-texture.avif"
          alt=""
          brief="Concrete wall, faint diagonal shadow. Texture only, no focal point. docs/assets/07"
        />
      </div>

      <div className="relative flex flex-col gap-6 px-6 pb-32 sm:px-12 lg:px-20 lg:pb-40">
        <p
          className="rise label text-muted-foreground"
          style={{ "--rise-delay": "0ms" } as React.CSSProperties}
        >
          International Legal Counsel
        </p>

        <h1 className="font-heading text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.15]">
          <span
            className="rise block"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Complex problems.
          </span>
          <span
            className="rise block"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            Strategic solutions.
          </span>
        </h1>
      </div>

    </section>
  )
}

/**
 * docs/brandboard/13-wireframe-practice-areas.md
 * The 1px gap shows the paper background through the grid — that IS the rule
 * between cards. No borders, no radius, no icons.
 */
export function PracticeGrid({ withCta = false }: { withCta?: boolean }) {
  return (
    <section className="flex flex-col gap-10 bg-background px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
      <h2 className="reveal text-[clamp(1.75rem,2.5vw,2.25rem)]">
        Practice Areas
      </h2>

      <div className="reveal grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-4">
        {PRACTICE_AREAS.map((area) => (
          <Link
            key={area.slug}
            to={`/practice-areas/${area.slug}`}
            className="group relative flex aspect-[3/1] items-end overflow-hidden bg-ink p-5 text-paper transition-colors duration-300 hover:bg-ink-soft focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-paper sm:aspect-[1/0.72]"
          >
            {/* docs/assets/06-practice-areas.md — the area image surfaces behind
                the title on hover. All eight or none: seven flat cards and one
                with a photo looks broken. */}
            <Figure
              src={`/images/area-${area.slug}.avif`}
              alt=""
              brief={area.title}
              // A touch screen never fires group-hover, so on phones these
              // eight cards would stay flat forever. Give them the reveal up
              // front where hovering is impossible — "all eight or none".
              className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60 [@media(hover:none)]:opacity-50"
            />
            <span className="relative label leading-[1.5]">{area.title}</span>
          </Link>
        ))}
      </div>

      {withCta && (
        <ArrowLink to="/practice-areas" className="reveal">
          Explore each area
        </ArrowLink>
      )}
    </section>
  )
}

/**
 * docs/brandboard/14-wireframe-experiences.md
 * An <ol> — the numbering is content. It renders as a span because it sits
 * right-aligned, which list-style can't do.
 */
export function ExperienceList({
  withCta = false,
  className,
}: {
  withCta?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)]">
        Selected Experience
      </h2>

      <ol className="flex flex-col">
        {EXPERIENCE.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 border-b border-border py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
          >
            <p className="max-w-[52ch] text-sm leading-[1.7] font-light">
              {item.text}
            </p>
            <span className="label order-first font-normal text-muted-foreground sm:order-none sm:shrink-0">
              {item.id}
            </span>
          </li>
        ))}
      </ol>

      {withCta && <ArrowLink to="/experience">View all experience</ArrowLink>}
    </div>
  )
}

/** docs/brandboard/15-wireframe-contact.md — no form. That is the decision. */
export function ContactBlock() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-[clamp(1.75rem,2.75vw,2.5rem)] leading-[1.2]">
        Let&rsquo;s discuss
        <br />
        how I can help.
      </h2>

      <div className="flex flex-col gap-1">
        <p className="label text-foreground">Barcelona, Spain</p>
        <p className="text-sm font-light text-muted-foreground">
          Available for international matters.
        </p>
      </div>

      <div className="flex flex-col items-start gap-2">
        <a
          href={emailHref()}
          className="label link-underline text-[11px] tracking-[0.1em]"
        >
          {emailText()}
        </a>
        <a
          href={SITE.phone.href}
          className="label link-underline text-[11px] tracking-[0.1em]"
        >
          {SITE.phone.display}
        </a>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground">
        {SITE.social.map((s, i) => (
          <span key={s.label} className="flex items-center gap-4">
            {i > 0 && <span aria-hidden>&#8212;</span>}
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label link-underline font-normal hover:text-foreground"
            >
              {s.label}
            </a>
          </span>
        ))}
      </div>
    </div>
  )
}
