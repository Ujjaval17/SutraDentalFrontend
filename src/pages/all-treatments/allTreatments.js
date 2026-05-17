import React from "react";
import "./allTreatments.scss";
import SEO from "../../components/seo/SEO";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import Faqs from "../../components/faqs/faqs";
import AllTreatmentsComponent from "../../components/treatment-card/AllTreatmentsComponent";
import { getStaticSeo } from "../../seo/pageSeo";
import { breadcrumbSchema, faqPageSchema } from "../../seo/schemas";
import { FAQ_ITEMS } from "../../seo/faqData";
import { indexPattern } from "../../Routes";

const AllTreatments = () => {
  const seo = getStaticSeo("treatments");
  const breadcrumbs = [
    { name: "Home", url: indexPattern },
    { name: "Treatments", url: seo.path },
  ];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        jsonLd={[breadcrumbSchema(breadcrumbs), faqPageSchema(FAQ_ITEMS)].filter(Boolean)}
      />
      <Breadcrumbs items={breadcrumbs} />
      <AllTreatmentsComponent />
      <Faqs />
    </>
  );
};

export default AllTreatments;
