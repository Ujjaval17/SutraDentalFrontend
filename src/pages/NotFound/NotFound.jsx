import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/seo/SEO";
import { getStaticSeo } from "../../seo/pageSeo";
import { indexPattern } from "../../Routes";
import "./NotFound.scss";

const NotFound = () => {
  const seo = getStaticSeo("notFound");

  return (
    <main className="not-found">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        noindex
      />
      <h1>404 — Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <Link to={indexPattern} className="not-found__link">
        Return to home
      </Link>
    </main>
  );
};

export default NotFound;
