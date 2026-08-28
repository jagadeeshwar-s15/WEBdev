import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons/Icons";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Deekshitha Dental Clinic in Siddhapudur, Coimbatore, and dentist Dr. S. Gayathri Devi (BDS, 9 years experience).",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A dental clinic built around one dentist, one patient at a time."
        description="Deekshitha Dental Clinic operates from a single, easy-to-find location on VKK Menon Road in Siddhapudur — a straightforward, no-frills dental practice for the surrounding Coimbatore community."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-soft">
              Rather than operating as a large, multi-doctor centre, Deekshitha Dental Clinic
              keeps things simple: one dentist, one clinic, and appointments that are handled
              directly rather than passed between staff. Patients see Dr. Gayathri Devi for
              every visit, which means continuity — she already knows your dental history the
              next time you walk in.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="text-base leading-relaxed text-ink-soft">
              The clinic is open six days a week, including evening hours, so a visit doesn&rsquo;t
              always have to compete with a working day. Consultations are conducted in Tamil
              or English, whichever a patient is more comfortable in.
            </p>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="text-sm leading-relaxed text-ink-soft/80">
              Some details about the clinic&apos;s facilities, equipment, and full service list are
              still being confirmed with the clinic directly and will be added here once
              verified — see the note on our{" "}
              <a href="/treatments" className="font-medium text-pine underline underline-offset-2">
                Treatments page
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-soft py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Your dentist</h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-8">
            <DoctorCard doctor={doctors[0]} />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">Clinic details</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <MapPinIcon className="h-5 w-5 text-clay" />
                <dt className="mt-3 text-sm font-semibold text-ink">Location</dt>
                <dd className="mt-1 text-sm text-ink-soft">{clinic.address.full}</dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <ClockIcon className="h-5 w-5 text-clay" />
                <dt className="mt-3 text-sm font-semibold text-ink">Hours</dt>
                <dd className="mt-1 text-sm text-ink-soft">
                  Mon–Sat, 10 AM–2 PM &amp; 5–8 PM
                  <br />
                  Closed Sundays
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <PhoneIcon className="h-5 w-5 text-clay" />
                <dt className="mt-3 text-sm font-semibold text-ink">Phone</dt>
                <dd className="mt-1 text-sm text-ink-soft">
                  <a href={clinic.phone.tel} className="hover:text-pine">
                    {clinic.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delayMs={140} className="mt-10">
            <Button href="/appointment" variant="primary">
              Book an Appointment
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
