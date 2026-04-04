import React, { useEffect } from "react";

const EditModal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="modal"
      onClick={(e) => e.target === e.currentTarget && props.handleModalClose()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {props.addMode ? "Add Treatment" : "Edit Treatment"}
          </h2>
          <span className="close" onClick={props.handleModalClose}>
            &times;
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleUpdateTreatment(props.selectedTreatment);
          }}
        >
          <label>Treatment Name:</label>
          <input
            type="text"
            placeholder="e.g. Knee Replacement Surgery"
            value={props.selectedTreatment?.treatment_name || ""}
            onChange={(e) =>
              props.setSelectedTreatment({
                ...props.selectedTreatment,
                treatment_name: e.target.value,
              })
            }
          />
          <label>Short Description:</label>
          <textarea
            rows={3}
            placeholder="Write a brief overview of the treatment..."
            value={props.selectedTreatment?.short_desc || ""}
            onChange={(e) =>
              props.setSelectedTreatment({
                ...props.selectedTreatment,
                short_desc: e.target.value,
              })
            }
          />
          <label>Long Description:</label>
          <textarea
            rows={6}
            placeholder="Describe the treatment in detail, including procedure, benefits, and recovery..."
            value={props.selectedTreatment?.long_desc || ""}
            onChange={(e) =>
              props.setSelectedTreatment({
                ...props.selectedTreatment,
                long_desc: e.target.value,
              })
            }
          />

          {props.selectedImagePreview && (
            <div className="d-flex justify-content-center">
              <div className="current-image">
                <img src={props.selectedImagePreview} alt="Selected Treatment" />
              </div>
            </div>
          )}
          <label>{props.addMode ? "Upload Image" : "Update Image:"}</label>
          <input type="file" onChange={props.handleImageChange} />
          <button type="submit">
            {props.addMode ? "Add Treatment" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
