import React from "react";
import "./Navbar.css";
import About from "../About/About";

export const Navabar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar">
        <div className="container-fluid">
          <div
            className="collapse nav-container navbar-collapse"
            id="navbarNav"
          >
            <div className="logo-container">
              <h1 className="logo-img">Collegegenix</h1>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active  " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="About">
                    About Us
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active">login</a>
                </li>
              </ul>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
