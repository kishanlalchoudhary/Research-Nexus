import React from "react";
import { Link } from "react-router-dom";

export default function OpportunityDetail() {
  return (
    <div className="detail">
      <ion-icon id="close-detail" name="close-outline"></ion-icon>
      <div className="detail-header">
        <img src={require("../../Images/drdo.png")} alt="" />
        <h2>DRDO</h2>
        <p>AI/ML</p>
      </div>
      <hr className="divider" />
      <div className="detail-desc">
        <div className="about">
          <h4>About Company</h4>
          <p>
            DRDO is the R&D wing of Ministry of Defence, Govt of India, with a
            vision to empower India with cutting-edge defence technologies and a
            mission to achieve self-reliance in critical defence technologies
            and systems.
          </p>
          {/* <Link to="#">Read more</Link> */}
        </div>
        <hr className="divider" />
        <div className="qualification">
          <h4>Job Description</h4>
          During the training/internship, the DRDO assigns projects. Since the
          internship is unpaid, you will be awarded a certificate for
          successfully completing the internship based on your performance. If
          you do a brilliant job, you could even earn a LOR (Letter of
          Recommendation), which will help you tremendously if you go for higher
          education in another country.
          {/* <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              perspiciatis esse! Voluptatibus voluptates asperiores nam atque
              nisi.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              nam repudiandae, fugit aut commodi. Facere.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              perspiciatis assumenda atque corporis nam reiciendis maiores eaque
              deleniti veritatis.
            </li>
          </ul> */}
        </div>
        <hr className="divider" />
        <div className="detail-btn">
          <Link to="https://forms.gle/AEqAVPEiNZ8V8NUVA">
            <button className="btn-apply">Apply Now</button>
          </Link>
          {/* <button className="btn-save">Save Job</button> */}
        </div>
      </div>
    </div>
  );
}
