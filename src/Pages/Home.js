import React from "react";
import { Link } from "react-router-dom";

// Components
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";

export default function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/login">Get Started</Link>
      <Team/>
      <Contact/>
    </div>
  );
}
