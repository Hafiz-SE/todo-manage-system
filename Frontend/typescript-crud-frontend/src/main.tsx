import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

console.log('VITE_BACKEND_URL = ', import.meta.env.VITE_BACKEND_URL)
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"
axios.interceptors.request.use(request => {
  console.log("axios call request = ", request);
  return request;
}, error => {
  console.log("axios call error = ", error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log("axios call response = ", response);
  return response;
}, error => {
  console.log("axios call error = ", error);
  return Promise.reject(error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
