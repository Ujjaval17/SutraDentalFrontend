import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./treatmentDetail.scss";
import SEO from "../../components/seo/SEO";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import OptimizedImage from "../../components/seo/OptimizedImage";
import PageLoader from "../../components/seo/PageLoader";
import API from "../../config";
import {
  allTreatmentsPattern,
  getTreatmentDetailRoute,
  indexPattern,
} from "../../Routes";
import { breadcrumbSchema, medicalProcedureSchema } from "../../seo/schemas";
import { buildCanonical, matchTreatmentBySlug, truncate } from "../../seo/utils";

const TreatmentDetail = () => {
  const { slug } = useParams();
  const locationState = useLocation()?.state;
  const [treatment, setTreatment] = useState(locationState || null);
  const [loading, setLoading] = useState(!locationState);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (locationState?._id) {
      setTreatment(locationState);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API}/list`);
        const match = matchTreatmentBySlug(data, slug);
        if (!cancelled) {
          if (match) setTreatment(match);
          else setNotFound(true);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [slug, locationState]);

  if (loading) return <PageLoader />;

  if (notFound || !treatment) {
    return (
      <main className="treatment-detail-container">
        <SEO title="Treatment not found" description="This treatment could not be found." noindex canonicalPath="/all-treatments" />
        <div className="m-5 text-center">
          <h1>Treatment not found</h1>
          <Link to={allTreatmentsPattern}>View all treatments</Link>
        </div>
      </main>
    );
  }

  const canonicalPath = getTreatmentDetailRoute(treatment._id);
  const name = treatment.treatment_name;
  const description = truncate(treatment.short_desc || treatment.long_desc);
  const breadcrumbs = [
    { name: "Home", url: indexPattern },
    { name: "Treatments", url: allTreatmentsPattern },
    { name, url: canonicalPath },
  ];

  return (
    <article className="treatment-detail-container">
      <SEO
        title={name}
        description={description}
        canonicalPath={canonicalPath}
        image={treatment.image_url}
        jsonLd={[
          breadcrumbSchema(breadcrumbs),
          medicalProcedureSchema({
            name,
            description,
            image: treatment.image_url,
            url: buildCanonical(canonicalPath),
          }),
        ].filter(Boolean)}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="m-5">
        <h1>{name}</h1>
        <div className="treatment-detail-img-container m-auto">
          <OptimizedImage
            src={treatment.image_url}
            alt={name}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="treatment-content mx-auto mt-5">
          <p>{treatment.short_desc}</p>
          <p className="text-start">{treatment.long_desc}</p>
        </div>
      </div>
    </article>
  );
};

export default TreatmentDetail;
