import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Default/Footer";
import Navbar from "../Components/Default/Navbar";

export default function Home(props) {
  return (
    <div>
      <Navbar user={props.user} logout={props.logout} />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
