import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Blog from "./components/pages/Blog";
import "./App.css";

function App() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/blog");
    }
  }, [hash, pathname, navigate]);

  return (
    <Routes>
      <Route path="blog/*" element={<Blog />} />
    </Routes>
  );
}

export default App;
