import React from "react";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="page-content card-parent">
        <div className="card-box">
          <img
            className="card-image"
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            alt=""
          />

          <h3 className="card-person-name">
            {" "}
            {this.props.currentLoggedInUser.firstName}{" "}
            {this.props.currentLoggedInUser.lastName}
          </h3>
          <p className="card-person-email">
            {" "}
            {this.props.currentLoggedInUser.email}
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
