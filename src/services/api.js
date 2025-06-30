// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://carambar-api-10f8.onrender.com/api/v1'
    : 'http://localhost:3000/api/v1',
  timeout: 5000,
});

export default api;