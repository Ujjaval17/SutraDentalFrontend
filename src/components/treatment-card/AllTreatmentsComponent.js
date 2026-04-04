import React, { useEffect, useState } from "react";
import TreatmentCard from "../../components/treatment-card/treatmentCard";
import axios from "axios";
import API from "../../config";
import "./allTreatmentsComponent.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { allTreatmentsPattern } from "../../Routes";

const AllTreatmentsComponent = ({ isDashboard }) => {
  const [TreatmentsList, setTreatmentList] = useState([]);
  const navigate = useNavigate();

  const fetchTreatmentList = async () => {
    try {
      const response = await axios.get(`${API}/list`);
      setTreatmentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTreatmentList();
  }, []);

  return (
    <div className="treatment-list">
      <h1 className="fw-bold text-start my-5">Treatments</h1>
      <div className="treatment-list-container">
        {TreatmentsList?.length ? (
          TreatmentsList?.map((item, index) =>
            isDashboard ? (
              index < 4 && <TreatmentCard treatment={item} />
            ) : (
              <TreatmentCard treatment={item} />
            )
          )
        ) : (
          <p>No Treatments Available</p>
        )}
      </div>
      {isDashboard ? (
        <div className="see-more-treatments my-5">
          <button onClick={() => navigate(allTreatmentsPattern)}>
            See more treatments
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllTreatmentsComponent;
