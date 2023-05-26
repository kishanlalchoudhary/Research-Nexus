import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero(props) {
  const user = props.user;

  return (
    <header className="container-fluid">
      <div className="container header-section flex">
        <div className="header-left">
          <h1>Discover Your Research Potential</h1>
          <p>
            Join Research Nexus today and unlock a world of research internship
            opportunities that will shape your academic and professional
            success.
          </p>
          {user !== null ? (
            <Link
              to="/dashboard/discover"
              className="primary-button get-started-button"
            >
              Get started
            </Link>
          ) : (
            <Link to="/dashboard" className="primary-button get-started-button">
              Get started
            </Link>
          )}
        </div>
        <div className="header-right">
          <img src={require("../../Images/7566.jpg")} alt="hero" />
        </div>
      </div>
    </header>
  );
}
