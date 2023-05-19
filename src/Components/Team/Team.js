import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

export default function Team() {
  return (
    <>
      <div className="heading">
        <h1>Our Team</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={require("../../Images/kishanlal.jpeg")} alt="kishanlal-profile" />
            </div>
            <h3>Kishanlal Choudhary</h3>
            <p>Front End Developer</p>
            <div className="icons">
              <Link to="https://github.com/kishanlalchoudhary">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
              <Link to="https://www.linkedin.com/in/kishanlal-choudhary-a94154217/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link to="https://www.instagram.com/_kishanlal123">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img
                src={require("../../Images/aryan.jpeg")}
                alt="aryan-profile"
              />
            </div>
            <h3>Aryan Jasuja</h3>
            <p>Front End Developer</p>
            <div className="icons">
              <Link to="https://github.com/aryanjasuja4">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
              <Link to="https://www.linkedin.com/in/aryan-jasuja-3b3027231">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link to="https://www.instagram.com/aryan.jasuja">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img
                src={require("../../Images/atharva.jpeg")}
                alt="atharva-profile"
              />
            </div>
            <h3>Atharva Choudhari</h3>
            <p>Back End Developer</p>
            <div className="icons">
              <Link to="https://github.com/atharvac1301">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
              <Link to="https://www.linkedin.com/in/atharva-choudhari-816807251">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link to="https://www.instagram.com/achou_1301">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img
                src={require("../../Images/prasad.png")}
                alt="prasad-profile"
              ></img>
            </div>
            <h3>Prasad Dhondge</h3>
            <p>Back End Developer</p>
            <div className="icons">
              <Link to="https://github.com/prasad1073">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
              <Link to="https://www.linkedin.com/in/prasad-dhondge-b6112b239">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link to="https://instagram.com/prasadd_10">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
