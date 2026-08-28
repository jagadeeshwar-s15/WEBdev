import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { clinic } from "@/data/clinic";
import { MapPinIcon, PhoneIcon, ClockIcon, WhatsAppIcon } from "@/components/icons/Icons";
import { buildWhatsAppLink, defaultEnquiryMessage } from "@/lib/whatsapp";

const exploreLinks = [
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQs" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-cream-soft">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-serif text-xl text-ink">Deekshitha Dental Clinic</span>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            General and restorative dental care in Siddhapudur, Coimbatore, with Dr. S.
            Gayathri Devi (BDS).
          </p>
          <div className="mt-4 flex items-center gap-1 text-sm text-ink-soft">
            <span className="font-semibold text-ink">{clinic.rating.value.toFixed(1)}★</span>
            <span>on Google · {clinic.rating.count} reviews</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-pine">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/appointment" className="hover:text-pine">
                Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <span>{clinic.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-clay" />
              <a href={clinic.phone.tel} className="hover:text-pine">
                {clinic.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon className="h-4 w-4 shrink-0 text-clay" />
              <span>Mon–Sat, 10 AM–2 PM &amp; 5–8 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Reach us</h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={buildWhatsAppLink(defaultEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-pine"
            >
              <WhatsAppIcon className="h-4 w-4 text-clay" />
              WhatsApp us
            </a>
            <a
              href={clinic.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-soft hover:text-pine"
            >
              Facebook
            </a>
            <a
              href={clinic.mapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink-soft hover:text-pine"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Deekshitha Dental Clinic. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://github.com/jagadeeshwar-s15"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink hover:text-pine"
            >
              Jagadeeshwar
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
