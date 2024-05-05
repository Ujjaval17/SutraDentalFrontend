import React, { useState } from "react";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import "./blog.scss";
import Modal from "react-modal";
import moment from "moment";
import { useNavigate } from "react-router";
import { blogDetailPattern, getBlogDetailRoute } from "../../Routes";

const Blogs = (props) => {
  const [openAddBlogModal, setOpenAddBlogModal] = useState(false);
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    shortDesc: "",
    image: "",
    date: "",
  });
  const [blogList, setBlogList] = useState([
    {
      title: "How To Combat Dental Anxiety?",
      image: blog1,
      shortDesc:
        "For many of us, going to the dentist is a stressful experience. We simply avoid going to the dentist when we have dental anxiety.",
      longDesc: "",
      date: "Apr 9th, 2022",
    },
    {
      title: "Ways To Avoid Dental Cavities",
      image: blog2,
      shortDesc:
        "Although brushing and flossing are two important daily oral hygiene routines for maintaining the health of your teeth and gums, there are a few other simple things you can do to prevent tooth decay.",
      longDesc: "",
      date: "Apr 6th, 2022",
    },
    {
      title: "Common Dental Problems:\nLets Not Ignore",
      image: blog3,
      shortDesc:
        "Tooth problems are nothing less than an emergency no matter how minor or major the problem might be. Dental problems are varied and knowing how to handle them can actually go a long way in preventing long term damage.",
      longDesc: "",
      date: "Apr 6th, 2022",
    },
  ]);

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


  return (
    <>
      <h1 className="fw-bold text-start my-5 ms-5">
        {props.page === "home" ? "Our latest blogs" : "Health blogs"}
      </h1>
      <div className="blog-container d-flex justify-content-between mx-5 mb-5">
        {blogList?.length && blogList?.map((item, index) => (
          <div className="blog-card w-100" onClick={()=> navigate(getBlogDetailRoute(item?.title?.trim()),{state:item})}>
            <div className="blog-img-container">
              <img src={item?.image} alt="" />
            </div>
            <div className="blog-content">
              <h4 className="text-start" style={{ whiteSpace: "pre-line" }}>
                {item?.title}
              </h4>
              <p className="text-start">{item?.shortDesc}</p>
            </div>
            <hr />
            <div className="d-flex read-more justify-content-between">
              <span className="">
                Read more <FaArrowRightLong />
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaRegCalendarDays />
                {item?.date}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="addBlog my-5">
        <button onClick={() => setOpenAddBlogModal(true)}>Add new blog</button>
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
