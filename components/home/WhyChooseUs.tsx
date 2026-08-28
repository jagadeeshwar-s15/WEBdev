import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ConsultIcon, ClockIcon, MapPinIcon, ShieldIcon } from "@/components/icons/Icons";

const reasons = [
  {
    icon: ConsultIcon,
    title: "One dentist, every visit",
    description:
      "You see Dr. Gayathri Devi directly — no rotating staff, so she already knows your dental history.",
  },
  {
    icon: ClockIcon,
    title: "Evening hours available",
    description:
      "Open until 8 PM on weekdays and Saturdays, so a visit doesn't have to mean taking a full day off work.",
  },
  {
    icon: MapPinIcon,
    title: "Easy to find, easy to reach",
    description:
      "Located on VKK Menon Road in Siddhapudur, near Kavya Medicals — a familiar, central part of Coimbatore.",
  },
  {
    icon: ShieldIcon,
    title: "Clearly explained treatment",
    description:
      "Every procedure is explained in plain terms before it happens, in Tamil or English — no surprises.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-cream sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why patients choose us"
            title="Small clinic, close attention"
            align="center"
            className="mx-auto [&_h2]:text-cream [&_p]:text-cream/70"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delayMs={index * 80} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 text-clay-light">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
