import { Link } from "react-router"

import { cn } from "@/lib/utils"

/** docs/brandboard/01-brand-overview.md — always split across two lines at `lg`. */
export function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <span className="block font-heading text-[clamp(2.5rem,6vw,6rem)] leading-[1.0] tracking-[0.06em] uppercase">
        Juliana
        <br />
        Frezza
      </span>
    )
  }

  return (
    <span className="font-sans text-[13px] font-medium tracking-[0.18em] uppercase">
      Juliana Frezza
    </span>
  )
}

/**
 * The uppercase kicker above a heading — `INTERNATIONAL LEGAL COUNSEL`.
 * Note: the board's numbered labels (`01 PRACTICE AREAS`) are slide chrome, not
 * page content. They number the PDF. They do not belong on the site.
 */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("label text-muted-foreground", className)}>{children}</p>
  )
}

/**
 * The one CTA in the system: uppercase label + arrow.
 * On hover the arrow advances and the underline grows from the left.
 */
export function ArrowLink({
  to,
  children,
  className,
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group label link-underline inline-flex w-fit items-center gap-3",
        className
      )}
    >
      {children}
      <span
        aria-hidden
        className="text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        &#8594;
      </span>
    </Link>
  )
}

/**
 * An image slot. Generation briefs live in docs/assets/.
 *
 * No `src` yet → renders the art direction on a dark block, so a missing image
 * announces itself instead of hiding.
 *
 * `placeholder` → the src is an AI comp standing in for a real photo (the three
 * portraits of Juliana). It renders nothing — it is a marker, and
 * `bun run check:assets` fails the build while any remain. Drop the prop when
 * the real photo lands. Why it matters: docs/assets/00-index.md
 */
export function Figure({
  src,
  alt,
  brief,
  // `placeholder` is accepted (see the type below) but never destructured:
  // it renders nothing by design. scripts/check-assets.mjs greps the JSX for
  // it and fails the build, so the prop's whole job happens outside this file.
  className,
}: {
  src?: string
  alt?: string
  brief: string
  placeholder?: boolean
  className?: string
}) {
  if (src) {
    return (
      <div className={cn("relative size-full", className)}>
        {/* ponytail: the .webp twin always sits next to the .avif — same name,
            same folder. Not worth a prop. */}
        <picture className="block size-full">
          <source srcSet={src} type="image/avif" />
          <img
            src={src.replace(/\.avif$/, ".webp")}
            alt={alt ?? ""}
            className="size-full object-cover"
          />
        </picture>
      </div>
    )
  }

  return (
    <div
      role="presentation"
      className={cn(
        "flex size-full items-end bg-ink-soft p-6 text-stone select-none",
        className
      )}
    >
      <span className="label max-w-[24ch] leading-relaxed">{brief}</span>
    </div>
  )
}

/**
 * The dominant layout of the brand: text one side, image bleeding off the other.
 * Slides 02, 03, 04, 05, 12, 14 and 15 are all this component.
 */
export function EditorialSplit({
  children,
  figure,
  imageSide = "right",
  dark = false,
  className,
}: {
  children: React.ReactNode
  figure: React.ReactNode
  imageSide?: "left" | "right"
  dark?: boolean
  className?: string
}) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 bg-background text-foreground lg:grid-cols-2",
        dark && "dark",
        className
      )}
    >
      <div
        className={cn(
          // editorial-figure drives the scroll parallax — see index.css.
          "editorial-figure order-1 aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[38rem]",
          imageSide === "right" ? "lg:order-2" : "lg:order-1"
        )}
      >
        {figure}
      </div>

      <div
        className={cn(
          "reveal order-2 flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20 lg:py-32",
          imageSide === "right" ? "lg:order-1" : "lg:order-2"
        )}
      >
        <div className="flex max-w-lg flex-col">{children}</div>
      </div>
    </section>
  )
}
