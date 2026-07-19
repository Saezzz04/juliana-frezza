import { EditorialSplit, Figure } from "@/components/site/primitives"
import { ExperienceList } from "@/components/site/sections"

export function Experience() {
  return (
    <EditorialSplit
      imageSide="right"
      className="pt-16"
      figure={
        <Figure
          src="/images/experience-architecture.avif"
          alt=""
          brief="Architecture — dark stairwell or ramp, hard lines, near-abstract. docs/brandboard/14"
        />
      }
    >
      {/* Entries are not clickable and there is no case detail page: the deeper
          you go into a matter, the closer you get to identifying the client. */}
      <ExperienceList />
    </EditorialSplit>
  )
}
