import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons/Icons";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Deekshitha Dental Clinic, Coimbatore. Sent via WhatsApp — our team will confirm your date and time.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointment"
        title="Request an appointment"
        description="Fill in your details and we'll get back to you to confirm a time. This is an enquiry, not an instant booking."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-9">
              <AppointmentForm />
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="space-y-6 rounded-3xl bg-cream-soft p-6 sm:p-8">
              <h2 className="font-serif text-xl text-ink">Clinic details</h2>
              <div className="flex items-start gap-3 text-sm text-ink-soft">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <span>{clinic.address.full}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-soft">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <span>
                  Mon–Sat, 10 AM–2 PM &amp; 5–8 PM
                  <br />
                  Closed Sundays
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-soft">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <a href={clinic.phone.tel} className="hover:text-pine">
                  {clinic.phone.display}
                </a>
              </div>
              <p className="border-t border-border/60 pt-5 text-xs leading-relaxed text-ink-soft/80">
                For a dental emergency, please call the clinic directly rather than submitting
                this form.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
