import React, { useEffect, useState } from "react";
import TreatmentCard from "../../components/treatment-card/treatmentCard";
import axios from "axios";
import API from "../../config";
import "./allTreatmentsComponent.scss";
import { useNavigate } from "react-router";
import { allTreatmentsPattern } from "../../Routes";
import Skeleton from "@mui/material/Skeleton";

const TreatmentCardSkeleton = () => (
  <div className="treatment-card treatment-card--skeleton">
    <div className="treatment-img">
      <Skeleton variant="rounded" width="100%" height="100%" animation="wave" />
    </div>
    <Skeleton width="75%" height={24} animation="wave" />
    <Skeleton width="90%" animation="wave" />
    <Skeleton width="60%" animation="wave" />
  </div>
);

const AllTreatmentsComponent = ({ isDashboard }) => {
  const [TreatmentsList, setTreatmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTreatmentList = async () => {
    try {
      const response = await axios.get(`${API}/list`);
      setTreatmentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTreatmentList();
  }, []);

  const skeletonCount = isDashboard ? 4 : 8;

  return (
    <div className="treatment-list">
      <h1 className="fw-bold text-start my-5">Treatments</h1>
      <div className="treatment-list-container">
        {loading ? (
          Array.from({ length: skeletonCount }, (_, i) => (
            <TreatmentCardSkeleton key={i} />
          ))
        ) : TreatmentsList?.length ? (
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
