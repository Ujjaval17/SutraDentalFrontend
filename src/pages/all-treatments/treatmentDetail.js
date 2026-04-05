import React from "react";
import { useLocation } from "react-router-dom";
import "./treatmentDetail.scss";

const TreatmentDetail = () => {
  const treatmentData = useLocation()?.state;

  return (
    <div className="treatment-detail-container">
      <div className="m-5">
        <h2>{treatmentData?.treatment_name}</h2>
        <div className="treatment-detail-img-container m-auto">
          <img
            src={treatmentData?.image_url}
            alt={treatmentData?.treatment_name}
          />
        </div>
        <div className="treatment-content mx-auto mt-5">
          <p>{treatmentData?.short_desc}</p>
          <p className="text-start">{treatmentData?.long_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
