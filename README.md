# Deekshitha Dental Clinic

🚀 Live Website: webdev-lemon.vercel.app

## Description

The official website for Deekshitha Dental Clinic, a dental practice in
Siddhapudur, Coimbatore, led by Dr. S. Gayathri Devi (BDS). The site gives
patients everything they need to decide, trust, and get in touch: who the
clinic is, what it treats, what other patients say, and a fast path to
booking an appointment by WhatsApp or phone.

This was built as a real client deliverable, not a template. Every factual
claim on the site — the address, phone number, hours, doctor's
qualifications, and the Google rating — was verified against public sources
(the clinic's Google Business Profile, the Medhos and Bajaj Finserv Health
listings) before being written into the copy. Where something couldn't be
verified (a full treatment list, clinic photos, pricing), the site says so
explicitly instead of inventing it — see [Content & Assets](#content--assets)
and the audit table below.

## Features

- **Seven purposeful pages** — Home, About (clinic + doctor profile),
  Treatments, Reviews, FAQs, Contact, and a dedicated Appointment page —
  instead of a padded eight-page template with thin content on each.
- **Working appointment enquiry flow** — validates the form client-side,
  then opens a pre-filled WhatsApp message to the clinic's real number.
  No fake "message sent" screen and no backend to maintain; a graceful
  fallback link and phone number are shown in case a browser blocks the
  pop-up.
- **Honest treatments section** — treatments backed by an actual patient
  review or listing are shown as confirmed; general-dentistry services
  that couldn't be verified are clearly labelled "pending clinic
  confirmation" rather than presented as fact.
- **Google review, shown straight** — the one public review with visible
  text is quoted verbatim with attribution; the clinic's live 5.0★ (15
  reviews) rating links out to Google rather than being padded with
  invented testimonials.
- **Live Google Maps embed** — resolves to the clinic's actual pin, no API
  key required.
- **Mobile action bar** — persistent Call / WhatsApp / Appointment bar on
  small screens, since most patients will arrive here from a phone.
- **Subtle scroll-reveal animations** — built with `IntersectionObserver`
  and CSS transitions (no animation library), and disabled automatically
  under `prefers-reduced-motion`.
- **SEO infrastructure** — per-page metadata, Open Graph tags, canonical
  URLs, a generated `sitemap.xml` and `robots.txt`, and `Dentist` /
  `FAQPage` JSON-LD structured data built from the same verified data file
  everything else reads from.
