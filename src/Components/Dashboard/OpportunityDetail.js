import React from "react";
import { Link } from "react-router-dom";

export default function OpportunityDetail() {
  return (
    <div className="detail">
      <ion-icon id="close-detail" name="close-outline"></ion-icon>
      <div className="detail-header">
        <img src={require("../../Images/google.png")} alt="" />
        <h2>Google</h2>
        <p>Data Science</p>
      </div>
      <hr className="divider" />
      <div className="detail-desc">
        <div className="about">
          <h4>About Company</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sed
            deleniti voluptate aut ad delectus.
          </p>
          <Link to="#">Read more</Link>
        </div>
        <hr className="divider" />
        <div className="qualification">
          <h4>Qualification</h4>
          <ul>
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
          </ul>
        </div>
        <hr className="divider" />
        <div className="detail-btn">
          <button className="btn-apply">Apply Now</button>
          <button className="btn-save">Save Job</button>
        </div>
      </div>
    </div>
  );
}
