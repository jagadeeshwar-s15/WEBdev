import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { StarRating } from "@/components/shared/StarRating";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";
import { clinic } from "@/data/clinic";
import { featuredReview, otherReviewers } from "@/data/reviews";

export function ReviewsPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Patient reviews"
              title="Rated 5.0 on Google"
              description={`${clinic.rating.count} patients have reviewed Deekshitha Dental Clinic on Google. Here's what one of them had to say — you can read the rest directly on Google.`}
            />
            <div className="mt-6 flex items-center gap-3">
              <StarRating value={clinic.rating.value} size="h-5 w-5" />
              <span className="text-sm font-semibold text-ink">
                {clinic.rating.value.toFixed(1)} / 5
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherReviewers.map((r) => (
                <span
                  key={r.author}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink-soft"
                >
                  {r.author} · 5★
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/reviews" variant="outline">
                Read all reviews
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <ReviewCard review={featuredReview} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
