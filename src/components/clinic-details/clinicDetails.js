import React from "react";
import "./clinicDetails.scss";
import moment from "moment";
import clinicImg from "../../images/clinicRoom.jpg"

const ClinicDetails = () => {
  return (
    <div className="clinic-details-container">
      <h1 className="text-start my-5 ms-5 fw-bold">My Clinic</h1>
      <div className="d-flex justify-content-between w-100">
        <div className="clinic-location w-100 mx-5">
          <h4 className="text-start mb-5">Expert Dental Care</h4>
          <div className="d-flex">
            <p className="me-5">Address:</p>
            <p className="text-start">
              Shop no.04 Spruti Vihar, Near Sai siddhi chowk, ambegaon bk, pune
              411046, Near sai siddhi chowk, Raghav Nagar, Suvarnayug Nagar,
              Pune, Maharashtra -411046
            </p>
          </div>
          <div className="clinic-img">
            <img src={clinicImg} alt="" />
          </div>
        </div>
        <div className="vl" />
        <div className="clinic-timings w-100 mx-5">
          <h4 className="text-start">OPD Hours</h4>
          <hr />
          <div>
            {[...Array(7)].map((item, index) => (
              <>
                <div className="d-flex justify-content-between px-4 py-1">
                  <span style={{ color: index === 6 ? "red" : "" }}>
                    {index === 6
                      ? moment.weekdays(0)
                      : moment.weekdays(index + 1)}
                  </span>
                  <span style={{ color: index === 6 ? "red" : "" }}>
                    9:00 AM - 10: 00 PM
                  </span>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
