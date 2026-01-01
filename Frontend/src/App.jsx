import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/Hero";
import OurDepartment from "./Pages/OurDepartment";
import Publications from "./Pages/publications/publications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-department" element={<OurDepartment />} />
       <Route path="/publications" element={<Publications />} />
      </Routes>
    <Footer/>
    </Router>
  );
};

export default App;