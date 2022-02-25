import React from "react";
import "./Placements.css";
import Cards from "../../Components/Cards/Cards";

const Placement = () => {
  return (
    <>
      <h1 className="placement-heading">CollegeSpace - Placements</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

        <Cards />
        <Cards />

        <button className="btn btn-primary addNewCard add-btn">+Add</button>
      </div>
    </>
  );
};

export default Placement;
