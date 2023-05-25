import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

// Components
import Sidebar from "../../Components/Dashboard/Sidebar";
import OpportunityDetail from "../../Components/Dashboard/OpportunityDetail";

export default function Dashboard(props) {
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
      <div className="dashboard">
        <Sidebar
          navToggleHandler={navToggler}
          logout={props.logoutHandler}
          user={props.user}
        />
        <div className="main">
          <Outlet context={navToggler} />
        </div>
        <OpportunityDetail />
      </div>
    </>
  );
}
