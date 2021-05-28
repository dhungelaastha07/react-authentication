import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="container ">
          <div className="nav-content">
            <h1
              className="title"
              onClick={() => {
                this.props.updateDisplay("home");
              }}
            >
              ConnectLy
            </h1>

            <div className="options">
              <button
                className="nav-button"
                onClick={() => {
                  if (this.props.currentLoggedInUser) {
                    this.props.updateDisplay("dashboard");
                  } else {
                    this.props.updateDisplay("signin");
                  }
                }}
              >
                {" "}
                Dashboard{" "}
              </button>

              {!this.props.currentLoggedInUser ? (
                <div>
                  <button
                    className="nav-button"
                    onClick={() => {
                      this.props.updateDisplay("signup");
                    }}
                  >
                    {" "}
                    Sign Up{" "}
                  </button>
                  <button
                    className="nav-button"
                    onClick={() => {
                      this.props.updateDisplay("signin");
                    }}
                  >
                    {" "}
                    Log In{" "}
                  </button>
                </div>
              ) : (
                <button
                  className="nav-button"
                  onClick={() => {
                    this.props.updateDisplay("home");
                    this.props.updateLoggedInStatus(null);
                  }}
                >
                  {" "}
                  Log Out{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
