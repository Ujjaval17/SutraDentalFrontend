// src/components/Login.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config";
import "./login.scss";
import { useNavigate } from "react-router";
import { adminPanelPattern } from "../../Routes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API}/login`, {
        username,
        password,
      });
      setMessage("Login successful");
      console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate(adminPanelPattern);
      }
      // Handle the token (e.g., save it to localStorage)
    } catch (error) {
      setMessage("Login failed. Invalid credentials.");
    }
  };

  useEffect(() => {
    if (token) {
      navigate(adminPanelPattern);
    }
  }, []);

  return (
    <div className="login-container mb-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
