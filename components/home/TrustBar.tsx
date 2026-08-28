import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { clinic } from "@/data/clinic";

const stats = [
  { label: "Google rating", value: `${clinic.rating.value.toFixed(1)}★` },
  { label: "Patient reviews", value: `${clinic.rating.count}` },
  { label: "Years of experience", value: "9" },
  { label: "Days open", value: "6 / week" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-cream-soft">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-serif text-3xl text-pine">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
