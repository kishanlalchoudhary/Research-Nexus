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
                Research Nexus is a premier online platform dedicated to
                connecting aspiring researchers with exciting research
                internship opportunities.
              </p>
              <h2 className="fw-bold fs-2">Why Research Nexus ?</h2>
              <p>
                We understand the importance of gaining practical experience in
                the field of research, and our mission is to bridge the gap
                between students and organizations offering valuable
                internships.
              </p>
              <p>
                At Research Nexus, we believe that internships play a crucial
                role in shaping an individual's academic and professional
                journey. They provide invaluable opportunities to apply
                theoretical knowledge, develop practical skills, and gain a
                deeper understanding of various research disciplines. Our
                platform is designed to streamline the process of finding and
                applying for research internships, making it easier for students
                to embark on their research careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
