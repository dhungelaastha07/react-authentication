import "./App.css";
import React from "react";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Dashboard from "./Dashboard.js";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      userLoggedIn: false,
    };

    // this.updateLoggedInStatus = this.updateLoggedInStatus.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  // updateLoggedInStatus(status) {
  //   this.setState({
  //     userLoggedIn: status,
  //   });
  // }
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
          userLoggedIn={this.state.userLoggedIn}
        />
        <div className="page-content">
          {this.state.display === "signup" && <SignUp />}
          {this.state.display === "signin" && (
            <SignIn updateLoggedInStatus={this.updateLoggedInStatus} />
          )}
          {this.state.display === "dashboard" && <Dashboard />}
        </div>
      </div>
    );
  }
}

export default App;
