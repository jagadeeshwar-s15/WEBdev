import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">This page wandered off.</h1>
      <p className="mt-4 max-w-md text-sm text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to somewhere useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
        <Button href="/appointment" variant="outline">
          Book an Appointment
        </Button>
      </div>
    </Container>
  );
}
