import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/login">Get Started</Link>
    </div>
  );
}
