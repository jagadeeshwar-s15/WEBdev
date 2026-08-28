/**
 * Only one public review on the clinic's Google Business Profile had
 * visible text at the time of research; two further 5-star reviewers were
 * listed with no accompanying text, so we do not fabricate quotes for
 * them. Text is reproduced as published, with only stray double-spacing
 * cleaned up.
 */

export type Review = {
  author: string;
  text: string;
  relativeTime: string;
  rating: 5;
  source: "Google";
};

export const featuredReview: Review = {
  author: "Sachin Shree",
  text: "Great and perfection in work, genuine doctor consulting, experienced doctor for root canal, teeth cap fixing etc.",
  relativeTime: "Google review",
  rating: 5,
  source: "Google",
};

export const otherReviewers = [
  { author: "Vijayalakshmi M", rating: 5 as const },
  { author: "Sanlingam Ravichandran", rating: 5 as const, note: "Local Guide" },
];
