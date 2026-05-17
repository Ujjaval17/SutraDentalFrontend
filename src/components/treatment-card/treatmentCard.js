import React from "react";
import { Link } from "react-router-dom";
import "./treatmentCard.scss";
import { getTreatmentDetailRoute } from "../../Routes";
import OptimizedImage from "../seo/OptimizedImage";

const TreatmentCard = (props) => {
  const { treatment } = props;
  const name = treatment?.treatment_name || "Dental treatment";

  return (
    <Link
      to={getTreatmentDetailRoute(treatment?._id)}
      state={treatment}
      className="treatment-card cursor-pointer"
      aria-label={`Learn more about ${name}`}
    >
      <div className="treatment-img">
        <OptimizedImage
          className="my-auto"
          src={treatment?.image_url}
          alt={name}
          loading="lazy"
        />
      </div>
      <h3 className="fw-bold h5">{name}</h3>
      <p>{treatment?.short_desc}</p>
    </Link>
  );
};

export default TreatmentCard;
