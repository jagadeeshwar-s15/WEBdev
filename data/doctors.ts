/**
 * Verified against Medhos (clinic-submitted listing) and Bajaj Finserv
 * Health (independent doctor-booking platform) — both agree on
 * qualification and years of experience.
 */

export type Doctor = {
  name: string;
  credentials: string;
  role: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  photo: string | null;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. S. Gayathri Devi",
    credentials: "BDS",
    role: "Dentist & Dental Surgeon",
    experienceYears: 9,
    languages: ["Tamil", "English"],
    bio: "Dr. S. Gayathri Devi is the dentist and dental surgeon at Deekshitha Dental Clinic, with 9 years of clinical experience in general and restorative dentistry. Patients consult her for routine dental care as well as procedures such as root canal treatment and crown and bridge work.",
    // No licensed clinic photo available yet — see public/images/doctors.
    photo: null,
  },
];
