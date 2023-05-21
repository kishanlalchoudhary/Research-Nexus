import React from "react";
import "../../Pages/Home.css";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="container-fluid aboutUSLanding">
        <div className="container box">
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-lg-5 col-12 about-image my-sm-3 my-2">
              <img
                src={require("../../Images/about-us.png")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-12 about-content my-4 px-4">
              <h1 className="text-uppercase fw-bolder fs-1">About Us</h1>
              <p className="">
                TempTravel being the the fast growing rental service of all
                time, we here provide users with a very smooth process of
                renting vehicles by following just a few steps.
              </p>
              <h2 className="fw-bold fs-2">Why TempTravel ?</h2>
              <p>
                We here at TempTravel have launched a user-friendly platform
                with a vision of providing people with the basic transportation
                needs ensuring that they save more money and time, which is the
                current need of the hour. This platform not only provides rental
                services but we also enable the local people to generate a
                side-by-side income source.
              </p>
              <p>
                Our mission is to make travelling more efficient and focus on
                the overall development of humankind which we are sure to
                accomplish!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
