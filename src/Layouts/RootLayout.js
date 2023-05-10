import React from "react";
import { Outlet } from "react-router";

export default function RootLayout(props) {
  return (
    <div>
      {(props.authState[0] === "true") ? (<button onClick={props.logoutHandler}>Logout</button>):("")}
      <Outlet context={props.authState} />
    </div>
  )
}
