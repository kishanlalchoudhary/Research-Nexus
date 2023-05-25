import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Default/Navbar";
import Footer from "../Components/Default/Footer";

export default function RootLayout(props) {
  return (
    <>
      <Navbar user={props.user} logout={props.logout} />
      <Outlet context={props.user} />
      <Footer />
    </>
  );
}
