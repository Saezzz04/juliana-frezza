import { EditorialSplit, Figure } from "@/components/site/primitives"
import { ContactBlock } from "@/components/site/sections"

export function Contact() {
  return (
    <EditorialSplit
      imageSide="right"
      className="min-h-dvh pt-16"
      figure={
        <Figure
          src="/images/contact-interior.avif"
          alt=""
          brief="Interior — round table, chairs, window light. The brightest image in the deck. No people. docs/brandboard/15"
        />
      }
    >
      {/* No form. Someone with a multi-million euro matter sends an email. */}
      <ContactBlock />
    </EditorialSplit>
  )
}
