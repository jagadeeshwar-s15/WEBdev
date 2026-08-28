import type { Treatment } from "@/data/treatments";
import { treatmentIconMap } from "@/components/icons/Icons";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = treatmentIconMap[treatment.icon];

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow duration-200 hover:shadow-[0_16px_40px_-24px_rgba(23,50,44,0.35)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream-soft text-pine transition-colors duration-200 group-hover:bg-pine group-hover:text-cream">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-xl text-ink">{treatment.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{treatment.description}</p>
      {!treatment.confirmed ? (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-cream-soft px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
          Pending clinic confirmation
        </span>
      ) : null}
    </div>
  );
}
