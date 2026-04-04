import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleReviewLogo from "../../images/GoogleReview.svg";
import { FaStar } from "react-icons/fa";
import "./reviews.scss"

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

  const googleReviews = [
    {
      name: "Mandar Gaikwad",
      image:'',
      rating: 5,
      description:
        "I went here for teeth cleaning and a regular checkup. Their staff is too gentle and perfect & I had a great experience. I’ll surely visit regularly at Expert Dental Care Clinic. Thank you Dr. Khushbu for a great experience",
    },
    {
      name: "Prajakta Ghodake",
      image:'',
      rating: 5,
      description:
        "This clinic is really good all dental related issues. I recently had a root canal treatment at experts dental care and I am impressed the clinic was clean and well equipped.Dr khushbu has good experience & is skilled in her practice thank you team experts dental care.🙏",
    },
    {
      name: "vishal shinde",
      image:'',
      rating: 5,
      description:
        "I had an excellent experience at Expert dental care clinic. The staff was friendly and welcoming, and the clinic was clean and modern. Dr. Khushbu was knowledgeable and explained everything clearly. The hygienist was thorough and provided useful tips. The entire team was caring and professional. I highly recommend this clinic for exceptional service and a pleasant dental visit",
    },
    {
      name: "Harshad Pawar",
      image:'',
      rating: 5,
      description:
        "Very good clinic. Very well maintained and with good equipment. Dr. Khushbu has good experience and is skilled in her practice. Highly recommended for all kinds of dental treatment at affordable price!",
    },
    {
      name: "Vinita Kalamkar",
      image:'',
      rating: 5,
      description:
        "I recently had dental surgery at this clinic, treatment given was very nice. Dr Khushboo explained all the procedure very well. All the procedure & service professionally done. Highely recommended.",
    },
  ];

  return (
    <div className="review-container slider-container container-fluid">
      <Slider {...settings}>
        {googleReviews?.map((item, index) => (
          <div className="review-card text-center" key={index}>
            <div className="m-auto">
                <img className="m-auto" width={100} src={GoogleReviewLogo} alt="" />
            </div>
            <div className="review-img-container d-flex justify-content-center align-items-center mx-auto my-4">
                {
                    item?.image ? <img src={item.image} alt={item.name} /> : <h1 className="m-auto">{item?.name[0]}</h1>
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
    </div>
  );
};



export default Reviews;
