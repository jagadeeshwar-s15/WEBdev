import { Container } from "@/components/shared/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-cream-soft py-16 sm:py-20">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 text-base leading-relaxed text-ink-soft">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
