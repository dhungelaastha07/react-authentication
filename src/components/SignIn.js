import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="form-container">
          <h1 className="form-title"> Sign In</h1>

          <label> Email address</label>
          <input type="text" className="input input-email"></input>

          <div className="label-forgot-passwords">
            <label> Password</label>
            <p className="forgot"> Forgot password? </p>
          </div>

          <input type="password" className="input inputPassword"></input>
          <button className="primary-button signin-button"> Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignIn;
