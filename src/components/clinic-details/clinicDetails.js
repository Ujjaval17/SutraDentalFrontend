import React, { useEffect, useState } from 'react';
import "./clinicDetails.scss";
import moment from "moment";
import axios from 'axios';

const ClinicDetails = () => {
  const [clinicDetails, setClinicDetails] = useState(null);

  useEffect(() => {
    const fetchClinicDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clinic-details');
        setClinicDetails(response.data);
      } catch (error) {
        console.error('Error fetching clinic details:', error);
      }
    };

    fetchClinicDetails();
  }, []);

  if (!clinicDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="clinic-details-container">
      <h1 className="text-start my-5 ms-5 fw-bold">{clinicDetails?.name}</h1>
      <div className="d-flex justify-content-between w-100">
        <div className="clinic-location w-100 mx-5">
          <h4 className="text-start mb-5">Expert Dental Care</h4>
          <div className="d-flex">
            <p className="me-5">Address:</p>
            <p className="text-start">{clinicDetails.address}</p>
          </div>
          <div className="clinic-img">
            <img src={clinicDetails.imageUrl} alt="Clinic" />
          </div>
        </div>
        <div className="vl" />
        <div className="clinic-timings w-100 mx-5">
          <h4 className="text-start">OPD Hours</h4>
          <hr />
          <div>
            {clinicDetails.opdHours.map((item, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between px-4 py-1">
                  <span style={{ color: item.day === 'Sunday' ? "red" : "" }}>
                    {item.day}
                  </span>
                  <span style={{ color: item.day === 'Sunday' ? "red" : "" }}>
                    {item.day === 'Sunday' ? "Closed" :(item?.opening_time +" - " + item?.closing_time)}
                  </span>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
