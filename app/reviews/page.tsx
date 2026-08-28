import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { StarRating } from "@/components/shared/StarRating";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { clinic } from "@/data/clinic";
import { featuredReview, otherReviewers } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: `Deekshitha Dental Clinic is rated ${clinic.rating.value.toFixed(1)} on Google from ${clinic.rating.count} reviews.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={`${clinic.rating.value.toFixed(1)} out of 5 on Google`}
        description={`Based on ${clinic.rating.count} public Google reviews as of ${new Date(clinic.rating.asOf).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}. We show reviews as published — we don't edit or write them ourselves.`}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal className="flex items-center gap-3">
            <StarRating value={clinic.rating.value} size="h-6 w-6" />
            <span className="font-serif text-2xl text-ink">
              {clinic.rating.value.toFixed(1)} / 5
            </span>
          </Reveal>

          <Reveal delayMs={80} className="mt-10">
            <ReviewCard review={featuredReview} />
          </Reveal>

          <Reveal delayMs={140} className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-serif text-lg text-ink">More 5★ reviews on Google</h2>
            <p className="mt-2 text-sm text-ink-soft">
              These patients also left a 5-star rating, without accompanying written text at
              the time we checked:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {otherReviewers.map((r) => (
                <li key={r.author} className="flex items-center gap-2">
                  <StarRating value={r.rating} size="h-3.5 w-3.5" />
                  <span className="font-medium text-ink">{r.author}</span>
                  {"note" in r ? <span className="text-xs">({r.note})</span> : null}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={200} className="mt-10 text-center">
            <p className="mb-4 text-sm text-ink-soft">
              Want to see every review, unedited, straight from the source?
            </p>
            <Button href={clinic.mapsListingUrl} external variant="outline">
              View all reviews on Google
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
