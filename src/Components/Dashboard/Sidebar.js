import { Button } from "bootstrap";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <h1 className="logo" onClick={props.navToggleHandler}>
        <img src={require("../../Images/Research-Nexus-Logo-Final.png")} />
      </h1>
      <div className="menus">
        <NavLink to="/">
          <ion-icon name="home-outline"></ion-icon>Home
        </NavLink>
        <NavLink to="/dashboard/discover">
          <ion-icon name="newspaper-outline"></ion-icon>Discover Opportunities
        </NavLink>
        <NavLink to="/dashboard/publish">
          <ion-icon name="create-outline"></ion-icon>Publish Opportunities
        </NavLink>
        <button className="logout" onClick={props.logout}>
          <ion-icon name="log-out-outline"></ion-icon>
          Logout
        </button>
      </div>
      <div className="profile">
        <img
          src={require("../../Images/profile.png")}
          className="profile-img"
          alt="profile-img"
        />
        <div className="profile-name">
          <h4>Kishanlal Choudhary</h4>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
