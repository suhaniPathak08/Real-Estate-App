import axios from 'axios';

// Base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all properties
export const getProperties = async () => {
  try {
    const response = await api.get('/api/properties');
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// Send contact form
export const sendContact = async (data) => {
  try {
    const response = await api.post('/api/contact', data);
    return response.data;
  } catch (error) {
    console.error('Error sending contact:', error);
    throw error;
  }
};

export default api;