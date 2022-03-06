import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="card card-container">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          className=" card-image"
          id="imageUrl"
          alt="img"
        />

        <div className="card-body">
          <h6 id="personName" className="card-title">
            Person Name
          </h6>
          <h6 id="jobRole" className="card-text">
            Job Role
          </h6>
          <h6 id="companyName">Company Name</h6>
          <a href="#" className="btn btn-primary ">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
