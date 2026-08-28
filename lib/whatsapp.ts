import { clinic } from "@/data/clinic";

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsapp.e164}?text=${encoded}`;
}

export function defaultEnquiryMessage() {
  return `Hi Deekshitha Dental Clinic, I'd like to request an appointment.`;
}
