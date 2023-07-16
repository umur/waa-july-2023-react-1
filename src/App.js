import logo from "./logo.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Register from "./pages/Register";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Product from "./pages/Product";

axios.defaults.baseURL = "http://localhost:8080/";

if (localStorage.getItem("token"))
  axios.defaults.headers.authorization = `bearer ${localStorage.getItem(
    "token"
  )}`;

function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
