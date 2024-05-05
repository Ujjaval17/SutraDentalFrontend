import React from 'react'

const EditModal = () => {
  return (
    <div className="modal">
    <div className="modal-content">
      {/* Modal content */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateTreatment(selectedTreatment);
        }}
      >
        <label>Treatment Name:</label>
        <input
          type="text"
          value={selectedTreatment.treatment_name}
          onChange={(e) =>
            setSelectedTreatment({
              ...selectedTreatment,
              treatment_name: e.target.value,
            })
          }
        />
        <label>Short Description:</label>
        <input
          type="text"
          value={selectedTreatment.short_desc}
          onChange={(e) =>
            setSelectedTreatment({
              ...selectedTreatment,
              short_desc: e.target.value,
            })
          }
        />
        {selectedImagePreview && (
          <div className="d-flex justify-content-center">
            <div className="current-image ">
              <img src={selectedImagePreview} alt="Selected Treatment" />
            </div>
          </div>
        )}
        <label>Update Image:</label>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </div>
  )
}

export default EditModal
