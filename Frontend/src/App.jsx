import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import OurDepartment from "./Pages/OurDepartment";
import Spotlight from "./Pages/Spotlight";
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-department" element={<OurDepartment />} />
        <Route path="/spotlight" element={<Spotlight />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
