import React from "react";
import { Link } from "react-router-dom";

import style from "./Team.module.css";

export default function Team() {
  return (
    <div className={style.team}>
      <h1
        className="text-uppercase fw-bolder text-center my-2 my-md-5"
        style={{ fontSize: "2.5em" }}
      >
        our team
      </h1>
      <div className={style.row}>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img
                src={require("../../Images/kishanlal.jpeg")}
                alt="kishanlal-profile"
              />
            </div>
            <h4>Kishanlal Choudhary</h4>
            <p className={style.role}>Front End Developer</p>
            <div className={style.icons}>
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
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img
                src={require("../../Images/aryan.jpeg")}
                alt="aryan-profile"
              />
            </div>
            <h4>Aryan Jasuja</h4>
            <p className={style.role}>Front End Developer</p>
            <div className={style.icons}>
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
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img
                src={require("../../Images/atharva.jpeg")}
                alt="atharva-profile"
              />
            </div>
            <h4>Atharva Choudhari</h4>
            <p className={style.role}>Back End Developer</p>
            <div className={style.icons}>
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
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.imgContainer}>
              <img
                src={require("../../Images/prasad.png")}
                alt="prasad-profile"
              ></img>
            </div>
            <h4>Prasad Dhondge</h4>
            <p className={style.role}>Back End Developer</p>
            <div className={style.icons}>
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
    </div>
  );
}
