import React from "react";
import "./about.scss"
import Faqs from "../../components/faqs/faqs";

const About = () => {
  return (
    <div className="about-container">
      <div className="d-flex justify-content-between">
        <div className="about-img-container d-flex justify-content-center align-items-center col-md-4">
          <img src="https://drkushbhusingh.getmy.clinic/_next/image?url=https%3A%2F%2Fremedoapp.com%2Farogya%2Fv1.0%2Fimages%2Fdoctors%2Ffvbmcopxtssrhjpspcczttq.jpeg&w=640&q=75" />
        </div>
        <div className="w-120 text-start col-md-7 mt-5 pe-5">
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
