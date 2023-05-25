import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import { useOutletContext } from "react-router";

export default function Home(props) {
  const user = useOutletContext();

  return (
    <>
      <Hero user={user} />
      <About />
      <Team />
      <Contact />
    </>
  );
}
