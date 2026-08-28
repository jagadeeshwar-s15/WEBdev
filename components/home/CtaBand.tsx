import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/shared/Reveal";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons/Icons";
import { clinic } from "@/data/clinic";
import { buildWhatsAppLink, defaultEnquiryMessage } from "@/lib/whatsapp";

export function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-pine px-8 py-14 text-center text-cream sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-clay/20 blur-3xl"
            />
            <h2 className="relative font-serif text-3xl sm:text-4xl">
              Ready when you are.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-cream/75">
              Send an appointment request and our team will confirm a time that works for you —
              or reach us directly by phone or WhatsApp.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/appointment" variant="accent">
                Book an Appointment
              </Button>
              <Button
                href={clinic.phone.tel}
                variant="outline"
                className="border-cream/30 text-cream hover:border-cream hover:text-cream"
                icon={<PhoneIcon className="h-4 w-4" />}
              >
                {clinic.phone.display}
              </Button>
              <Button
                href={buildWhatsAppLink(defaultEnquiryMessage())}
                external
                variant="outline"
                className="border-cream/30 text-cream hover:border-cream hover:text-cream"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
