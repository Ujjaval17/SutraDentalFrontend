import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./home.scss";
import { ImLocation } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import GoogleRating from "../../images/GoogleRating.svg";
import GoogleReview from "../../images/GoogleReview.svg";
import Exp from "../../images/Exp.svg";
import Reviews from "../../components/Reviews/reviews";
import ClinicDetails from "../../components/clinic-details/clinicDetails";
import Faqs from "../../components/faqs/faqs";
import Blogs from "../blogs/blog";
import AllTreatmentsComponent from "../../components/treatment-card/AllTreatmentsComponent";
import Banner from "../../components/banner/banner";
import AppointmentForm from "../appointment-form/appointmentForm";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.state]);

  return (
    <div className="home-main-container">
      <Banner />
      <AllTreatmentsComponent isDashboard={true} />
      <AppointmentForm />
      <Blogs page={"home"} />
    </div>
  );
};

export default Home;
