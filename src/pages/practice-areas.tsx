import { Link, useParams } from "react-router"

import { PRACTICE_AREAS } from "@/lib/site"
import { ArrowLink, Figure, Kicker } from "@/components/site/primitives"
import { PracticeGrid } from "@/components/site/sections"

export function PracticeAreas() {
  return (
    <div className="pt-24">
      <PracticeGrid />
      <p className="label px-6 pb-24 text-muted-foreground sm:px-12 lg:px-20">
        Focused. Selective. Strategic.
      </p>
    </div>
  )
}

/**
 * Detail page. The per-area copy (2–3 paragraphs each) is not on the board and
 * still has to be written — see docs/brandboard/05-practice-areas.md.
 * Until then this renders the title and an honest gap, not invented filler.
 */
export function PracticeAreaDetail() {
  const { slug } = useParams()
  const area = PRACTICE_AREAS.find((a) => a.slug === slug)

  if (!area) {
    return (
      <div className="flex min-h-dvh flex-col justify-center gap-6 px-6 sm:px-12 lg:px-20">
        <h1 className="text-3xl">Not found</h1>
        <ArrowLink to="/practice-areas">Back to practice areas</ArrowLink>
      </div>
    )
  }

  const others = PRACTICE_AREAS.filter((a) => a.slug !== slug)

  return (
    <>
      <section className="dark grid min-h-[70dvh] grid-cols-1 bg-background text-foreground lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 pt-32 pb-20 sm:px-12 lg:px-20">
          <Kicker>Practice Area</Kicker>
          <h1 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1]">
            {area.title}
          </h1>
        </div>
        <div className="min-h-[24rem]">
          <Figure
            src={`/images/area-${area.slug}.avif`}
            alt=""
            brief="Architecture or empty space, B&W. One image per area, same shoot. docs/brandboard/09"
          />
        </div>
      </section>

      <section className="bg-background px-6 py-24 sm:px-12 lg:px-20">
        <p className="max-w-[60ch] text-base leading-[1.75] font-light text-muted-foreground">
          {/* TODO: replace with real copy — 2–3 paragraphs, written by Juliana. */}
          Copy pending. This area needs two to three paragraphs describing the
          work, the typical mandate and the outcome clients come for.
        </p>
      </section>

      <section className="flex flex-col gap-8 bg-background px-6 pb-24 sm:px-12 lg:px-20">
        <Kicker>Other Areas</Kicker>
        <ul className="grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                to={`/practice-areas/${other.slug}`}
                className="flex aspect-[3/1] items-end bg-ink p-5 text-paper transition-colors duration-300 hover:bg-ink-soft focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-paper sm:aspect-[1/0.72]"
              >
                <span className="label leading-[1.5]">{other.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
