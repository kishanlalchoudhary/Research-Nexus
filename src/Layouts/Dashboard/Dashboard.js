import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import "./Dashboard.css";

// Components
import Sidebar from "../../Components/Dashboard/Sidebar";
import OpportunityDetail from "../../Components/Dashboard/OpportunityDetail";

export default function Dashboard(props) {
  const [user, setUser] = props.user;
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    setNavToggle(false);
    console.log(`from useeffect ${navToggle}`);
  }, []);

  const navToggler = () => {
    setNavToggle(!navToggle);
    if (navToggle) {
      document.querySelector(".sidebar").classList.remove("active");
    } else {
      document.querySelector(".sidebar").classList.add("active");
    }
    console.log(`from function ${navToggle}`);
  };

  return (
    <>
      {user !== null ? (
        <div className="dashboard">
          <Sidebar navToggleHandler={navToggler} logout={props.logoutHandler}/>
          <div className="main">
            <Outlet context={navToggler}/>
          </div>
          <OpportunityDetail/>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
