import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//Pages
import Internships from "./Pages/Internships/Internships";
import Placements from "./Pages/Placements/Placement";
import Contactus from "./Pages/Contact/Contact";
import Aboutus from "./Pages/About/About";
import Login from "./Pages/login/Login";

export const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/internships" element={<Internships />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
