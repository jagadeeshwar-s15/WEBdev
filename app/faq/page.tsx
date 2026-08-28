import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Reveal } from "@/components/shared/Reveal";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about visiting Deekshitha Dental Clinic in Coimbatore.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Call or WhatsApp us and we'll answer directly."
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
