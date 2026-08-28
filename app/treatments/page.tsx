import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { TreatmentCard } from "@/components/shared/TreatmentCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Dental treatments at Deekshitha Dental Clinic, Coimbatore — including root canal treatment, dental crowns and fixed prosthesis.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  const confirmed = treatments.filter((t) => t.confirmed);
  const pending = treatments.filter((t) => !t.confirmed);

  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Dental care, plainly explained"
        description="Below are the treatments we can confirm from patient reviews and clinic listings, followed by general dental services that are common at a practice like this but still awaiting direct confirmation from the clinic."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl text-ink">Confirmed treatments</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {confirmed.map((treatment, index) => (
              <Reveal key={treatment.slug} delayMs={index * 60}>
                <TreatmentCard treatment={treatment} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-soft py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl text-ink">Also likely offered</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-soft">
              These are standard services for a general dental practice. We haven&apos;t been able
              to independently verify the exact scope the clinic offers, so please confirm by
              phone or WhatsApp before your visit.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pending.map((treatment, index) => (
              <Reveal key={treatment.slug} delayMs={index * 60}>
                <TreatmentCard treatment={treatment} />
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={160} className="mt-10">
            <Button href="/appointment" variant="primary">
              Ask About a Treatment
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
