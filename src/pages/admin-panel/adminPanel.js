import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminPanel.scss"; // Assuming you have a CSS file for styling
import EditModal from "../../components/edit-modal/editModal";

const AdminPanel = () => {
  const [treatmentList, setTreatmentList] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null); // State for image preview

  useEffect(() => {
    fetchTreatmentList();
  }, []);

  const fetchTreatmentList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/list");
      setTreatmentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-treatment/${id}`);
      const updatedList = treatmentList.filter(
        (treatment) => treatment._id !== id
      );
      setTreatmentList(updatedList);
      console.log("Treatment deleted successfully");
    } catch (error) {
      console.error("Error deleting treatment:", error);
    }
  };

  const handleEdit = (treatment) => {
    setSelectedTreatment(treatment);
    setSelectedImagePreview(treatment.image_url); // Set initial image preview
    setEditModalOpen(true);
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setSelectedTreatment(null);
    setSelectedImagePreview(null); // Reset image preview when modal closes
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedTreatment({ ...selectedTreatment, image_url: file }); // Update selectedTreatment with new image file
    setSelectedImagePreview(URL.createObjectURL(file)); // Update image preview with selected file
  };

  const handleUpdateTreatment = async (updatedTreatment) => {
    const formData = new FormData();
    formData.append("image_url", updatedTreatment.image_url);
    formData.append("treatment_name", updatedTreatment.treatment_name);
    formData.append("short_desc", updatedTreatment.short_desc);

    try {
      const response = await axios.put(
        `http://localhost:5000/treatment-update/${updatedTreatment._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const updatedTreatmentData = response.data.treatment;
      setSelectedTreatment(updatedTreatmentData); // Update selectedTreatment with updated image URL
      setEditModalOpen(false);
      fetchTreatmentList(); // Update the treatment list after editing
      console.log("Treatment updated successfully");
    } catch (error) {
      console.error("Error updating treatment:", error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <table className="treatment-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Treatment ID</th>
            <th>Treatment Name</th>
            <th>Short Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {treatmentList.map((treatment) => (
            <tr key={treatment?._id}>
              <td className="img-container">
                <img
                  src={treatment?.image_url}
                  alt={treatment?.treatment_name}
                />
              </td>
              <td>{treatment?._id}</td>
              <td>{treatment?.treatment_name}</td>
              <td>{treatment?.short_desc}</td>
              <td>
                <button onClick={() => handleEdit(treatment)}>Edit</button>
                <button onClick={() => handleRemove(treatment?._id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editModalOpen && selectedTreatment && (
        <EditModal/>
      )}
    </div>
  );
};

export default AdminPanel;
