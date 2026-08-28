import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/lib/site";

export function dentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    url: siteConfig.url,
    telephone: clinic.phone.e164,
    // No verified pricing information exists, so `priceRange` is
    // intentionally omitted rather than guessed at.
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: "Coimbatore",
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    openingHoursSpecification: clinic.hours
      .filter((h) => h.open && h.close)
      .flatMap((h) => {
        const specs = [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${h.day}`,
            opens: to24h(h.open as string),
            closes: to24h(h.close as string),
          },
        ];
        if (h.eveningOpen && h.eveningClose) {
          specs.push({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${h.day}`,
            opens: to24h(h.eveningOpen),
            closes: to24h(h.eveningClose),
          });
        }
        return specs;
      }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.value,
      reviewCount: clinic.rating.count,
    },
    medicalSpecialty: "Dentistry",
    physician: doctors.map((doc) => ({
      "@type": "Physician",
      name: doc.name,
      medicalSpecialty: "Dentistry",
    })),
    sameAs: [clinic.socials.facebook],
  };
}

function to24h(label: string) {
  const [time, meridiem] = label.split(" ");
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minuteStr}`;
}
