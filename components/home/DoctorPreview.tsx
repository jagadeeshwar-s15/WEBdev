import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { Reveal } from "@/components/shared/Reveal";
import { doctors } from "@/data/doctors";

export function DoctorPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Your dentist" title="Meet Dr. S. Gayathri Devi" />
        </Reveal>
        <Reveal delayMs={100} className="mt-10">
          <DoctorCard doctor={doctors[0]} />
        </Reveal>
      </Container>
    </section>
  );
}
