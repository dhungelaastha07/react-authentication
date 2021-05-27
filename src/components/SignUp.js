import axios from "axios";
import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      emailInput: "",
      passwordInput: "",
      successMessage: "",
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

    const users = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      passowrd: this.state.passwordInput,
    };

    const userArrayString = localStorage.getItem("users");
    const userArray = !userArrayString ? [] : JSON.parse(userArrayString);

    userArray.push(users);

    localStorage.setItem("users", JSON.stringify(userArray));
    console.log(users);
    // axios
    //   .post("https://logintest.free.beeceptor.com/", {
    //     firstName: this.firstNameInput,
    //     lastName: this.state.lastNameInput,
    //     email: this.state.emailInput,
    //     password: this.state.passwordInput,
    //   })
    //   .then((res) => {
    //     this.setState({
    //       successMessage: "Successfully signed up",
    //       firstNameInput: "",
    //       lastNameInput: "",
    //       emailInput: "",
    //       passwordInput: "",
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({
    //       successMessage: "Something is wrong. Please try again",
    //     });
    //   });
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} className="form-page">
        <div className="form-container">
          <h1 className="form-title"> Sign Up</h1>

          <label className="first-name"> First Name </label>
          <input
            value={this.state.firstNameInput}
            type="text"
            className="input"
            onChange={(e) => {
              this.inputHandler(e, "firstNameInput");
            }}
          ></input>

          <label className="last-name"> Last Name</label>
          <input
            value={this.state.lastNameInput}
            type="text"
            className="input"
            onChange={(e) => {
              this.inputHandler(e, "lastNameInput");
            }}
          ></input>

          <label className="email"> Email address</label>
          <input
            value={this.state.emailInput}
            type="text"
            className="input input-email"
            onChange={(e) => {
              this.inputHandler(e, "emailInput");
            }}
          ></input>

          <label className="pw"> Password</label>
          <input
            value={this.state.passwordInput}
            type="password"
            className="input inputPassword"
            onChange={(e) => {
              this.inputHandler(e, "passwordInput");
            }}
          ></input>

          <button className="primary-button signup-button"> Sign Up</button>
          <h3 style={{ color: this.state.successMessage ? "green" : "red" }}>
            {" "}
            {this.state.successMessage}{" "}
          </h3>
        </div>
      </form>
    );
  }
}
export default SignUp;
