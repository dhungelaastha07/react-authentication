import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="section home-section">
        <div className="home-content">
          <h1 className="home-tagline"> Let's get connected NOW!! </h1>
          <p className="home-description">
            {" "}
            We would love to connect you with your pals.
          </p>
          <button
            className="primary-button home-button"
            onClick={() => {
              this.props.updateDisplay("signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
