import React from "react";
import { IoLocationOutline, IoCallOutline, IoNavigateOutline } from "react-icons/io5";
import { BUSINESS, SITE_NAME } from "../../seo/siteConfig";
import "./LocalSeoSection.scss";

const LocalSeoSection = () => {
  const reviewUrl = BUSINESS.googleBusinessUrl
    ? `${BUSINESS.googleBusinessUrl.replace(/\/$/, "")}/review`
    : null;

  return (
    <section
      className="local-seo"
      id="local-dentist"
      aria-labelledby="local-seo-heading"
    >
      <div className="local-seo__inner">
        <header className="local-seo__header">
          <h2 id="local-seo-heading">
            Dental clinic in Chandkheda, Ahmedabad
          </h2>
          <p className="local-seo__lead">
            {SITE_NAME} is a full-service dental clinic on the Ahmedabad–Mehsana
            highway in Chandkheda — trusted for family dentistry, implants,
            orthodontics, and painless treatments with Dr. Khushbu Singh and
            specialist consultants.
          </p>
        </header>

        <div className="local-seo__grid">
          <div className="local-seo__card">
            <h3 className="local-seo__card-title">Areas we serve</h3>
            <p className="local-seo__text">
              Patients visit us from across North Ahmedabad, including:
            </p>
            <ul className="local-seo__areas">
              {BUSINESS.areaServed.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="local-seo__card">
            <h3 className="local-seo__card-title">Find us on Google Maps</h3>
            <address className="local-seo__address not-italic">
              <IoLocationOutline aria-hidden />
              <span>
                {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality},{" "}
                {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}
              </span>
            </address>
            <div className="local-seo__actions">
              <a
                href={BUSINESS.mapsUrl}
                className="local-seo__btn local-seo__btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoNavigateOutline aria-hidden />
                Get directions
              </a>
              <a href={`tel:+91${BUSINESS.telephoneDisplay}`} className="local-seo__btn">
                <IoCallOutline aria-hidden />
                Call {BUSINESS.telephoneDisplay}
              </a>
              {reviewUrl && (
                <a
                  href={reviewUrl}
                  className="local-seo__btn local-seo__btn--review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a Google review
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="local-seo__footnote">
          Searching for a <strong>dentist near me</strong> or{" "}
          <strong>dental clinic in Chandkheda</strong>? Book online below or
          walk in during OPD hours (Mon–Sat).
        </p>
      </div>
    </section>
  );
};

export default LocalSeoSection;
