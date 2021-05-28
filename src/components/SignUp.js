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
      firstNamecheck: "",
      lastNamecheck: "",
      emailCheck: "",
      passwordCheck: "",
      errorMsg: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.validateFirstLastNames = this.validateFirstLastNames.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  inputHandler(e, stateName) {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  validateFirstLastNames(stateKey, stateCheckKey, msg) {
    if (this.state[stateKey] === "" || /\d/.test(this.state[stateKey])) {
      this.setState({
        [stateCheckKey]: msg,
      });
      return false;
    } else {
      this.setState({
        [stateCheckKey]: "",
      });
      return true;
    }
  }

  validateEmail(stateKey, stateCheckKey, msg, usrAry) {
    const userMatch = usrAry.find((item) => {
      return item.email === this.state[stateKey];
    });
    if (this.state[stateKey] === "" || userMatch) {
      this.setState({
        [stateCheckKey]: msg,
      });
      return false;
    } else {
      this.setState({
        [stateCheckKey]: "",
      });
      return true;
    }
  }

  validatePassword(stateKey, stateCheckKey, msg) {
    if (this.state[stateKey] === "") {
      this.setState({
        [stateCheckKey]: msg,
      });
      return false;
    } else {
      this.setState({
        [stateCheckKey]: "",
      });
      return true;
    }
  }

  submitHandler(e) {
    e.preventDefault();
    const userArrayString = localStorage.getItem("users");
    const userArray = !userArrayString ? [] : JSON.parse(userArrayString);

    const validationFName = this.validateFirstLastNames(
      "firstNameInput",
      "firstNamecheck",
      "Wrong first Name"
    );
    const validationLName = this.validateFirstLastNames(
      "lastNameInput",
      "lastNamecheck",
      "Wrong last Name"
    );

    const validationEmail = this.validateEmail(
      "emailInput",
      "emailCheck",
      "Please enter valid email",
      userArray
    );

    const validationPassword = this.validatePassword(
      "passwordInput",
      "passwordCheck",
      "Please enter the password"
    );

    if (
      validationFName &&
      validationLName &&
      validationEmail &&
      validationPassword
    ) {
      const users = {
        firstName: this.state.firstNameInput,
        lastName: this.state.lastNameInput,
        email: this.state.emailInput,
        passowrd: this.state.passwordInput,
      };

      userArray.push(users);

      localStorage.setItem("users", JSON.stringify(userArray));
      this.setState({
        errorMsg: "",
      });
      this.props.updateDisplay("signin");
    } else {
      this.setState({
        errorMsg: "Please fix the error",
      });
    }
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
          <p className="error-msg"> {this.state.firstNamecheck} </p>

          <label className="last-name"> Last Name</label>
          <input
            value={this.state.lastNameInput}
            type="text"
            className="input"
            onChange={(e) => {
              this.inputHandler(e, "lastNameInput");
            }}
          ></input>
          <p className="error-msg"> {this.state.lastNamecheck} </p>

          <label className="email"> Email address</label>
          <input
            value={this.state.emailInput}
            type="email"
            className="input input-email"
            onChange={(e) => {
              this.inputHandler(e, "emailInput");
            }}
          ></input>
          <p className="error-msg"> {this.state.emailCheck} </p>

          <label className="pw"> Password</label>
          <input
            value={this.state.passwordInput}
            type="password"
            className="input inputPassword"
            onChange={(e) => {
              this.inputHandler(e, "passwordInput");
            }}
          ></input>
          <p className="error-msg"> {this.state.passwordCheck} </p>

          <button className="primary-button signup-button"> Sign Up</button>
          <h3 className="error-msg">{this.state.errorMsg}</h3>
        </div>
      </form>
    );
  }
}
export default SignUp;
