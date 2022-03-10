import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userIdErr, setUserIdErr] = useState(false);
  const [passward, setPassward] = useState("");
  const [passErr, setPassErr] = useState(false);

  function handleSubmit(e) {
    if (userId.length < 4 || passward.length < 6) {
      alert("Invalid User Name anad Password");
    } else alert("Log In succes");
    e.preventDefault();
    // console.log(email, passward);
  }

  function userHandlar(e) {
    let item = e.target.value;
    if (item.length < 4) {
      // console.log("Invalid User Name");
      setUserIdErr(true);
    } else setUserIdErr(false);
    setUserId(item);
  }
  function passHandlar(e) {
    let item = e.target.value;
    if (item.length < 6) {
      // console.log("Invalid User Name");
      setPassErr(true);
    } else setPassErr(false);
    setPassward(item);
  }

  return (
    <>
      <div className="login-container col-sm-4 offset-sm-4">
        <form onSubmit={handleSubmit} className="gform">
          <h4 className="text-bold ">Log In, Here</h4>
          <p>We'll never share your email with anyone else.</p>

          <div className="mb-3  ">
            <input
              type="email"
              className="form-control"
              id="staticEmail"
              name="email"
              // value={email}
              aria-describedby="emailHelp"
              placeholder="Email ID"
              onChange={userHandlar}
            />
          </div>
          <div className="text-center m-2 text-danger">
            {userIdErr ? <span>Invalid User Name</span> : ""}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              // value={passward}
              placeholder="Password"
              onChange={passHandlar}
            />
          </div>
          <div className="text-center m-2 text-danger">
            {passErr ? <span>Invalid PassWord</span> : ""}
          </div>
          <button className="btn btn-primary form-control fs-5">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
