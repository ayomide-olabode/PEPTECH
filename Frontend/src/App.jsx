import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom'
import Footer from "./Components/footer/Footer";
import Home from "./Pages/Hero";
import Publications from "./Pages/publications/publications";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/publications" element={<Publications />} />
    </Routes>
    <Footer/>
  </Router>
  )
};

export default App
