import React from "react";
import "../index.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="main-parent">
        <div className="parent">
          <h1 className="sign-in"> Sign Up</h1>
          <label className="first-name"> First Name </label>
          <input type="text" className="input input-email"></input>
          <label className="last-name"> Last Name</label>
          <input type="text" className="input input-email"></input>

          <label className="email"> Email address</label>
          <input type="text" className="input input-email"></input>

          <div className="icon-text">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="valid"> Please Enter a valid email address. </span>
          </div>

          <div className="passwords">
            <label className="pw"> Password</label>
            <p className="forgot"> Forgot password? </p>
          </div>

          <input type="password" className="input inputPassword"></input>
          <button className="button sign-button"> Sign Up</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
