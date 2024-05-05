import React from "react";

const TreatmentDetail = () => {

    const treatmentData = useLocation()?.state;

  return (
    <div className="treatment-detail-container">
      <div className="m-5">
        <h2>{treatmentData?.title}</h2>
        <div className="treatment-detail-img-container m-auto">
          <img src={treatmentData?.image} />
        </div>
        <div className="treatment-content mx-auto mt-5">
          <p>{treatmentData?.shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
