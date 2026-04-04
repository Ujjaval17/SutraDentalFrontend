// EditBlogModal.js
import React, { useEffect } from "react";
import moment from "moment";

const formatDateForInput = (dateStr) => {
  if (!dateStr) return "";
  const parsed = moment(dateStr, ["MMM Do, YYYY", "YYYY-MM-DD"], true);
  return parsed.isValid() ? parsed.format("YYYY-MM-DD") : "";
};

const formatDateForDisplay = (dateStr) => {
  if (!dateStr) return "";
  const parsed = moment(dateStr, "YYYY-MM-DD");
  return parsed.isValid() ? parsed.format("MMM Do, YYYY") : dateStr;
};

const EditBlogModal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && props.handleModalClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{props.addMode ? "Add Blog" : "Edit Blog"}</h2>
          <span className="close" onClick={props.handleModalClose}>&times;</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleUpdateBlog(props.selectedBlog);
          }}
        >
          <label>Blog Title:</label>
          <input
            type="text"
            placeholder="e.g. Top 5 Benefits of Physiotherapy"
            value={props.selectedBlog?.title || ""}
            onChange={(e) =>
              props.setSelectedBlog({
                ...props.selectedBlog,
                title: e.target.value,
              })
            }
          />
          <label>Short Description:</label>
          <textarea
            rows={3}
            placeholder="Write a brief summary of the blog post..."
            value={props.selectedBlog?.short_desc || ""}
            onChange={(e) =>
              props.setSelectedBlog({
                ...props.selectedBlog,
                short_desc: e.target.value,
              })
            }
          />
          <label>Long Description:</label>
          <textarea
            rows={6}
            placeholder="Write the full blog content here..."
            value={props.selectedBlog?.long_desc || ""}
            onChange={(e) =>
              props.setSelectedBlog({
                ...props.selectedBlog,
                long_desc: e.target.value,
              })
            }
          />
          <label>Date:</label>
          <input
            type="date"
            className="date-picker"
            max={new Date().toISOString().split("T")[0]}
            value={formatDateForInput(props.selectedBlog?.date)}
            onClick={(e) => e.target.showPicker?.()}
            onChange={(e) =>
              props.setSelectedBlog({
                ...props.selectedBlog,
                date: formatDateForDisplay(e.target.value),
              })
            }
          />

          {props.selectedImagePreview && (
            <div className="d-flex justify-content-center">
              <div className="current-image ">
                <img src={props.selectedImagePreview} alt="Selected Blog" />
              </div>
            </div>
          )}
          <label>{props.addMode ? "Upload Image" : "Update Image:"}</label>
          <input type="file" onChange={props.handleImageChange} />
          <button type="submit">
            {props.addMode ? "Add Blog" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;

