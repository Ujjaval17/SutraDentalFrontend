import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config";
import "./adminPanel.scss"; // Assuming you have a CSS file for styling
import EditModal from "../../components/edit-modal/editModal";
import EditFaqModal from "../../components/edit-modal/editFaqModal";
import EditBlogModal from "../../components/edit-modal/editBlogModal";
import EditClinicDetailsModal from "../../components/edit-modal/editClinicDetailsModal";

const AdminPanel = () => {
  const [treatmentList, setTreatmentList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [faqList, setFaqList] = useState([]);
  const [clinicDetails, setClinicDetails] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editBlogModalOpen, setEditBlogModalOpen] = useState(false);
  const [editClinicModalOpen, setEditClinicModalOpen] = useState(false);
  const [editFaqModalOpen, setEditFaqModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null); // State for image preview
  const [addMode, setAddMode] = useState(false); // State for Add Treatment mode

  useEffect(() => {
    fetchTreatmentList();
  }, []);

  const fetchTreatmentList = async () => {
    try {
      const response = await axios.get(`${API}/list`);
      setTreatmentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${API}/delete-treatment/${id}`);
      const updatedList = treatmentList.filter(
        (treatment) => treatment._id !== id
      );
      setTreatmentList(updatedList);
      console.log("Treatment deleted successfully");
    } catch (error) {
      console.error("Error deleting treatment:", error);
    }
  };

  const handleRemoveBlog = async (id) => {
    try {
      await axios.delete(`${API}/delete-blog/${id}`);
      const updatedList = blogList.filter((blog) => blog._id !== id);
      setBlogList(updatedList);
      console.log("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleRemoveFaq = async (id) => {
    try {
      await axios.delete(`${API}/delete-faq/${id}`);
      const updatedList = faqList.filter((faq) => faq._id !== id);
      setFaqList(updatedList);
      console.log("Faq deleted successfully");
    } catch (error) {
      console.error("Error deleting faq:", error);
    }
  };

  const handleEdit = (treatment) => {
    setSelectedTreatment(treatment);
    setSelectedImagePreview(treatment.image_url); // Set initial image preview
    setEditModalOpen(true);
  };

  const handleAdd = () => {
    setAddMode(true);
    setSelectedTreatment(null); // Clear selected treatment for Add mode
    setEditModalOpen(true);
  };

  const handleAddBlog = () => {
    setAddMode(true);
    setSelectedBlog(null); // Clear selected blog for Add mode
    setEditBlogModalOpen(true);
  };

  const handleAddFaq = () => {
    setAddMode(true);
    setSelectedFaq(null); // Clear selected FAQ for Add mode
    setEditFaqModalOpen(true);
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setSelectedTreatment(null);
    setSelectedImagePreview(null); // Reset image preview when modal closes
    setAddMode(false); // Reset Add Treatment mode
  };

  const handleBlogModalClose = () => {
    setEditBlogModalOpen(false);
    setSelectedBlog(null);
    setSelectedImagePreview(null); // Reset image preview when modal closes
    setAddMode(false); // Reset Add Blog mode
  };

  const handleFaqModalClose = () => {
    setEditFaqModalOpen(false);
    setSelectedFaq(null);
    setAddMode(false); // Reset Add FAQ mode
  };

  
  const handleClinicModalClose = () => {
    setEditClinicModalOpen(false);
    setSelectedImagePreview(null); // Reset image preview when modal closes
  }; 


  const handleClinicImageChange = (e) => {
    const file = e.target.files[0];
    setClinicDetails({
      ...clinicDetails,
      image_url: file,
      image_name: file.name,
    }); // Update clinicDetails with new image file
    setSelectedImagePreview(URL.createObjectURL(file)); // Update image preview with selected file
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedTreatment({
      ...selectedTreatment,
      image_url: file,
      image_name: file.name,
    }); // Update selectedTreatment with new image file
    setSelectedImagePreview(URL.createObjectURL(file)); // Update image preview with selected file
  };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedBlog({
      ...selectedBlog,
      image_url: file,
      image_name: file.name,
    }); // Update selectedBlog with new image file
    setSelectedImagePreview(URL.createObjectURL(file)); // Update image preview with selected file
  };

  const handleUpdateTreatment = async (updatedTreatment) => {
    const formData = new FormData();
    formData.append("image_url", updatedTreatment.image_url);
    formData.append("treatment_name", updatedTreatment.treatment_name);
    formData.append("short_desc", updatedTreatment.short_desc);
    formData.append("long_desc", updatedTreatment.long_desc);
    formData.append("image_name", updatedTreatment.image_name);

    try {
      let response;
      if (addMode) {
        response = await axios.post(
          `${API}/add-treatment`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.put(
          `${API}/treatment-update/${updatedTreatment._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      const updatedTreatmentData = response.data.treatment;
      setSelectedTreatment(updatedTreatmentData); // Update selectedTreatment with updated image URL
      setEditModalOpen(false);
      fetchTreatmentList(); // Update the treatment list after editing
      console.log("Treatment updated successfully");
    } catch (error) {
      console.error("Error updating treatment:", error);
    }
  };

  const handleUpdateBlog = async (updatedBlog) => {
    const formData = new FormData();
    formData.append("image_url", updatedBlog.image_url);
    formData.append("title", updatedBlog.title);
    formData.append("short_desc", updatedBlog.short_desc);
    formData.append("long_desc", updatedBlog.long_desc);
    formData.append("date", updatedBlog.date);

    try {
      let response;
      if (addMode) {
        response = await axios.post(
          `${API}/add-blog`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.put(
          `${API}/blog-update/${updatedBlog._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      console.log(response, "updateblog res");
      const updatedData = response.data.blog;
      setSelectedBlog(updatedData);
      handleBlogModalClose();
      fetchBlogList();
      console.log("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleUpdateFaq = async (updatedFaq) => {
    try {
      let response;
      if (addMode) {
        response = await axios.post(
          `${API}/add-faq`,
          updatedFaq,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.put(
          `${API}/faq-update/${updatedFaq._id}`,
          updatedFaq
        );
      }
      const updatedData = response.data.faq;
      setSelectedFaq(updatedData);
      handleFaqModalClose();
      fetchFaqList();
      console.log("FAQ updated successfully");
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const handleUpdateClinicDetails = async (updatedClinicDetails) => {
    const formData = new FormData();
    formData.append("imageUrl", updatedClinicDetails.image_url);
    formData.append("name", updatedClinicDetails.name);
    formData.append("opdHours", JSON.stringify(updatedClinicDetails.opdHours));
    formData.append("address", updatedClinicDetails.address);

    try {
      const response = await axios.put(
        `${API}/clinic-details-update/${updatedClinicDetails._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedClinicData = response.data.clinicDetails;
      setClinicDetails(updatedClinicData);
      handleClinicModalClose();
      fetchClinicDetails();
      console.log("Clinic details updated successfully");
    } catch (error) {
      console.error("Error updating clinic details:", error);
    }
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setSelectedImagePreview(blog.image_url); // Set initial image preview
    setEditBlogModalOpen(true);
  };

  const handleEditFaq = (faq) => {
    setSelectedFaq(faq);
    setEditFaqModalOpen(true);
  };

  const handleEditClinicDetails = () => {
    setEditClinicModalOpen(true);
  };

  const fetchBlogList = async () => {
    try {
      const response = await axios.get(`${API}/blog-list`);
      setBlogList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFaqList = async () => {
    try {
      const response = await axios.get(`${API}/faq-list`);
      setFaqList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchClinicDetails = async () => {
    try {
      const response = await axios.get(`${API}/api/clinic-details`);
      setClinicDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBlogList();
    fetchFaqList();
    fetchClinicDetails();
    let temp = clinicDetails;
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <table className="treatment-table my-5">
        <thead>
          <tr>
            <th>Image</th>
            <th>Treatment ID</th>
            <th>Treatment Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
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
              <td>{treatment?.long_desc}</td>
              <td className="">
                <button onClick={() => handleEdit(treatment)}>Edit</button>
                <button
                  className="mt-3"
                  onClick={() => handleRemove(treatment?._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button onClick={handleAdd}>Add Treatment</button>
      </div>

      <div className="manage-blogs my-5">
        <h3>My Blogs</h3>
        <table className="treatment-table my-5">
          <thead>
            <tr>
              <th>Image</th>
              <th>Blog ID</th>
              <th>Blog Title</th>
              <th>Short Description</th>
              <th>Long Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogList?.map((blog) => (
              <tr key={blog?._id}>
                <td className="img-container">
                  <img src={blog?.image_url} alt={blog?.title} />
                </td>
                <td>{blog?._id}</td>
                <td>{blog?.title}</td>
                <td>{blog?.short_desc}</td>
                <td>{blog?.long_desc}</td>
                <td>{blog?.date}</td>
                <td className="">
                  <button
                    onClick={() => {
                      handleEditBlog(blog);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="mt-3"
                    onClick={() => {
                      handleRemoveBlog(blog?._id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button onClick={handleAddBlog}>Add Blog</button>
        </div>
      </div>

      <div className="manage-blogs my-5">
        <h3>Faqs List</h3>
        <table className="treatment-table my-5">
          <thead>
            <tr>
              <th>Id</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqList.map((faq) => (
              <tr key={faq?._id}>
                <td>{faq?._id}</td>
                <td>{faq?.question}</td>
                <td>{faq?.answer}</td>
                <td className="">
                  <button
                    onClick={() => {
                      handleEditFaq(faq);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="mt-3"
                    onClick={() => {
                      handleRemoveFaq(faq?._id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button onClick={handleAddFaq}>Add Faq</button>
        </div>
      </div>

      <div className="manage-blogs my-5">
        <h3>Manage Clinic Details</h3>
        <table className="treatment-table my-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Clinic Image</th>
              <th>Opd hours</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr key={clinicDetails?._id}>
                <td>{clinicDetails?.name}</td>
                <td className="img-container">
                  <img src={clinicDetails?.imageUrl} alt="" />
                </td>
                <td className="w-25">
                  {clinicDetails?.address}
                </td>
                <td>
                  <table className="w-100">
                    <tr>
                      <th>Day</th>
                      <th>Hours</th>
                    </tr>
                    {
                      clinicDetails?.opdHours?.map((day)=>(
                        <tr className="m-auto">
                          <td>
                            {day?.day}
                          </td>
                          <td>
                            {
                              day?.opening_time + " - " + day?.closing_time
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </table>
                </td>
                <td className="">
                  <button onClick={() => {handleEditClinicDetails()}}>Edit</button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <EditModal
          handleUpdateTreatment={handleUpdateTreatment}
          handleModalClose={handleModalClose}
          selectedTreatment={selectedTreatment}
          setSelectedTreatment={setSelectedTreatment}
          setSelectedImagePreview={setSelectedImagePreview}
          selectedImagePreview={selectedImagePreview}
          handleImageChange={handleImageChange}
          addMode={addMode} // Pass addMode to the modal component
        />
      )}

      {editBlogModalOpen && (
        <EditBlogModal
          selectedBlog={selectedBlog}
          setSelectedBlog={setSelectedBlog}
          handleModalClose={handleBlogModalClose}
          handleUpdateBlog={handleUpdateBlog}
          selectedImagePreview={selectedImagePreview} // Pass selectedImagePreview as a prop
          handleImageChange={handleBlogImageChange} // Pass handleImageChange as a prop
          addMode={addMode} // Pass addMode as a prop
        />
      )}

      {editFaqModalOpen && (
        <EditFaqModal
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
          handleModalClose={handleFaqModalClose}
          handleUpdateFaq={handleUpdateFaq}
          addMode={addMode} // Pass addMode as a prop
        />
      )}

{editClinicModalOpen && (
        <EditClinicDetailsModal
          handleModalClose={handleClinicModalClose}
          handleUpdateClinicDetails={handleUpdateClinicDetails}
          selectedImagePreview={selectedImagePreview}
          handleImageChange={handleClinicImageChange}
          selectedClinicDetails={clinicDetails}
          setSelectedClinicDetails={setClinicDetails}
        />
      )}
    </div>
  );
};

export default AdminPanel;
