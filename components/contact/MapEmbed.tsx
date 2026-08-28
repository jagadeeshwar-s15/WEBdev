import { clinic } from "@/data/clinic";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title={`Map showing the location of ${clinic.name}`}
        src={clinic.mapsEmbedSrc}
        className="h-80 w-full sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
