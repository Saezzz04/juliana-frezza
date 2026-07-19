import { PERSONALITY } from "@/lib/site"
import { EditorialSplit, Figure } from "@/components/site/primitives"

export function About() {
  return (
    <>
      <EditorialSplit
        imageSide="right"
        className="pt-16"
        figure={
          <Figure
            src="/images/portrait-credential.avif"
            alt="Juliana Frezza, arms crossed, facing the camera."
            placeholder
            brief="Portrait — mid-shot, arms crossed, direct gaze. The credential portrait. docs/brandboard/12"
          />
        }
      >
        <h1 className="mb-8 text-[clamp(2rem,3vw,3rem)] leading-[1.15]">
          About Juliana Frezza
        </h1>
        <div className="flex max-w-[40ch] flex-col gap-5 text-base leading-[1.75] font-light">
          <p>
            An international lawyer with experience in complex litigation,
            restructuring and economic crime matters.
          </p>
          <p>
            I combine legal excellence with commercial thinking to deliver
            strategic solutions for clients facing critical challenges.
          </p>
          {/*
            TODO: the long-form biography — career, education, jurisdictions,
            languages, bar admission — is not on the brand board and still needs
            writing. This page is a stub until it lands.
          */}
        </div>
      </EditorialSplit>

      {/* Personality — docs/brandboard/03 */}
      <EditorialSplit
        imageSide="left"
        figure={
          <Figure
            src="/images/portrait-authority.avif"
            alt="Juliana Frezza, close portrait, direct gaze."
            placeholder
            brief="Portrait — head-on, composed, not smiling. The authority portrait. docs/brandboard/03"
          />
        }
      >
        <ul className="flex flex-col">
          {PERSONALITY.map((trait) => (
            <li
              key={trait}
              className="font-heading text-2xl leading-[1.9] text-primary"
            >
              {trait}
            </li>
          ))}
        </ul>
      </EditorialSplit>
    </>
  )
}