- **Accessible by construction** — semantic landmarks, a skip-to-content
  link, visible focus states in the brand color, keyboard-operable nav and
  FAQ accordion, and WCAG AA-checked text contrast throughout (see
  [Accessibility](#accessibility)).

## Design Approach

The brief was explicit: don't ship another blue-and-white medical
template. The visual identity here is a warm ivory background with a deep
pine-teal primary color and a burnt-terracotta accent, paired with
[Fraunces](https://fonts.google.com/specimen/Fraunces) (a warm editorial
serif) for headings and [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
for body text — closer to premium healthcare editorial design than a
typical clinic template, and deliberately different in palette, type, and
layout from the reference site studied during research
([drdilipdentalcentre.com](https://drdilipdentalcentre.com/), used only for
structural inspiration — nothing was copied from it).

Because the clinic is a single-doctor practice with a genuinely small,
verifiable footprint (no multi-branch network, no large photo library, no
published price list), the site leans into that rather than padding it
out: no gallery page was built since there are no licensed clinic photos
to fill it with yet (the folder structure is ready for real ones — see
below), and the Treatments page is explicit about what's confirmed versus
what's still awaiting the clinic's sign-off.

## Technology

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- No UI or animation libraries — components and the scroll-reveal effect
  are hand-built to keep the dependency footprint minimal

## Project Structure

```text
deekshitha-dental-clinic/
├── app/
│   ├── layout.tsx           # Fonts, global metadata, Dentist JSON-LD
│   ├── page.tsx              # Home
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── treatments/page.tsx
│   ├── reviews/page.tsx
│   ├── faq/page.tsx          # + FAQPage JSON-LD
│   ├── contact/page.tsx
│   └── appointment/page.tsx
├── components/
│   ├── layout/                # Navbar, Footer, MobileActionBar
│   ├── home/                  # Homepage sections
│   ├── shared/                 # Button, Container, SectionHeading, cards, Reveal, ...
│   ├── appointment/AppointmentForm.tsx
│   ├── contact/MapEmbed.tsx
│   └── icons/Icons.tsx         # Hand-drawn icon set
├── data/                       # clinic.ts, doctors.ts, treatments.ts, reviews.ts, faqs.ts
├── lib/                        # utils, site config, WhatsApp link builder, JSON-LD
├── public/images/               # clinic/ doctors/ treatments/ gallery/ (placeholders — see below)
└── .env.example
```

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the real values before
deploying:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | For production | Base URL used for canonical links, Open Graph tags, `sitemap.xml` and `robots.txt`. Falls back to a placeholder locally. |

No API keys are required to run this project — the Google Maps embed uses
a plain query URL, and the appointment "form" hands off to `wa.me` rather
than calling a backend.

## Development

```bash
npm run dev      # start the dev server (Turbopack)
npm run lint     # ESLint
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is set up for [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repository.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable (see above) with
   the real production domain.
4. Deploy.
5. Once live, attach a custom domain in Vercel's project settings if the
   clinic has one.
6. Re-test the production URL end to end (forms, tel/WhatsApp links, map,
   navigation) before sharing it with the clinic.

## Content & Assets

Real clinic photography does not exist yet, so no stock or third-party
images were used anywhere on the site (the reference site's images are
copyrighted to that business and were never used or copied). Instead:

- `public/images/clinic/`, `doctors/`, `treatments/`, `gallery/` are
  pre-organized and ready — drop licensed photos in and reference them
  from the relevant component.
- The doctor's profile currently shows initials in place of a photo
  (`components/shared/DoctorCard.tsx`).
- All clinic facts (address, phone, hours, doctor credentials, rating)
  live in one place, [`data/clinic.ts`](data/clinic.ts) and
  [`data/doctors.ts`](data/doctors.ts) — update them there and every page
  that references them updates automatically.
- [`data/treatments.ts`](data/treatments.ts) marks each entry
  `confirmed: true/false` — flip a treatment to `true` once the clinic
  confirms it, or delete entries that don't apply.

## SEO

- Unique `<title>` and meta description per page via Next.js's Metadata
  API, with a shared template in `app/layout.tsx`.
- Open Graph and Twitter card metadata.
- Canonical URL on every route.
- `Dentist` JSON-LD structured data (name, address, phone, hours, verified
  aggregate rating) in the root layout, and `FAQPage` structured data on
  `/faq` — built only from verified fields in `data/clinic.ts`.
- Generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt`
  (`app/robots.ts`).
- Copy naturally targets local-search phrasing ("dentist in Coimbatore",
  "dental clinic in Coimbatore") without keyword stuffing.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a logical
  heading hierarchy on every page.
- A "Skip to content" link, visible on keyboard focus.
- Visible focus rings (`:focus-visible`) in the brand accent color across
  every interactive element.
- The FAQ accordion and mobile nav are fully keyboard-operable, with
  correct `aria-expanded` / `aria-controls` wiring.
- Form fields use associated `<label>`s, `aria-invalid`, and
  `aria-describedby` to link inputs to their error messages.
- All animation respects `prefers-reduced-motion`.
- Text/background color pairs were checked against WCAG AA (4.5:1 for
  body text); the accent color was deliberately darkened from its first
  draft after it measured 3.68:1 against the cream background.

## Author

```text
Jagadeeshwar
https://github.com/jagadeeshwar-s15
```
