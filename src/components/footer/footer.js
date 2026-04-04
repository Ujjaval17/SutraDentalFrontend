import React, { useEffect, useState } from "react";
import "./footer.scss";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  aboutPattern,
  allTreatmentsPattern,
  blogsPattern,
  getTreatmentDetailRoute,
} from "../../Routes";

const Footer = () => {
  const navigate = useNavigate();
  const [treatmentsList, setTreatmentsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      .then((res) => setTreatmentsList(res.data))
      .catch(() => {});
  }, []);

  const quickLinks = [
    { label: "About Me", path: aboutPattern },
    { label: "Treatments", path: allTreatmentsPattern },
    { label: "Health Blog", path: blogsPattern },
  ];

  const handleTreatmentClick = (treatment) => {
    navigate(getTreatmentDetailRoute(treatment._id), { state: treatment });
  };

  return (
    <div className="footer-container">
      <div className="d-flex justify-content-between gap-5">
        <div className="w-100">
          <h4 className="text-start mb-4">Contact Us</h4>
          <div
            className="d-flex justify-content-between gap-3 mb-3 footer-link"
            onClick={() => window.open("https://maps.google.com/?q=Shop+no.04+Spruti+Vihar+Near+Sai+siddhi+chowk+ambegaon+bk+Pune+411046", "_blank")}
          >
            <span>
              <IoLocationSharp />
            </span>
            <p className="text-start fw-bold">
              Shop no.04 Spruti Vihar, Near Sai siddhi chowk, ambegaon bk, pune
              411046, Near sai siddhi chowk, Raghav Nagar, Suvarnayug Nagar,
              Pune, Maharashtra -411046
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>
              <IoMailSharp />
            </span>
            <a href="mailto:dentalsutra@gmail.com" className="footer-email fw-bold">
              dentalsutra@gmail.com
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div>
            <h4 className="mb-4 text-start">Quick Links</h4>
            <ul className="text-start">
              {quickLinks.map((link) => (
                <li
                  key={link.label}
                  className="mb-3 footer-link"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-start">Our Treatments</h4>
            <ul className="text-start">
              {treatmentsList.map((treatment) => (
                <li
                  key={treatment._id}
                  className="mb-3 footer-link"
                  onClick={() => handleTreatmentClick(treatment)}
                >
                  {treatment.treatment_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
