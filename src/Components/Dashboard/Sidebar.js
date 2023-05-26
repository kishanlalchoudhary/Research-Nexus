import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "../../Config/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export default function Sidebar(props) {
  const user = props.user;
  const [userDetails, setUserDetails] = useState({});
  const userDetailsRef = collection(db, "users");

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await getDocs(userDetailsRef);
      const filteredData = await data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((doc) => doc.userId === auth.currentUser.uid);
      // console.log(filteredData);
      // console.log(auth.currentUser.uid);
      setUserDetails(filteredData[0]);
    };

    getUserDetails();
  },[]);

  return (
    <div className="sidebar">
      <h1 className="logo" onClick={props.navToggleHandler}>
        <img
          src={require("../../Images/Research-Nexus-Logo-Final.png")}
          alt="logo"
        />
      </h1>
      <div className="menus">
        <NavLink to="/">
          <ion-icon name="home-outline"></ion-icon>Home
        </NavLink>
        {user !== null && (
          <NavLink to="/dashboard/discover">
            <ion-icon name="newspaper-outline"></ion-icon>Discover Opportunities
          </NavLink>
        )}
        {user !== null && userDetails.role !== "student" && (
          <NavLink to="/dashboard/publish">
            <ion-icon name="create-outline"></ion-icon>Publish Opportunities
          </NavLink>
        )}
        {user !== null && (
          <button className="logout" onClick={props.logout}>
            <ion-icon name="log-out-outline"></ion-icon>
            Logout
          </button>
        )}
      </div>
      {user !== null && (
        <div className="profile">
          <img
            src={require("../../Images/profile.png")}
            className="profile-img"
            alt="profile-img"
          />
          <div className="profile-name">
            <h4>{userDetails.name}</h4>
            <p>{userDetails.role}</p>
          </div>
        </div>
      )}
      </div>
  );
}
