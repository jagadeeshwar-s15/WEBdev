import { StarRating } from "@/components/shared/StarRating";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-7">
      <div>
        <StarRating value={review.rating} />
        <blockquote className="mt-4 font-serif text-lg leading-relaxed text-ink">
          &ldquo;{review.text}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center justify-between text-sm text-ink-soft">
        <span className="font-semibold text-ink">{review.author}</span>
        <span>{review.source} review</span>
      </figcaption>
    </figure>
  );
}
