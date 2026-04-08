import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config";
import Skeleton from "@mui/material/Skeleton";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import "./HomeClinicSection.scss";

const dayAbbrev = (day) => (day ? day.slice(0, 3).toUpperCase() : "");

const HomeClinicSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API}/api/clinic-details`);
        if (!cancelled) setData(res.data);
      } catch (e) {
        if (!cancelled) {
          console.error("Home clinic section:", e);
          setError("Unable to load clinic information.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error && !data) {
    return (
      <section className="home-clinic" id="clinic" aria-labelledby="home-clinic-heading">
        <div className="home-clinic__inner">
          <p className="home-clinic__error" role="alert">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="home-clinic" id="clinic" aria-labelledby="home-clinic-heading">
      <div className="home-clinic__inner">
        <header className="home-clinic__header">
          <span className="home-clinic__eyebrow">Plan your visit</span>
          <h2 id="home-clinic-heading" className="home-clinic__title">
            {loading ? (
              <Skeleton width={280} height={40} sx={{ bgcolor: "rgba(15, 23, 42, 0.08)" }} />
            ) : (
              data?.name || "Our clinic"
            )}
          </h2>
          <p className="home-clinic__subtitle">
            Location, timings, and everything you need before you arrive.
          </p>
        </header>

        <div className="home-clinic__grid">
          <div className="home-clinic__visual">
            {loading ? (
              <Skeleton variant="rounded" className="home-clinic__img-skeleton" animation="wave" />
            ) : (
              <div className="home-clinic__photo-frame">
                <img
                  src={data?.imageUrl}
                  alt={data?.name ? `${data.name} clinic` : "Clinic"}
                  className="home-clinic__photo"
                />
                <div className="home-clinic__photo-shine" aria-hidden />
              </div>
            )}
          </div>

          <div className="home-clinic__panel">
            <div className="home-clinic__card home-clinic__card--address">
              <div className="home-clinic__card-icon" aria-hidden>
                <IoLocationOutline />
              </div>
              <div>
                <h3 className="home-clinic__card-title">Address</h3>
                {loading ? (
                  <>
                    <Skeleton
                      width="90%"
                      height={20}
                      sx={{ mb: 1, bgcolor: "rgba(15, 23, 42, 0.06)" }}
                    />
                    <Skeleton
                      width="70%"
                      height={20}
                      sx={{ bgcolor: "rgba(15, 23, 42, 0.06)" }}
                    />
                  </>
                ) : (
                  <p className="home-clinic__address-text">{data?.address}</p>
                )}
              </div>
            </div>

            <div className="home-clinic__card home-clinic__card--hours">
              <div className="home-clinic__hours-head">
                <div className="home-clinic__card-icon" aria-hidden>
                  <IoTimeOutline />
                </div>
                <h3 className="home-clinic__card-title">OPD hours</h3>
              </div>
              {loading ? (
                <ul className="home-clinic__schedule">
                  {Array.from({ length: 5 }, (_, i) => (
                    <li key={i} className="home-clinic__slot">
                      <Skeleton
                        width={40}
                        height={40}
                        sx={{
                          borderRadius: "12px",
                          bgcolor: "rgba(15, 23, 42, 0.06)",
                        }}
                      />
                      <Skeleton
                        width="60%"
                        height={24}
                        sx={{ bgcolor: "rgba(15, 23, 42, 0.06)" }}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="home-clinic__schedule">
                  {data?.opdHours?.map((item, index) => {
                    const closed = item.day === "Sunday";
                    return (
                      <li
                        key={`${item.day}-${index}`}
                        className={`home-clinic__slot${closed ? " home-clinic__slot--closed" : ""}`}
                      >
                        <span className="home-clinic__day-badge" title={item.day}>
                          {dayAbbrev(item.day)}
                        </span>
                        <div className="home-clinic__slot-body">
                          <span className="home-clinic__day-full">{item.day}</span>
                          <span className="home-clinic__hours-range">
                            {closed
                              ? "Closed"
                              : `${item?.opening_time ?? "—"} – ${item?.closing_time ?? "—"}`}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClinicSection;
