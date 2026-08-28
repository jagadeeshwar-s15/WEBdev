import type { Doctor } from "@/data/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:p-8">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-cream-soft font-serif text-3xl text-pine sm:h-32 sm:w-32">
        {doctor.name
          .replace("Dr.", "")
          .trim()
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("")}
      </div>
      <div>
        <h3 className="font-serif text-2xl text-ink">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-clay">
          {doctor.role}
        </p>
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <div className="flex items-center gap-1.5">
            <dt className="font-medium text-ink">Qualification:</dt>
            <dd>{doctor.credentials}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="font-medium text-ink">Experience:</dt>
            <dd>{doctor.experienceYears} years</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="font-medium text-ink">Languages:</dt>
            <dd>{doctor.languages.join(", ")}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{doctor.bio}</p>
      </div>
    </div>
  );
}
