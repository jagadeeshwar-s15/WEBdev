import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { MapEmbed } from "@/components/contact/MapEmbed";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
  DirectionsIcon,
} from "@/components/icons/Icons";
import { clinic } from "@/data/clinic";
import { buildWhatsAppLink, defaultEnquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Deekshitha Dental Clinic in Siddhapudur, Coimbatore — address, phone, WhatsApp, hours and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Find us, call us, or message us"
        description="We're easiest to reach by phone or WhatsApp. If you're driving or walking in, use the map below for directions."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-lg text-ink">Address</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{clinic.address.full}</p>
                <a
                  href={clinic.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-pine hover:underline"
                >
                  <DirectionsIcon className="h-4 w-4" />
                  Get directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-lg text-ink">Phone</h2>
                <a href={clinic.phone.tel} className="mt-1 block text-sm text-ink-soft hover:text-pine">
                  {clinic.phone.display}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-lg text-ink">WhatsApp</h2>
                <a
                  href={buildWhatsAppLink(defaultEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-ink-soft hover:text-pine"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine">
                <ClockIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-lg text-ink">Hours</h2>
                <table className="mt-2 w-full max-w-xs text-sm text-ink-soft">
                  <tbody>
                    {clinic.hours.map((h) => (
                      <tr key={h.day} className="border-b border-border/60 last:border-0">
                        <td className="py-1.5 pr-4 font-medium text-ink">{h.day}</td>
                        <td className="py-1.5 text-right">
                          {h.open ? `${h.open}–${h.close}, ${h.eveningOpen}–${h.eveningClose}` : "Closed"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/appointment" variant="primary">
                Book an Appointment
              </Button>
              <Button href={clinic.phone.tel} variant="outline" icon={<PhoneIcon className="h-4 w-4" />}>
                Call now
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <MapEmbed />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
