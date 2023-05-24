import React from "react";
import { useOutletContext } from "react-router";

export default function PublishOpportunity() {
  const navToggleHandler = useOutletContext();

  return (
    <>
      <div className="main-header">
        <ion-icon
          id="menu-bar"
          name="menu-outline"
          onClick={navToggleHandler}
        ></ion-icon>
      </div>
      <div>
        <input type="file" name="logo"></input>
        <input type="text" name="companyName"></input>
        <select>
          <option>Blockchain</option>
          <option>AI/ML</option>
          <option>NLP</option>
          <option>Data Science</option>
          <option>Cyber Security</option>
        </select>
        <select>
          <option>Letter of Recommendation</option>
          <option>Certificate of Completion</option>
          <option>Stipend/Scholarship</option>
          <option>Research Funding</option>
          <option>Mentoring and Guidance</option>
          <option>Publication Support</option>
          <option>Travel Allowance</option>
          <option>Networking and Collaboration</option>
        </select>
        <input type="text" name="location"></input>
        <input type="text" name="duration"></input>
        <input type="text" name="vacancy"></input>
        <textarea name="aboutProfessor"></textarea>
        <textarea name="aboutOrganization"></textarea>
        <textarea name="aboutProject"></textarea>
        <textarea name="jobDescription"></textarea>
        <input type="text" name="googleForm"></input>
      </div>
    </>
  );
}
