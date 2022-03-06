import React from "react";
import "./Placements.css";
// Components
import Cards from "../../Components/Cards/Cards";
import AddNewCards from "../../Components/AddNewCards/AddNewCards";

const Placement = () => {
  return (
    <>
      <h1 className="placement-heading">CollegeSpace - Placements</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <Cards />
        <AddNewCards />
      </div>
    </>
  );
};

export default Placement;
