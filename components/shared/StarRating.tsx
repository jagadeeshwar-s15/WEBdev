import { StarIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  className,
  size = "h-4 w-4",
}: {
  value: number;
  className?: string;
  size?: string;
}) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className={cn("flex items-center gap-0.5 text-gold", className)} aria-hidden="true">
      {stars.map((i) => (
        <StarIcon key={i} filled={i < Math.round(value)} className={size} />
      ))}
    </div>
  );
}
