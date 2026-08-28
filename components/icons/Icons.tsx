type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ToothIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 4c-1.6-1.4-3.6-1.7-5.1-.6C5.2 4.6 4.5 6.6 5 8.6c.4 1.7 1 3.3 1.3 5 .3 1.6.4 3.6 1.6 4.6.9.8 1.8-.2 2.1-1.3.3-1.2.4-2.9 1.3-2.9.9 0 1 1.7 1.3 2.9.3 1.1 1.2 2.1 2.1 1.3 1.2-1 1.3-3 1.6-4.6.3-1.7.9-3.3 1.3-5 .5-2-.2-4-1.9-5.2-1.5-1.1-3.5-.8-5.1.6Z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.5 5 6v5.2c0 4.4 3 7.9 7 9.3 4-1.4 7-4.9 7-9.3V6l-7-2.5Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.9" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function BridgeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 16V9c2-2.5 4.5-3.8 8-3.8S18 6.5 20 9v7" />
      <path d="M4 16h16M7 16v3M12 16v3M17 16v3" />
    </svg>
  );
}

export function ConsultIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.7-3 2.8-4.6 5.5-4.6s4.8 1.6 5.5 4.6" />
      <path d="M16 4.5c1.7.4 3 2 3 3.9 0 1.5-.8 2.8-2 3.5l1 3-3-1.6" />
    </svg>
  );
}

export function CareIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20.5s-7-4.2-9-8.3C1.4 8.9 3 5.8 6 5.2c1.9-.4 3.6.4 6 2.7 2.4-2.3 4.1-3.1 6-2.7 3 .6 4.6 3.7 3 7-2 4.1-9 8.3-9 8.3Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 3h3l1.5 4.5-2 1.8a12 12 0 0 0 6.2 6.2l1.8-2L21 15v3a2 2 0 0 1-2.2 2C10.9 19.4 4.6 13.1 4 5.2A2 2 0 0 1 6 3Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10s-4.5-9.8-10-9.8Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.16 8.16 0 0 1 3.8 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
    >
      <path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8L6.7 20l1-6-4.3-4.2 6-.9 2.6-5.5Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m4 12.5 5 5L20 6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function DirectionsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M21 12 12 3 3 12l9 9 9-9Z" />
      <path d="M12 8v7M9 12l3 3 3-3" />
    </svg>
  );
}

export const treatmentIconMap = {
  tooth: ToothIcon,
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  bridge: BridgeIcon,
  consult: ConsultIcon,
  care: CareIcon,
};
