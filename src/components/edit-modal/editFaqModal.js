// EditFaqModal.js
import React, { useEffect } from "react";

const EditFaqModal = (props) => {
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
            {props.addMode ? "Add FAQ" : "Edit FAQ"}
          </h2>
          <span className="close" onClick={props.handleModalClose}>
            &times;
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleUpdateFaq(props.selectedFaq);
          }}
        >
          <label>Question:</label>
          <input
            type="text"
            placeholder="e.g. What treatments do you offer?"
            value={props.selectedFaq?.question || ""}
            onChange={(e) =>
              props.setSelectedFaq({
                ...props.selectedFaq,
                question: e.target.value,
              })
            }
          />
          <label>Answer:</label>
          <textarea
            rows={4}
            placeholder="Provide a clear and helpful answer..."
            value={props.selectedFaq?.answer || ""}
            onChange={(e) =>
              props.setSelectedFaq({
                ...props.selectedFaq,
                answer: e.target.value,
              })
            }
          />
          <button type="submit">
            {props.addMode ? "Add FAQ" : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFaqModal;
