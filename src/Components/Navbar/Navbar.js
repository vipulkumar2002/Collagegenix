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
              <Link to="/" className="logo-img">
                Collegegenix
              </Link>
            </div>

            <div className="navbar-nav ">
              <ul className="nav-item dropdown ">
                <li
                  className="nav-link dropdown-toggle text-white "
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CollegeSpace
                </li>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item text-black text-center "
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
              </ul>
              <li className="nav-item ">
                <Link className="nav-link active text-white" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/aboutus">
                  About Us
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
