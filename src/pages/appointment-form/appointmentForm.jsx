import React, { useState } from "react";
import "./appointmentForm.scss";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../../config";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  treatment: "",
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const isFormComplete = Object.values(formData).every((v) => v.trim() !== "");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/book-appointment`, formData);
      toast.success("Your appointment has been booked successfully!");
      setFormData(EMPTY_FORM);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="appointment" className="appointment-container">
      {loading && (
        <div className="appointment-loader-overlay">
          <div className="appointment-spinner" />
        </div>
      )}
      <div className="appointment-form-container">
        <h2>Book an Appointment</h2>
        <p>Fill in your details and we'll get back to you shortly!</p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="+91-1234567890"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  min={new Date().toISOString().split("T")[0]}
                  onClick={(e) => e.target.showPicker?.()}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onClick={(e) => e.target.showPicker?.()}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Select Treatment</Form.Label>
            <Form.Select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a treatment --</option>
              <option value="Cleaning">Teeth Cleaning</option>
              <option value="Whitening">Teeth Whitening</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Braces">Braces</option>
              <option value="Implants">Dental Implants</option>
            </Form.Select>
          </Form.Group>

          <div
            title={!isFormComplete ? "Please fill in all fields to book" : ""}
            style={{ cursor: !isFormComplete ? "not-allowed" : "default" }}
          >
            <Button
              variant="primary"
              type="submit"
              className={`w-100 book-btn ${!isFormComplete ? "book-btn--disabled" : ""}`}
              disabled={loading || !isFormComplete}
              style={{ pointerEvents: !isFormComplete ? "none" : "auto" }}
            >
              {loading ? "Booking..." : "Book Now"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AppointmentForm;
