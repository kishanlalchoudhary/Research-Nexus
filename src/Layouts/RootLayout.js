import React from "react";
import { Outlet } from "react-router";

export default function RootLayout(props) {
  return (
    <div>
      {(props.user[0] !== null) ? (<button onClick={props.logoutHandler}>Logout</button>):("")}
      <Outlet context={props.user} />
    </div>
  )
}
