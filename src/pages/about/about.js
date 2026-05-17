import React from "react";
import "./about.scss";
import SEO from "../../components/seo/SEO";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import OptimizedImage from "../../components/seo/OptimizedImage";
import Faqs from "../../components/faqs/faqs";
import aboutDoctorPhoto from "../../images/about-doctor.png";
import { getStaticSeo } from "../../seo/pageSeo";
import { breadcrumbSchema, faqPageSchema } from "../../seo/schemas";
import { FAQ_ITEMS } from "../../seo/faqData";
import { indexPattern } from "../../Routes";

const About = () => {
  const seo = getStaticSeo("about");
  const breadcrumbs = [
    { name: "Home", url: indexPattern },
    { name: "About", url: seo.path },
  ];

  return (
    <article className="about-container">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        jsonLd={[breadcrumbSchema(breadcrumbs), faqPageSchema(FAQ_ITEMS)].filter(Boolean)}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="about-flex">
        <div className="about-img-container col-md-4">
          <OptimizedImage
            src={aboutDoctorPhoto}
            alt="Dr. Khushbu Singh, dental surgeon at Sutra Dental Ahmedabad"
            width={400}
            height={500}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="about-text w-120 text-start col-md-7 mt-3 mt-md-5 pe-0 pe-md-5">
          <h1>Dr. Khushbu Singh</h1>
          <p className="about-role">Dental Surgeon · Sutra Dental, Chandkheda, Ahmedabad</p>
          <h2>Biography</h2>
          <p>
            Dr. Khushbu Singh is a renowned and experienced dental surgeon in
            Ahmedabad. She brings with her an experience of 5+ years and has been
            associated with leading dental practices. A dedicated, compassionate
            doctor who handles challenging cases with the latest technology and
            offers patient-friendly, evidence-based advice while maintaining the
            highest professional and ethical standards.
          </p>
          <h2>Education</h2>
          <p>B.D.S</p>
          <h2>Experience</h2>
          <p>5+ years</p>
        </div>
      </div>
      <Faqs />
    </article>
  );
};

export default About;
