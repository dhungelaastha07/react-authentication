import "./App.css";
import React from "react";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Dashboard from "./Dashboard.js";
import NavBar from "./NavBar";
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "home",
      currentLoggedInUser: null,
    };

    this.updateLoggedInStatus = this.updateLoggedInStatus.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateLoggedInStatus(matchedUser) {
    this.setState({
      currentLoggedInUser: matchedUser,
    });
  }

  updateDisplay(arg) {
    this.setState({
      display: arg,
    });
  }

  render() {
    return (
      <div>
        <NavBar
          updateDisplay={this.updateDisplay}
          currentLoggedInUser={this.state.currentLoggedInUser}
          updateLoggedInStatus={this.updateLoggedInStatus}
        />

        <div className="page-content">
          {this.state.display === "home" && (
            <Home updateDisplay={this.updateDisplay} />
          )}
          {this.state.display === "signup" && (
            <SignUp updateDisplay={this.updateDisplay} />
          )}
          {this.state.display === "signin" && (
            <SignIn
              updateDisplay={this.updateDisplay}
              updateLoggedInStatus={this.updateLoggedInStatus}
            />
          )}
          {this.state.display === "dashboard" && (
            <Dashboard currentLoggedInUser={this.state.currentLoggedInUser} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
