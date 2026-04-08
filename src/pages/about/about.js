import React from "react";
import "./about.scss";
import Faqs from "../../components/faqs/faqs";
import aboutDoctorPhoto from "../../images/about-doctor.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-flex">
        <div className="about-img-container col-md-4">
          <img src={aboutDoctorPhoto} alt="Dr. Khushbu Singh" />
        </div>
        <div className="about-text w-120 text-start col-md-7 mt-3 mt-md-5 pe-0 pe-md-5">
          <h3>Dr. Khushbu Singh</h3>
          <p>Dental Surgeon</p>
          <h3>Biography</h3>
          <p>
            Dr. Khushbu Singh is a renowned and experienced Dental surgeon in
            Pune. She brings with her an experience of 5+ years and has been
            associated with some of the best hospitals in Pune. A dedicated
            compassionate doctor who handles many challenging cases with the
            latest cutting edge technology. She offers patient-friendly
            scientific advice to your problems while maintaining the highest
            professional and ethical values.
          </p>
          <h3>Education</h3>
          <p>B.D.S</p>
          <h3>Experience</h3>
          <p>5+ years</p>
        </div>
      </div>
      <Faqs/>
    </div>
  );
};

export default About;
