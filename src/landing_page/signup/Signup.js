import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import CSS

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed! " + error.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Signup</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="signup-input"
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="signup-input"
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="signup-input"
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="signup-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
