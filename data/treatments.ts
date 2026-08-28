/**
 * Treatments are split into two honest tiers:
 *
 * - `confirmed`: directly evidenced by patient reviews / clinic listings
 *   (e.g. a reviewer describing root canal and crown work, a Google Maps
 *   visitor update showing a "before and after fixed prosthesis" photo).
 * - `general`: standard dental-clinic services that a general dental
 *   surgeon typically provides, explicitly labelled as unconfirmed so we
 *   never present a guess as a verified fact. The clinic can confirm or
 *   remove these once they review the site.
 */

export type Treatment = {
  slug: string;
  name: string;
  description: string;
  icon: "tooth" | "shield" | "sparkle" | "bridge" | "consult" | "care";
  confirmed: boolean;
};

export const treatments: Treatment[] = [
  {
    slug: "consultation",
    name: "Dental Consultation",
    description:
      "A thorough check-up and consultation with Dr. Gayathri Devi to understand your dental health and plan the right next step.",
    icon: "consult",
    confirmed: true,
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    description:
      "Root canal therapy to treat infected or damaged tooth pulp and relieve pain, aiming to save the natural tooth wherever possible.",
    icon: "tooth",
    confirmed: true,
  },
  {
    slug: "crowns-caps",
    name: "Dental Crowns & Caps",
    description:
      "Custom-fitted crowns and caps to restore the strength, shape and appearance of a damaged or root-canal-treated tooth.",
    icon: "shield",
    confirmed: true,
  },
  {
    slug: "fixed-prosthesis",
    name: "Fixed Prosthesis (Bridges)",
    description:
      "Fixed bridgework to replace missing teeth with a natural-looking, permanently fitted prosthesis.",
    icon: "bridge",
    confirmed: true,
  },
  {
    slug: "general-restorative",
    name: "General & Restorative Dentistry",
    description:
      "Everyday dental care such as fillings, extractions, and scaling & polishing. [Exact scope to be confirmed by clinic]",
    icon: "care",
    confirmed: false,
  },
  {
    slug: "cosmetic-preventive",
    name: "Cosmetic & Preventive Care",
    description:
      "Preventive check-ups and cosmetic dental options. [Information to be confirmed by clinic]",
    icon: "sparkle",
    confirmed: false,
  },
];
