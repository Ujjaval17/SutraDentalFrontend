import {
  BUSINESS,
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
} from "./siteConfig";
import { buildCanonical } from "./utils";

const SCHEMA_CONTEXT = "https://schema.org";

export function organizationSchema(options = {}) {
  const { reviews, ratingValue = 5, reviewCount } = options;
  const schema = {
    "@context": SCHEMA_CONTEXT,
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    hasMap: BUSINESS.mapsUrl,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    sameAs: BUSINESS.sameAs,
    medicalSpecialty: "Dentistry",
    knowsAbout: BUSINESS.services,
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Book dental appointment",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/#appointment`,
          inLanguage: "en-IN",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    ],
  };

  if (reviews?.length) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: reviewCount || reviews.length,
      bestRating: 5,
      worstRating: 1,
    };
    schema.review = reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating || 5,
        bestRating: 5,
      },
      reviewBody: r.description,
      itemReviewed: { "@id": `${SITE_URL}/#organization` },
    }));
  }

  return schema;
}

export function websiteSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items) {
  if (!items?.length) return null;
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : buildCanonical(item.url),
    })),
  };
}

export function faqPageSchema(faqs) {
  const entries = (faqs || []).filter((f) => f.answer);
  if (!entries.length) return null;
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: entries.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema({ title, description, image, datePublished, url }) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: datePublished || undefined,
    author: {
      "@type": "Person",
      name: "Dr. Khushbu Singh",
      jobTitle: "Dental Surgeon",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function medicalProcedureSchema({ name, description, image, url }) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "MedicalProcedure",
    name,
    description,
    image,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

/** @deprecated Use organizationSchema({ reviews }) — kept for compatibility */
export function aggregateReviewSchema(opts) {
  return organizationSchema(opts);
}

export function softwareApplicationSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    description: "Online appointment booking for Sutra Dental clinic.",
  };
}
