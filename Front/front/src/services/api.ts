import axios from 'axios'; //chamadas api

const api = axios.create({
    baseURL: 'http://localhost:4444',
  })
  
  export default api;
