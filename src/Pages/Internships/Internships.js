import React from "react";
import "./Internships.css";
import Cards from "../../Components/Cards/Cards";

const Internships = () => {
  return (
    <>
      <h1 className="intern-heading">CollegeSpace - Internships</h1>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Internships;
