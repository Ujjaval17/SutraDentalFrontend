import React, { useEffect } from "react";

const EditClinicDetailsModal = ({
  selectedClinicDetails,
  setSelectedClinicDetails,
  handleModalClose,
  handleUpdateClinicDetails,
  selectedImagePreview,
  handleImageChange,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="modal"
      onClick={(e) => e.target === e.currentTarget && handleModalClose()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Edit Clinic Details</h2>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateClinicDetails(selectedClinicDetails);
          }}
        >
          <label>Clinic Name:</label>
          <input
            type="text"
            placeholder="e.g. City Orthopaedic Clinic"
            value={selectedClinicDetails?.name || ""}
            onChange={(e) =>
              setSelectedClinicDetails({
                ...selectedClinicDetails,
                name: e.target.value,
              })
            }
          />

          <label>Address:</label>
          <textarea
            rows={3}
            placeholder="e.g. 123 Main Street, Mumbai, Maharashtra 400001"
            value={selectedClinicDetails?.address || ""}
            onChange={(e) =>
              setSelectedClinicDetails({
                ...selectedClinicDetails,
                address: e.target.value,
              })
            }
          />

          <label>OPD Hours:</label>
          {selectedClinicDetails?.opdHours?.map((day, index) => (
            <div key={index} className="opd-row">
              <span className="opd-day">{day?.day?.substring(0, 3)}</span>
              <div className="opd-times">
                <div className="opd-time-field">
                  <label>Opening</label>
                  <input
                    type="time"
                    value={day.opening_time}
                    onClick={(e) => e.target.showPicker?.()}
                    onChange={(e) => {
                      const newOpdHours = [...selectedClinicDetails.opdHours];
                      newOpdHours[index].opening_time = e.target.value;
                      setSelectedClinicDetails({
                        ...selectedClinicDetails,
                        opdHours: newOpdHours,
                      });
                    }}
                  />
                </div>
                <div className="opd-time-field">
                  <label>Closing</label>
                  <input
                    type="time"
                    value={day.closing_time}
                    onClick={(e) => e.target.showPicker?.()}
                    onChange={(e) => {
                      const newOpdHours = [...selectedClinicDetails.opdHours];
                      newOpdHours[index].closing_time = e.target.value;
                      setSelectedClinicDetails({
                        ...selectedClinicDetails,
                        opdHours: newOpdHours,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {selectedImagePreview && (
            <div className="d-flex justify-content-center">
              <div className="current-image">
                <img src={selectedImagePreview} alt="Clinic" />
              </div>
            </div>
          )}
          <label>Update Clinic Image:</label>
          <input type="file" onChange={handleImageChange} />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditClinicDetailsModal;
