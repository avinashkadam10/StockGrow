import axios from "axios";

const API_URL = "https://sbackend-wp2d.onrender.com/api/auth"; // Backend API

const getToken = () => localStorage.getItem("token");

// Register User
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// Login User
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// Get Authenticated User
export const getProfile = async () => {
  return await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
