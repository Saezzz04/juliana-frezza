import { Link } from "react-router"

import { emailHref, emailText, NAV, SITE } from "@/lib/site"
import { Wordmark } from "@/components/site/primitives"

/** The contact wireframe again (slide 15), on ink, full width. */
export function SiteFooter() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="flex flex-col gap-16 px-6 py-20 sm:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Wordmark />
            <p className="label leading-relaxed text-muted-foreground">
              {SITE.tagline}
              <br />
              {SITE.location}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="label link-underline w-fit font-normal text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a href={emailHref()} className="label link-underline w-fit">
              {emailText()}
            </a>
            <a href={SITE.phone.href} className="label link-underline w-fit">
              {SITE.phone.display}
            </a>
            <div className="mt-4 flex gap-6">
              {SITE.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label link-underline text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/*
          TODO before launch — a Spanish legal practice must publish these:
          aviso legal, política de privacidad, datos de colegiación.
          Not in the board, and not optional.
        */}
        <div className="flex flex-col gap-2 border-t border-border pt-8 text-[9px] tracking-[0.12em] text-muted-foreground uppercase md:flex-row md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}
          </span>
          <span>Not a traditional law firm. A private advisory practice.</span>
        </div>
      </div>
    </footer>
  )
}
