import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";
import { CheckIcon } from "@/components/icons/Icons";

const points = [
  "A single, consistent dentist for every visit — Dr. Gayathri Devi treats every patient herself.",
  "Consultations conducted in Tamil or English, whichever you're more comfortable in.",
  "A calm, unrushed appointment structure focused on explaining your treatment clearly.",
];

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About the clinic"
            title="A neighbourhood clinic that treats you, not just your teeth."
            description="Deekshitha Dental Clinic has been serving the Siddhapudur community from its VKK Menon Road location. The practice is built around one idea: dental care works best when it's unhurried, clearly explained, and delivered by someone who already knows your history."
          />
        </Reveal>
        <Reveal delayMs={100}>
          <ul className="space-y-5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              More about the clinic
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
