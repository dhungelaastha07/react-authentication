import React from "react";
// import axios from "axios";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      passwordInput: "",
      errorMessage: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e, stateName) {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const userArrayString = localStorage.getItem("users");
    const userArray = !userArrayString ? [] : JSON.parse(userArrayString);
    const matchedUser = userArray.find((item) => {
      return item.email === this.state.emailInput;
    });

    if (matchedUser && matchedUser.passowrd === this.state.passwordInput) {
      this.props.updateDisplay("dashboard");

      this.props.updateLoggedInStatus(matchedUser);
    } else {
      this.setState({
        errorMessage: "Login failed!!",
      });
    }
  }

  render() {
    return (
      <div className="form-page">
        <form onSubmit={this.submitHandler} className="form-container">
          <h1 className="form-title"> Sign In</h1>

          <label> Email address</label>
          <input
            value={this.state.emailInput}
            type="email"
            className="input input-email"
            onChange={(e) => {
              this.inputHandler(e, "emailInput");
            }}
          ></input>

          <div className="label-forgot-passwords">
            <label> Password</label>
            <p className="forgot"> Forgot password? </p>
          </div>

          <input
            value={this.state.passwordInput}
            type="password"
            className="input inputPassword"
            onChange={(e) => {
              this.inputHandler(e, "passwordInput");
            }}
          ></input>
          <button type="submit" className="primary-button signin-button">
            {" "}
            Sign In
          </button>
          <p className="error-msg"> {this.state.errorMessage} </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
