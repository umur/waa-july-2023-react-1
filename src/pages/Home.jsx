import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else navigate("/products");
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Home;
