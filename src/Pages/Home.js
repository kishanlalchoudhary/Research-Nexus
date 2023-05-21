import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";

export default function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/dashboard">Get Started</Link>
      <About />
      <Team />
      <Contact />
    </div>
  );
}
