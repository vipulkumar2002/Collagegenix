import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CollegeSpace
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item text-black text-center"
                      to="/internships"
                    >
                      Internships
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black text-center"
                      to="/placements"
                    >
                      Placements
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/login">
                  login
                </Link>
              </li>
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
