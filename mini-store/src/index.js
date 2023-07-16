import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";

// const config = {
//   headers: { Authorization: `Bearer ${res.token}` }
// };
// const product1 = await axios.get('/products/1', config)
axios.defaults.baseURL = "http://localhost:8080";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);

reportWebVitals();
