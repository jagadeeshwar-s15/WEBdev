import Link from "next/link";
import { clinic } from "@/data/clinic";
import { buildWhatsAppLink, defaultEnquiryMessage } from "@/lib/whatsapp";
import { PhoneIcon, WhatsAppIcon, ConsultIcon } from "@/components/icons/Icons";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-border text-xs font-semibold">
        <a
          href={clinic.phone.tel}
          className="flex flex-col items-center gap-1 py-3 text-ink-soft active:text-pine"
        >
          <PhoneIcon className="h-5 w-5 text-pine" />
          Call
        </a>
        <a
          href={buildWhatsAppLink(defaultEnquiryMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-ink-soft active:text-pine"
        >
          <WhatsAppIcon className="h-5 w-5 text-pine" />
          WhatsApp
        </a>
        <Link
          href="/appointment"
          className="flex flex-col items-center gap-1 bg-pine py-3 text-cream"
        >
          <ConsultIcon className="h-5 w-5" />
          Appointment
        </Link>
      </div>
    </div>
  );
}
