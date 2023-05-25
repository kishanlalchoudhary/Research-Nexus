import React from "react";
import { Link } from "react-router-dom";
import "./default.css";

export default function Navbar(props) {
  const user = props.user;

  return (
    <div className="navbar container-fluid">
      <div className="navbar-body container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src={require("../../Images/Research-Nexus-Logo-Final.png")}
              alt=""
            />
          </Link>
        </div>
        {user == null ? (
          <Link className="nav-btn" to="/login">
            <ion-icon name="log-in-outline"></ion-icon>Login
          </Link>
        ) : (
          <button className="nav-btn" onClick={props.logout}>
            <ion-icon name="log-out-outline"></ion-icon>Logout
          </button>
        )}
      </div>
    </div>
  );
}
