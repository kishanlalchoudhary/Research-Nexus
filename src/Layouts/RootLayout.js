import React from "react";
import { Outlet } from "react-router";

export default function RootLayout(props) {
  return (
    <div>
      <Outlet context={props.user} />
    </div>
  )
}
