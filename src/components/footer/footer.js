import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  IoLocationSharp,
  IoMailSharp,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import axios from "axios";
import API from "../../config";
import {
  aboutPattern,
  allTreatmentsPattern,
  blogsPattern,
  getTreatmentDetailRoute,
} from "../../Routes";

const Footer = () => {
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

  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="w-100">
          <h2 className="text-start mb-4 footer-title h4">Contact Us</h2>
          <address className="footer-contact not-italic">
            <div className="d-flex justify-content-between gap-3 footer-link">
              <span className="footer-contact__icon" aria-hidden>
                <IoLocationSharp />
              </span>
              <a
                href="https://maps.google.com/?q=2nd+floor+star+plaza+Ahmedabad-Mehsana+highway+Opp+sharda+petroleum+Chandkheda+Ahmedabad+382424"
                target="_blank"
                rel="noopener noreferrer"
                className="text-start fw-bold mb-0"
              >
                2nd floor, star plaza, Ahmedabad-Mehsana highway, Opp sharda
                petroleum, Chandkheda, Ahmedabad-382424.
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="footer-contact__icon" aria-hidden>
                <IoMailSharp />
              </span>
              <a href="mailto:dentalsutra@gmail.com" className="footer-email fw-bold">
                dentalsutra@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="footer-contact__icon" aria-hidden>
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
              <span className="footer-contact__icon" aria-hidden>
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
          </address>
        </div>
        <nav className="footer-inner-columns" aria-label="Footer navigation">
          <div>
            <h2 className="mb-4 text-start footer-title h4">Quick Links</h2>
            <ul className="text-start">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-3">
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-start footer-title h4">Our Treatments</h2>
            <ul className="text-start">
              {treatmentsList.map((treatment) => (
                <li key={treatment._id} className="mb-3">
                  <Link
                    to={getTreatmentDetailRoute(treatment._id)}
                    state={treatment}
                    className="footer-link"
                  >
                    {treatment.treatment_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <p className="footer-copy">
        <small>© {new Date().getFullYear()} Sutra Dental. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
