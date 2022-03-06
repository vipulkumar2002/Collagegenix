import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form action="" className="gform">
          <h4 className="text-">REGISTER</h4>
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
    </>
  );
};

export default Login;
