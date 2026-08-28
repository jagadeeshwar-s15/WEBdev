import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TreatmentCard } from "@/components/shared/TreatmentCard";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";
import { treatments } from "@/data/treatments";

export function TreatmentsPreview() {
  const featured = treatments.filter((t) => t.confirmed).slice(0, 4);

  return (
    <section className="bg-cream-soft py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Treatments"
            title="Care centred on what your teeth actually need"
            description="A snapshot of the treatments patients have consulted Dr. Gayathri Devi for. See the full treatments page for details, including services still pending the clinic's confirmation."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((treatment, index) => (
            <Reveal key={treatment.slug} delayMs={index * 80}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/treatments" variant="outline">
            View all treatments
          </Button>
        </div>
      </Container>
    </section>
  );
}
