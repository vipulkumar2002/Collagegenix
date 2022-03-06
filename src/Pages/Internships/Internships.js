import React from "react";
import "./Internships.css";
//Componenets
import Cards from "../../Components/Cards/Cards";
// import AddNewCards from "../../Components/AddNewCards/AddNewCards";

const Internships = () => {
  return (
    <>
      <h1 className="intern-heading">CollegeSpace - Internships</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <Cards />

        {/* <AddNewCards /> */}
      </div>
    </>
  );
};

export default Internships;
