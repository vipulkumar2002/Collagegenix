import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="d-flex">
      <div className="col-md-6  register-contect">
        <span>Dream it, Believe it, Do it</span>
        <h1>REGISTER NOW</h1>
        <div className="d-flex justify-content-between footer-nos">
          <div>
            <h1>25+</h1>
            <p>Mentores</p>
          </div>
          <div>
            <h1>100+</h1>
            <p>Internships</p>
          </div>
          <div>
            <h1>200+</h1>
            <p>Placements</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 register-form">
        <form action="" className="gform">
          <h4>REGISTER HERE</h4>
          <p>Fill below details to speak with our team.</p>
          <p>We'll never share your email with anyone else.</p>

          <div className="mb-2 form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-2 form-group ">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email ID"
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="number"
              className="form-control"
              id="phone-number"
              name="phone-number"
              placeholder="Contact Number"
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              name="message"
              id="message"
              className="form-control"
              cols="7"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-control fs-5">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
