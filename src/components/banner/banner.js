import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="banner-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="banner-content">
            <h1 className="banner-title">Sutra Dental</h1>
            <p className="banner-description">
              The Sutra of your smile
              <br />
              Because Your Smile Deserves Luxury
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
