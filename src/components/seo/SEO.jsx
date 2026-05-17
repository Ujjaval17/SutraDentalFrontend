import React from "react";
import { Helmet } from "react-helmet-async";
import {
  AUTHOR,
  BUSINESS,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  LANGUAGE,
  LOCALE,
  SITE_NAME,
} from "../../seo/siteConfig";
import { buildCanonical, formatTitle } from "../../seo/utils";

/**
 * Enterprise SEO head manager — unique per-page metadata + JSON-LD.
 */
const SEO = ({
  title,
  description,
  canonicalPath,
  canonicalUrl,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots,
  noindex = false,
  nofollow = false,
  keywords = DEFAULT_KEYWORDS,
  jsonLd,
  children,
}) => {
  const fullTitle = formatTitle(title || SITE_NAME);
  const canonical = canonicalUrl || buildCanonical(canonicalPath || "/");

  let robotsContent = robots;
  if (!robotsContent) {
    const parts = [];
    parts.push(noindex ? "noindex" : "index");
    parts.push(nofollow ? "nofollow" : "follow");
    robotsContent = parts.join(", ");
  }

  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang={LANGUAGE} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={AUTHOR} />
      {keywords?.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="robots" content={robotsContent} />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Chandkheda, Ahmedabad" />
      <meta
        name="geo.position"
        content={`${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`}
      />
      <meta name="ICBM" content={`${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`} />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content={LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      {children}
    </Helmet>
  );
};

export default SEO;
