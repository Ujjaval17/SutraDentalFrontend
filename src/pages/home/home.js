import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./home.scss";
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
