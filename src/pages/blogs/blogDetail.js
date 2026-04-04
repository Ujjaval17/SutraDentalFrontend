import React from "react";
import { useLocation, useParams } from "react-router";
import "./blogDetail.scss";
import { FaRegCalendarDays } from "react-icons/fa6";

const BlogDetail = () => {
  const blogData = useLocation()?.state;

  console.log("data blog", blogData, useParams());
  return (
    <div className="blog-detail-container w-100">
      <div className="m-5">
        <h2>{blogData.title}</h2>
        <div className="d-flex m-auto justify-content-center align-items-center gap-2 mb-4">
          {<FaRegCalendarDays />}
          {blogData?.date}
        </div>
        <div className="blog-detail-img-container m-auto">
          <img src={blogData?.image_url} />
        </div>
        <div className="blog-content mx-auto mt-5">
          <p>{blogData?.long_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
