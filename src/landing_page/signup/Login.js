import React, { useState, useContext } from "react";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      const token = res.data.token;
      
      if (!token) throw new Error("No token received!");

      login(token);
      localStorage.setItem("authToken", token); // ✅ Store token
      alert("Login successful!");

      // Redirect to dashboard
      window.location.href = "https://dashboard-3t2g.onrender.com"; // Adjust port
    } catch (error) {
      alert("Login failed! " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="login-input"
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="login-input"
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
