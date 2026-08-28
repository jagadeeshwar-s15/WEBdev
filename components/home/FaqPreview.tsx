import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";
import { faqs } from "@/data/faqs";

export function FaqPreview() {
  return (
    <section className="bg-cream-soft py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" align="center" className="mx-auto" />
        </Reveal>
        <Reveal delayMs={100} className="mt-10">
          <FaqAccordion faqs={faqs.slice(0, 4)} />
        </Reveal>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost">
            See all FAQs →
          </Button>
        </div>
      </Container>
    </section>
  );
}
