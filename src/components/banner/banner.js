import React, { useState, useEffect } from "react";
import "./banner.scss";
import Image1 from "../../images/banner/image1.png";
import Image3 from "../../images/banner/image3.png";
import Image2 from "../../images/banner/image2.png";

const Banner = () => {
  const images = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="banner-container" aria-label="Welcome to Sutra Dental">
      {images.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="banner-content">
            <h1 className="banner-title">Sutra Dental</h1>
            <div className="banner-description-row">
              <span
                className="banner-thread banner-thread--left"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 200 24"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="banner-thread__path"
                    d="M0 12 Q 25 2, 50 12 T 100 12 T 150 12 T 200 12"
                    fill="none"
                  />
                  <circle className="banner-thread__needle" r="2.5" />
                </svg>
              </span>
              <p className="banner-description">The Sutra of trust and care</p>
              <span
                className="banner-thread banner-thread--right"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 200 24"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="banner-thread__path"
                    d="M0 12 Q 25 22, 50 12 T 100 12 T 150 12 T 200 12"
                    fill="none"
                  />
                  <circle className="banner-thread__needle" r="2.5" />
                </svg>
              </span>
            </div>
            <p className="banner-location">
              Dental clinic · Chandkheda, Ahmedabad
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Banner;
