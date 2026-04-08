import React, { useEffect, useState } from "react";
import "./footer.scss";
import {
  IoLocationSharp,
  IoMailSharp,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../config";
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
      .get(`${API}/list`)
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
      <div className="footer-columns">
        <div className="w-100">
          <h4 className="text-start mb-4 footer-title">Contact Us</h4>
          <div className="footer-contact">
            <div
              className="d-flex justify-content-between gap-3 footer-link"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=2nd+floor+star+plaza+Ahmedabad-Mehsana+highway+Opp+sharda+petroleum+Chandkheda+Ahmedabad+382424",
                  "_blank",
                )
              }
            >
              <span className="footer-contact__icon">
                <IoLocationSharp />
              </span>
              <p className="text-start fw-bold mb-0">
                2nd floor, star plaza, Ahmedabad-Mehsana highway, Opp sharda
                petroleum, Chandkheda, Ahmedabad-382424.
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="footer-contact__icon">
                <IoMailSharp />
              </span>
              <a
                href="mailto:dentalsutra@gmail.com"
                className="footer-email fw-bold"
              >
                dentalsutra@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="footer-contact__icon">
                <IoLogoInstagram />
              </span>
              <a
                href="https://www.instagram.com/sutra_dental/"
                className="footer-email fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="footer-contact__icon">
                <IoLogoWhatsapp />
              </span>
              <a
                href="https://wa.me/918010556229"
                className="footer-email fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp · 8010556229
              </a>
            </div>
          </div>
        </div>
        <div className="footer-inner-columns">
          <div>
            <h4 className="mb-4 text-start footer-title">Quick Links</h4>
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
            <h4 className="mb-4 text-start footer-title">Our Treatments</h4>
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
