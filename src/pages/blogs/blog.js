import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import "./blog.scss";
import Modal from "react-modal";
import moment from "moment";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { blogsPattern, getBlogDetailRoute, indexPattern } from "../../Routes";
import SEO from "../../components/seo/SEO";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import OptimizedImage from "../../components/seo/OptimizedImage";
import { getStaticSeo } from "../../seo/pageSeo";
import { breadcrumbSchema } from "../../seo/schemas";
import axios from "axios";
import API from "../../config";
import Skeleton from "@mui/material/Skeleton";

const BlogCard = ({ item }) => (
  <Link
    to={getBlogDetailRoute(item?.title)}
    state={item}
    className="blog-card w-100"
  >
    <div className="blog-img-container">
      <OptimizedImage
        src={item?.image_url}
        alt={item?.title || "Blog post"}
        loading="lazy"
      />
    </div>
    <div className="blog-content">
      <h3 className="text-start h4" style={{ whiteSpace: "pre-line" }}>
        {item?.title}
      </h3>
      <p className="text-start">{item?.short_desc}</p>
    </div>
    <hr />
    <div className="d-flex read-more justify-content-between">
      <span>
        Read more <FaArrowRightLong aria-hidden />
      </span>
      <span className="d-flex align-items-center gap-2">
        <FaRegCalendarDays aria-hidden />
        <time dateTime={item?.date}>{item?.date}</time>
      </span>
    </div>
  </Link>
);

const BlogCardSkeleton = () => (
  <div className="blog-card blog-card--skeleton w-100">
    <div className="blog-img-container">
      <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
    </div>
    <div className="blog-content">
      <Skeleton height={28} width="88%" sx={{ mt: 2, mb: 1 }} animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton width="92%" animation="wave" />
      <Skeleton width="65%" animation="wave" />
    </div>
    <Skeleton height={1} sx={{ mx: 2 }} />
    <div className="d-flex read-more justify-content-between px-3 pb-3">
      <Skeleton width={100} height={20} animation="wave" />
      <Skeleton width={80} height={20} animation="wave" />
    </div>
  </div>
);

const Blogs = (props) => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState(false);
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    shortDesc: "",
    image: "",
    date: "",
  });
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // setFile(selectedFile);
        setBlogData({ ...blogData, image: reader.result });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const fetchBlogList = async () => {
    try {
      const response = await axios.get(`${API}/blog-list`);
      setBlogList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  const path = useLocation()?.pathname;
  const isHomeSection = props.page === "home";
  const seo = getStaticSeo("blogs");
  const breadcrumbs = [
    { name: "Home", url: indexPattern },
    { name: "Blogs", url: blogsPattern },
  ];

  return (
    <>
      {!isHomeSection && (
        <>
          <SEO
            title={seo.title}
            description={seo.description}
            canonicalPath={seo.path}
            jsonLd={breadcrumbSchema(breadcrumbs)}
          />
          <Breadcrumbs items={breadcrumbs} />
        </>
      )}
      {isHomeSection ? (
        <h2 className="fw-bold text-start my-5 ms-5">Our latest blogs</h2>
      ) : (
        <h1 className="fw-bold text-start my-5 ms-5">Dental health blogs</h1>
      )}
      <div className="blog-container mx-5 mb-5">
        {loading ? (
          <>
            {Array.from(
              { length: props.page === "home" ? 4 : 8 },
              (_, i) => (
                <BlogCardSkeleton key={i} />
              )
            )}
          </>
        ) : blogList?.length ? (
          props.page === "home" ? (
            blogList
              ?.filter((element, i) => i < 4)
              ?.map((item) => <BlogCard key={item._id || item.title} item={item} />)
          ) : (
            blogList?.map((item) => <BlogCard key={item._id || item.title} item={item} />)
          )
        ) : (
          <p>No Blogs Available</p>
        )}
      </div>
      <div className="addBlog my-5">
        { path === "/blogs" ? <></> : <button onClick={()=> navigate(blogsPattern)}>See more blogs</button>}
      </div>
      <Modal
        isOpen={openAddBlogModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            zIndex: 20000000,
            top: "100px",
            left: "300px",
            right: "300px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <h4 className="my-4">Add New Blog</h4>
        <div className="add-blog-form d-flex flex-column gap-2">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={(e) =>
              setBlogData({ ...blogData, title: e.target.value })
            }
          />
          <label htmlFor="">Description</label>
          <textarea
            onChange={(e) => setBlogData({ ...blogData, shortDesc: e.target.value })}
          />
          <label htmlFor="">Image</label>
          <input
            type="file"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
        </div>
        <div className="d-flex">
          <button
            className="mt-5 mx-auto"
            onClick={() => {
              setBlogData({
                ...blogData,
                date: moment().format("MMM Do, YYYY")
              });
              setBlogList([...blogList,{ ...blogData,
                date: moment().format("MMM Do, YYYY")}])
              setOpenAddBlogModal(false);
            }}
          >
            create blog
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Blogs;
