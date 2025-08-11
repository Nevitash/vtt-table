// src/api/axiosInstance.js
import axios from 'axios';

// Get the base URL from the environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;

// Create an Axios instance with a custom configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Optional: Set a timeout for requests (in milliseconds)
});

// Add a request interceptor to attach authentication tokens
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken'); // Replace with your actual token retrieval method
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor for global error handling
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // You can handle successful responses here
//     return response;
//   },
//   (error) => {
//     // Handle specific error cases here, e.g., 401 Unauthorized
//     if (error.response && error.response.status === 401) {
//       // For example, redirect to a login page
//       console.log('Unauthorized request. Redirecting to login...');
//       // window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;