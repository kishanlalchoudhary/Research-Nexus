import React from "react";
import { Link } from "react-router-dom";
import "./default.css";

export default function Navbar(props) {
  const [user, setUser] = props.user;

  return (
    <div className="navbar container-fluid">
      <div className="navbar-body container">
        <div className="nav-logo">
          <img
            src={require("../../Images/Research-Nexus-Logo-Final.png")}
            alt=""
          />
        </div>
        {user == null ? (
          <Link className="nav-login" to="/login">
            <ion-icon name="log-in-outline"></ion-icon>Login
          </Link>
        ) : (
          <button className="nav-logout" onClick={props.logout}>
            <ion-icon name="log-out-outline"></ion-icon>Logout
          </button>
        )}
      </div>
    </div>
  );
}
