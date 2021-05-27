import React from "react";
import axios from "axios";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      passwordInput: "",
      submitMessage: "",
      sucessfullySubmitted: false,
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
    axios
      .post("https://logintest.free.beeceptor.com/", {
        email: this.state.emailInput,
        pasword: this.state.passwordInput,
      })
      .then((res) => {
        this.setState({
          submitMessage: "Successfully submitted",
          sucessfullySubmitted: true,
          emailInput: "",
          passwordInput: "",
        });
        this.props.updateLoggedInStatus(true);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          submitMessage: "Something went wrong, login failed",
          sucessfullySubmitted: false,
        });
        this.props.updateLoggedInStatus(false);
      });
  }

  render() {
    return (
      <div className="form-page">
        <form onSubmit={this.submitHandler} className="form-container">
          <h1 className="form-title"> Sign In</h1>

          <label> Email address</label>
          <input
            value={this.state.emailInput}
            type="text"
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
          <p
            style={{ color: this.state.sucessfullySubmitted ? "green" : "red" }}
          >
            {" "}
            {this.state.submitMessage}{" "}
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
