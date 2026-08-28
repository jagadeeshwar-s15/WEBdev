"use client";

import { useId, useState } from "react";
import { clinic } from "@/data/clinic";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";
import { WhatsAppIcon, PhoneIcon, CheckIcon } from "@/components/icons/Icons";

type FormState = {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  treatment: "",
  message: "",
};

const timeOptions = ["Morning (10 AM – 2 PM)", "Evening (5 PM – 8 PM)"];

const MAX_MESSAGE_LENGTH = 500;
const MAX_NAME_LENGTH = 80;

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  const trimmedName = values.name.trim();
  if (!trimmedName) {
    errors.name = "Please enter your name.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name looks too short.";
  } else if (trimmedName.length > MAX_NAME_LENGTH) {
    errors.name = `Name must be under ${MAX_NAME_LENGTH} characters.`;
  }

  const digitsOnly = values.phone.replace(/\D/g, "");
  const localDigits = digitsOnly.startsWith("91") && digitsOnly.length === 12 ? digitsOnly.slice(2) : digitsOnly;
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[6-9]\d{9}$/.test(localDigits)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, or leave this blank.";
  }

  if (values.preferredDate) {
    if (values.preferredDate < todayISO()) {
      errors.preferredDate = "Preferred date can't be in the past.";
    }
  }

  if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

function buildMessage(values: FormState) {
  const lines = [
    `Hi Deekshitha Dental Clinic, I'd like to request an appointment.`,
    ``,
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
  ];
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
  if (values.treatment) lines.push(`Reason for visit: ${values.treatment}`);
  if (values.preferredDate) lines.push(`Preferred date: ${values.preferredDate}`);
  if (values.preferredTime) lines.push(`Preferred time: ${values.preferredTime}`);
  if (values.message.trim()) lines.push(``, `Message: ${values.message.trim()}`);
  return lines.join("\n");
}

export function AppointmentForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const message = buildMessage(values);
    const link = buildWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-pine focus:outline-none";
  const labelClass = "text-sm font-medium text-ink";
  const errorClass = "mt-1.5 text-xs font-medium text-red-700";

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formId}-name`}>
            Full name <span className="text-clay">*</span>
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            maxLength={MAX_NAME_LENGTH}
            className={cn(fieldClass, "mt-1.5", errors.name && "border-red-400")}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className={errorClass} role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone number <span className="text-clay">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            inputMode="numeric"
            placeholder="98765 43210"
            className={cn(fieldClass, "mt-1.5", errors.phone && "border-red-400")}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            autoComplete="tel"
          />
          {errors.phone ? (
            <p id={`${formId}-phone-error`} className={errorClass} role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email <span className="text-ink-soft/60">(optional)</span>
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            className={cn(fieldClass, "mt-1.5", errors.email && "border-red-400")}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            autoComplete="email"
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className={errorClass} role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-date`}>
            Preferred date <span className="text-ink-soft/60">(optional)</span>
          </label>
          <input
            id={`${formId}-date`}
            type="date"
            min={todayISO()}
            className={cn(fieldClass, "mt-1.5", errors.preferredDate && "border-red-400")}
            value={values.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? `${formId}-date-error` : undefined}
          />
          {errors.preferredDate ? (
            <p id={`${formId}-date-error`} className={errorClass} role="alert">
              {errors.preferredDate}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-time`}>
            Preferred time <span className="text-ink-soft/60">(optional)</span>
          </label>
          <select
            id={`${formId}-time`}
            className={cn(fieldClass, "mt-1.5")}
            value={values.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
          >
            <option value="">No preference</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formId}-treatment`}>
            Reason for visit <span className="text-ink-soft/60">(optional)</span>
          </label>
          <select
            id={`${formId}-treatment`}
            className={cn(fieldClass, "mt-1.5")}
            value={values.treatment}
            onChange={(e) => update("treatment", e.target.value)}
          >
            <option value="">Not sure / general check-up</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formId}-message`}>
            Message <span className="text-ink-soft/60">(optional)</span>
          </label>
          <textarea
            id={`${formId}-message`}
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            className={cn(fieldClass, "mt-1.5 resize-none", errors.message && "border-red-400")}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${formId}-message-error` : `${formId}-message-hint`}
          />
          <div className="mt-1.5 flex items-center justify-between">
            <p id={`${formId}-message-hint`} className="text-xs text-ink-soft/70">
              Anything else you&apos;d like us to know.
            </p>
            <span className="text-xs text-ink-soft/60">
              {values.message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
          {errors.message ? (
            <p id={`${formId}-message-error`} className={errorClass} role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-pine-light sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send Appointment Request via WhatsApp
          </button>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft/80">
            This opens WhatsApp with your details pre-filled — sending the message lets our
            team know you&apos;d like an appointment. It&apos;s a request, not an automatic booking; we
            will confirm the date and time with you directly.
          </p>
        </div>
      </form>

      {submitted ? (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-pine/20 bg-pine/5 p-5"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine text-cream">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">WhatsApp opened in a new tab</p>
            <p className="mt-1 text-sm text-ink-soft">
              Press send on the pre-filled message to complete your request. If WhatsApp
              didn&apos;t open (some browsers block pop-ups), you can{" "}
              <a
                href={buildWhatsAppLink(buildMessage(values))}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-pine underline underline-offset-2"
              >
                try this link
              </a>{" "}
              or call us directly at{" "}
              <a href={clinic.phone.tel} className="font-medium text-pine underline underline-offset-2">
                {clinic.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-sm text-ink-soft">
        <PhoneIcon className="h-4 w-4 text-clay" />
        Prefer to talk? Call us directly at{" "}
        <a href={clinic.phone.tel} className="font-medium text-pine hover:underline">
          {clinic.phone.display}
        </a>
      </div>
    </div>
  );
}
