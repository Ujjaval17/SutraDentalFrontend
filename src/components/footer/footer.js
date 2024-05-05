import React from "react";
import "./footer.scss";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const TreatmentsList = [
    "Dental Fillings",
    "Orthodontic Treatment/Braces",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Dental Implants",
    "Pediatric Dentistry",
    "Dentures",
    "Cosmetic Dentistry",
  ];
  return (
    <div className="footer-container">
      <div className="d-flex justify-content-between gap-5">
        <div className="w-100">
          <h4 className="text-start mb-4">Contact Us</h4>
          <div className="d-flex justify-content-between gap-3 ">
            <span>
              <IoLocationSharp />
            </span>
            <p className="text-start fw-bold">
              Shop no.04 Spruti Vihar, Near Sai siddhi chowk, ambegaon bk, pune
              411046, Near sai siddhi chowk, Raghav Nagar, Suvarnayug Nagar,
              Pune, Maharashtra -411046
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div>
            <h4 className="mb-4 text-start">Quick Links</h4>
            <ul className="text-start">
              <li className="mb-3 cursor-pointer">About Me</li>
              <li className="mb-3 cursor-pointer">Treatments</li>
              <li className="mb-3 cursor-pointer">Health Blog</li>
              <li className="mb-3 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-start">Our Treatments</h4>
            <div>
              <ul className="text-start">
                {TreatmentsList?.map((item, index) => (
                  <li className="mb-3 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
