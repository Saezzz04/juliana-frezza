import { ArrowLink, EditorialSplit, Figure } from "@/components/site/primitives"
import {
  ContactBlock,
  ExperienceList,
  Hero,
  PracticeGrid,
} from "@/components/site/sections"

/**
 * Sections alternate paper / ink as you scroll. That alternation is what makes
 * the page read editorial rather than corporate — docs/brandboard/11.
 */
export function Home() {
  return (
    <>
      <Hero />

      {/* About — docs/brandboard/12 */}
      <EditorialSplit
        imageSide="right"
        figure={
          <Figure
            src="/images/portrait-credential.avif"
            alt="Juliana Frezza, arms crossed, facing the camera."
            placeholder
            brief="Portrait — mid-shot, arms crossed, direct gaze. The credential portrait. docs/brandboard/12"
          />
        }
      >
        <h2 className="mb-8 text-[clamp(1.75rem,2.5vw,2.25rem)]">
          About Juliana Frezza
        </h2>
        <div className="mb-10 flex max-w-[40ch] flex-col gap-5 text-base leading-[1.75] font-light">
          <p>
            An international lawyer with experience in complex litigation,
            restructuring and economic crime matters.
          </p>
          <p>
            I combine legal excellence with commercial thinking to deliver
            strategic solutions for clients facing critical challenges.
          </p>
        </div>
        <ArrowLink to="/about">Read more</ArrowLink>
      </EditorialSplit>

      {/* Positioning — the line that defines the business. Full-bleed on ink. */}
      <section className="dark bg-background px-6 py-32 text-foreground sm:px-12 lg:px-20">
        <div className="reveal mx-auto flex max-w-3xl flex-col gap-10 text-center">
          <p className="text-lg leading-[1.75] font-light">
            Juliana Frezza is an international lawyer providing strategic legal
            counsel in complex, high-value matters. She advises clients through
            critical legal challenges with a combination of legal excellence,
            commercial awareness and absolute discretion.
          </p>
          <p className="label leading-[1.8] tracking-[0.14em] text-muted-foreground">
            Not a traditional law firm.
            <br />A private advisory practice.
          </p>
        </div>
      </section>

      <PracticeGrid withCta />

      {/* Experience — docs/brandboard/14 */}
      <EditorialSplit
        imageSide="right"
        figure={
          <Figure
            src="/images/experience-architecture.avif"
            alt=""
            brief="Architecture — dark stairwell or ramp, hard lines, near-abstract. docs/brandboard/14"
          />
        }
      >
        <ExperienceList withCta />
      </EditorialSplit>

      {/* Contact — docs/brandboard/15 */}
      <EditorialSplit
        imageSide="right"
        figure={
          <Figure
            src="/images/contact-interior.avif"
            alt=""
            brief="Interior — round table, chairs, window light. The brightest image in the deck. No people. docs/brandboard/15"
          />
        }
      >
        <ContactBlock />
      </EditorialSplit>
    </>
  )
}
