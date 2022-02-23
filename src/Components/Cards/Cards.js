import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="card card-container">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          className=" card-image"
          alt="..."
        />

        <div className="card-body">
          <h6 className="card-title">Person Name</h6>
          <h6 className="card-text">Position</h6>
          <h6>Company Name</h6>
          <a href="#" className="btn btn-primary ">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
