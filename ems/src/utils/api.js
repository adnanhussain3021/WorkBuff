// Central API base URL configuration
// In development: uses localhost
// In production: uses the deployed backend URL from env
const API_URL = import.meta.env.VITE_API_URL !== undefined ? import.meta.env.VITE_API_URL : '';

export default API_URL;
