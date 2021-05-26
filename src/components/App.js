import "./App.css";
import React from "react";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Dashboard from "./Dashboard.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      userLoggedIn: false,
    };

    this.signInHandler = this.signInHandler.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
    this.updateLoggedInStatus = this.updateLoggedInStatus.bind(this);
  }
  signInHandler() {
    this.setState({
      display: "signin",
    });
  }

  signUpHandler() {
    this.setState({
      display: "signup",
    });
  }

  updateLoggedInStatus(status) {
    this.setState({
      userLoggedIn: status,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="buttons">
          <button className="sign-in-choice" onClick={this.signInHandler}>
            Sign In
          </button>
          <button className="sign-up-choice" onClick={this.signUpHandler}>
            Sign Up
          </button>
        </div>

        {this.state.display === "signup" && <SignUp />}
        {this.state.display === "signin" && (
          <SignIn updateLoggedInStatus={this.updateLoggedInStatus} />
        )}

        {this.state.userLoggedIn && <Dashboard />}
      </div>
    );
  }
}

export default App;
