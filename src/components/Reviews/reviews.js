import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleReviewLogo from "../../images/GoogleReview.svg";
import { FaStar } from "react-icons/fa";
import "./reviews.scss";
import { GOOGLE_REVIEWS } from "../../seo/reviewsData";
import { BUSINESS } from "../../seo/siteConfig";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const googleReviews = GOOGLE_REVIEWS;

  return (
    <section
      className="review-container slider-container container-fluid"
      aria-labelledby="reviews-heading"
    >
      <h2 id="reviews-heading" className="reviews-section-title">
        Patient reviews — Sutra Dental, Chandkheda
      </h2>
      <Slider {...settings}>
        {googleReviews?.map((item, index) => (
          <div className="review-card text-center" key={index}>
            <div className="m-auto">
                <img className="m-auto" width={100} src={GoogleReviewLogo} alt="Google reviews" />
            </div>
            <div className="review-img-container d-flex justify-content-center align-items-center mx-auto my-4">
                {
                    item?.image ? <img src={item.image} alt={item.name} /> : <span className="review-initial m-auto">{item?.name[0]}</span>
                }
            </div>
            <h4 className="mx-auto">{item?.name}</h4>
            <span>
              {Array.from({ length: item?.rating }, (_, index) => (
                <FaStar color="orange"/>
              ))}
            </span>
            <p className="mt-2">
                {
                    item?.description
                }
            </p>
          </div>
        ))}
      </Slider>
      {BUSINESS.googleBusinessUrl && (
        <p className="reviews-cta text-center mt-3">
          <a
            href={`${BUSINESS.googleBusinessUrl.replace(/\/$/, "")}/review`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your experience on Google
          </a>
        </p>
      )}
    </section>
  );
};



export default Reviews;
