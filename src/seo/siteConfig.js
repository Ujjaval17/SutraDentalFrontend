/**
 * Central site / business configuration for SEO, JSON-LD, and canonical URLs.
 * Override via REACT_APP_SITE_URL in .env.production
 */
const trimSlash = (url) => String(url || "").replace(/\/+$/, "");

export const SITE_URL =
  trimSlash(process.env.REACT_APP_SITE_URL) || "https://www.sutradental.com";

export const SITE_NAME = "Sutra Dental";
export const SITE_TAGLINE = "The Sutra of your smile";
export const DEFAULT_DESCRIPTION =
  "Sutra Dental — premium dental care by Dr. Khushbu Singh in Chandkheda, Ahmedabad. Book appointments for implants, orthodontics, cosmetic dentistry, and family dental treatments.";

/** Add public/og-image.png (1200×630) for best social previews; favicon used as fallback */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

export const LOCALE = "en_IN";
export const LANGUAGE = "en";

const googleBusinessUrl = process.env.REACT_APP_GOOGLE_BUSINESS_URL?.trim() || "";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Sutra Dental",
  description: DEFAULT_DESCRIPTION,
  email: "dentalsutra@gmail.com",
  telephone: "+91-8010556229",
  telephoneDisplay: "8010556229",
  priceRange: "$$",
  image: DEFAULT_OG_IMAGE,
  logo: `${SITE_URL}/favicon.png`,
  mapsUrl:
    process.env.REACT_APP_GOOGLE_MAPS_URL ||
    "https://maps.google.com/?q=Sutra+Dental+Star+Plaza+Chandkheda+Ahmedabad+382424",
  googleBusinessUrl,
  address: {
    streetAddress:
      "2nd floor, Star Plaza, Ahmedabad-Mehsana Highway, Opp. Sharda Petroleum",
    addressLocality: "Chandkheda",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN",
  },
  geo: {
    latitude: 23.1124,
    longitude: 72.5714,
  },
  sameAs: [
    ...(googleBusinessUrl ? [googleBusinessUrl] : []),
    "https://www.instagram.com/sutra_dental/",
    "https://wa.me/918010556229",
  ],
  openingHours: ["Mo-Sa 10:00-20:00"],
  /** Neighborhoods — used for on-page local SEO (match how patients search) */
  areaServed: [
    "Chandkheda",
    "Motera",
    "Gota",
    "Tragad",
    "New Chandkheda",
    "Ahmedabad",
  ],
  services: [
    "Dental implants",
    "Root canal treatment",
    "Teeth whitening",
    "Orthodontics",
    "Pediatric dentistry",
    "Cosmetic dentistry",
    "Dental cleaning",
  ],
};

export const DEFAULT_KEYWORDS = [
  "dental clinic near me",
  "dentist near me Chandkheda",
  "best dental clinic Chandkheda",
  "dentist Ahmedabad",
  "dental clinic Chandkheda",
  "Dr Khushbu Singh dentist",
  "dental implants Ahmedabad",
  "cosmetic dentistry Ahmedabad",
  "orthodontist Ahmedabad",
  "pediatric dentist Ahmedabad",
  "Sutra Dental",
];

export const AUTHOR = "Dr. Khushbu Singh";
