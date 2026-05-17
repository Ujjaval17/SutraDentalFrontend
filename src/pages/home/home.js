import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./home.scss";
import SEO from "../../components/seo/SEO";
import Blogs from "../blogs/blog";
import AllTreatmentsComponent from "../../components/treatment-card/AllTreatmentsComponent";
import Banner from "../../components/banner/banner";
import AppointmentForm from "../appointment-form/appointmentForm";
import SmileExperts from "../../components/smile-experts/SmileExperts";
import HomeClinicSection from "../../components/home-clinic/HomeClinicSection";
import LocalSeoSection from "../../components/local-seo/LocalSeoSection";
import Reviews from "../../components/Reviews/reviews";
import { getStaticSeo } from "../../seo/pageSeo";
import { organizationSchema, websiteSchema } from "../../seo/schemas";
import { GOOGLE_REVIEWS } from "../../seo/reviewsData";

const Home = () => {
  const location = useLocation();
  const seo = getStaticSeo("home");

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.state]);

  const jsonLd = [
    organizationSchema({ reviews: GOOGLE_REVIEWS }),
    websiteSchema(),
  ];

  return (
  <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        jsonLd={jsonLd}
      />
      <div className="home-main-container">
        <Banner />
        <LocalSeoSection />
        <AllTreatmentsComponent isDashboard={true} />
        <HomeClinicSection />
        <Reviews />
        <AppointmentForm />
        <SmileExperts />
        <Blogs page={"home"} />
      </div>
    </>
  );
};

export default Home;
