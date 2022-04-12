import React from "react";
import "./Internships.css";
//Componenets

import Cards from "../../Components/Cards/InternshipCard";

const Internships = () => {
  return (
    <div className="main_content">
      <div className="cards row col-md-6 col-lg-4 ">
        <h1 className="intern-heading">CollegeSpace - Internships</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Internships;
