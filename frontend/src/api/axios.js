

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Optional debugging (remove later if you want)
API.interceptors.request.use((config) => {
  console.log("API CALL:", config.baseURL + config.url);
  return config;
});

export default API;