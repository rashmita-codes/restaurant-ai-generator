import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const generateRestaurant = async (formData) => {
  const response = await API.post("/generate", formData);
  return response.data;
};