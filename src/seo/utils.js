import { SITE_NAME, SITE_URL } from "./siteConfig";

/** URL-safe slug from title or id */
export function slugify(text) {
  if (text == null || text === "") return "";
  return String(text)
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildCanonical(pathname = "/") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** SEO title: "Page | Sutra Dental" — avoids duplicate bare site name */
export function formatTitle(pageTitle) {
  if (!pageTitle || pageTitle === SITE_NAME) return SITE_NAME;
  if (pageTitle.includes(SITE_NAME)) return pageTitle;
  return `${pageTitle} | ${SITE_NAME}`;
}

export function truncate(text, max = 160) {
  if (!text) return "";
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function matchBlogBySlug(blogs, slug) {
  if (!slug || !blogs?.length) return null;
  const normalized = slugify(slug);
  return (
    blogs.find((b) => slugify(b.title) === normalized) ||
    blogs.find((b) => b._id === slug) ||
    null
  );
}

export function matchTreatmentBySlug(treatments, slug) {
  if (!slug || !treatments?.length) return null;
  return treatments.find((t) => t._id === slug || slugify(t.treatment_name) === slugify(slug)) || null;
}
