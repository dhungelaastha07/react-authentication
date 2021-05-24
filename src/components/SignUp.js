import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="form-container">
          <h1 className="form-title"> Sign Up</h1>

          <label className="first-name"> First Name </label>
          <input type="text" className="input"></input>

          <label className="last-name"> Last Name</label>
          <input type="text" className="input"></input>

          <label className="email"> Email address</label>
          <input type="text" className="input input-email"></input>

          <label className="pw"> Password</label>
          <input type="password" className="input inputPassword"></input>

          <button className="primary-button signup-button"> Sign Up</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
