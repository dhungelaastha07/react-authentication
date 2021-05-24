import React from "react";
import "../index.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className="main-parent">
        <div className="parent">
          <h1 className="sign-in"> Sign In</h1>
          <button className="button open-id">
            {" "}
            Sign In Using <strong> Open ID Connect </strong>{" "}
          </button>
          <p className="option-text"> or sign in with your email </p>

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
          <button className="button sign-button"> Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignIn;
