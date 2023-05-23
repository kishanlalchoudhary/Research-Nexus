import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <div>
      Hero
      <Link to="/dashboard">Get Started</Link>
    </div>
  );
}
