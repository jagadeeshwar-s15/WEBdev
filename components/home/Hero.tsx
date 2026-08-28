import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { StarRating } from "@/components/shared/StarRating";
import { WhatsAppIcon, MapPinIcon, ToothIcon, SparkleIcon } from "@/components/icons/Icons";
import { clinic } from "@/data/clinic";
import { buildWhatsAppLink, defaultEnquiryMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-clay-light/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-pine/10 blur-3xl"
      />

      <Container className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft">
            <MapPinIcon className="h-3.5 w-3.5 text-clay" />
            Siddhapudur, Coimbatore
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Careful, unhurried dental care for{" "}
            <span className="italic text-pine">your whole family.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Deekshitha Dental Clinic is a neighbourhood dental practice in Siddhapudur, led by
            Dr. S. Gayathri Devi (BDS). Straightforward advice, gentle treatment, and a team
            that takes the time to explain what&apos;s happening in your mouth — and why.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/appointment" variant="primary" className="w-full sm:w-auto">
              Book an Appointment
            </Button>
            <Button
              href={buildWhatsAppLink(defaultEnquiryMessage())}
              external
              variant="outline"
              className="w-full sm:w-auto"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <StarRating value={clinic.rating.value} size="h-4 w-4" />
              <span className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">{clinic.rating.value.toFixed(1)}</span>{" "}
                on Google &middot; {clinic.rating.count} reviews
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">9 years</span> of clinical experience
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pine to-[#122822] p-8 text-cream shadow-[0_30px_60px_-25px_rgba(23,50,44,0.6)]">
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-clay/30 blur-2xl"
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10">
                  <ToothIcon className="h-6 w-6" />
                </span>
                <span className="flex items-center gap-1 rounded-full bg-cream/10 px-3 py-1 text-xs font-medium">
                  <SparkleIcon className="h-3.5 w-3.5" />
                  Est. patient trust
                </span>
              </div>

              <div>
                <p className="font-serif text-2xl leading-snug italic">
                  &ldquo;Genuine doctor consulting, experienced for root canal, teeth cap
                  fixing.&rdquo;
                </p>
                <p className="mt-4 text-sm text-cream/70">— Sachin Shree, Google review</p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-cream/15 pt-6">
                <div>
                  <p className="font-serif text-3xl">{clinic.rating.value.toFixed(1)}★</p>
                  <p className="text-xs text-cream/70">Google rating</p>
                </div>
                <div>
                  <p className="font-serif text-3xl">{clinic.rating.count}</p>
                  <p className="text-xs text-cream/70">Patient reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
