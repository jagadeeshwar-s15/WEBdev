/**
 * Single source of truth for verified Deekshitha Dental Clinic information.
 *
 * Every field here was cross-checked against at least one public listing
 * (Google Business Profile, Medhos, Bajaj Finserv Health) as of the
 * `verifiedOn` date below. Nothing here is invented. Where the clinic has
 * not published something (e.g. an email address or a full treatment
 * price list), the field is simply omitted rather than guessed at.
 *
 * If any of this changes (new phone number, updated hours, etc.), update
 * it here first — every page reads from this file.
 */

export const clinic = {
  name: "Deekshitha Dental Clinic",
  tagline: "Your Dental Worries Ends Here",
  city: "Coimbatore",
  verifiedOn: "2026-08-29",

  address: {
    line1: "No. 816, VKK Menon Road",
    line2: "Near Kavya Medicals, Siddhapudur",
    locality: "New Siddhapudur, Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641044",
    country: "IN",
    full: "No. 816, VKK Menon Road, Near Kavya Medicals, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu 641044",
  },

  phone: {
    display: "94883 88742",
    e164: "+919488388742",
    tel: "tel:+919488388742",
  },

  whatsapp: {
    e164: "919488388742",
  },

  // No clinic-published email address could be verified — omitted rather than invented.
  email: null,

  hours: [
    { day: "Monday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "2:00 PM", eveningOpen: "5:00 PM", eveningClose: "8:00 PM" },
    { day: "Sunday", open: null, close: null, eveningOpen: null, eveningClose: null },
  ],

  mapsListingUrl:
    "https://www.google.com/maps/search/?api=1&query=Deekshitha+Dental+Clinic+Siddhapudur+Coimbatore",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Deekshitha Dental Clinic, No. 816 VKK Menon Road, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu 641044"
    ) +
    "&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Deekshitha Dental Clinic, No. 816 VKK Menon Road, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu 641044"
    ),

  rating: {
    value: 5.0,
    count: 15,
    source: "Google",
    // Ratings change over time — this is a snapshot, not a live feed.
    asOf: "2026-08-29",
  },

  socials: {
    // Public page found under this exact clinic name and city; content on the
    // page itself is minimal (no verifiable posts, hours or follower count).
    facebook: "https://www.facebook.com/p/Deekshitha-Dental-clinic-100076135660665/",
  },

  // No clinic-operated website existed prior to this project.
  hasExistingWebsite: false,
} as const;

export type ClinicHours = (typeof clinic.hours)[number];
