import axios from 'axios';

const api = axios.create({
  baseURL: 'http://capitravelbackcopy-production.up.railway.app', 
  timeout: 20000,
});

export default api;
