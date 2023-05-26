import React, { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router";
import style from "./publish.module.css";
import { collection, addDoc } from "firebase/firestore";
import { auth, db, storage } from "../../Config/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export default function PublishOpportunity(props) {
  const navToggleHandler = useOutletContext();
  const user = props.user;

  const [opportunityDetails, setOpportunityDetails] = useState({
    companyName: "",
    companyLogo: null,
    location: "",
    vacancies: 0,
    aboutCompany: "",
    jobDescription: "",
    duration: "",
    domain: "",
    benefits: "",
    gForm: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const opportunitiesCollectionRef = collection(db, "opportunities");

  const navigate = useNavigate();

  const opportunitiesHandler = async (e) => {
    e.preventDefault();
    if (
      !opportunityDetails.companyName ||
      !opportunityDetails.companyLogo ||
      !opportunityDetails.location ||
      !opportunityDetails.vacancies ||
      !opportunityDetails.aboutCompany ||
      !opportunityDetails.jobDescription ||
      !opportunityDetails.duration ||
      !opportunityDetails.domain ||
      !opportunityDetails.benefits ||
      !opportunityDetails.gForm
    ) {
      setErrorMsg("Fill all fields");
      return;
    } else {
      try {
        await addDoc(opportunitiesCollectionRef, {
          companyName: opportunityDetails.companyName,
          location: opportunityDetails.location,
          vacancies: opportunityDetails.vacancies,
          aboutCompany: opportunityDetails.aboutCompany,
          jobDescription: opportunityDetails.jobDescription,
          duration: opportunityDetails.duration,
          domain: opportunityDetails.domain,
          benefits: opportunityDetails.benefits,
          gForm: opportunityDetails.gForm,
          userId: auth?.currentUser?.uid,
        });
        const filesFolderRef = ref(storage, `companyLogos/${opportunityDetails.companyLogo.name}`);
        await uploadBytes(filesFolderRef, opportunityDetails.companyLogo);
        setOpportunityDetails({
          ...opportunityDetails,
          companyName: "",
          companyLogo: null,
          location: "",
          vacancies: 0,
          aboutCompany: "",
          jobDescription: "",
          duration: "",
          domain: "",
          benefits: "",
          gForm: "",
        });
        navigate("/dashboard/discover");
      } catch (err) {
        setErrorMsg(err);
      }
    }
  };

  return (
    <>
      {user !== null ? (
        <div>
          <ion-icon
            id="menu-bar"
            name="menu-outline"
            onClick={navToggleHandler}
          ></ion-icon>
          <div className={style.formBox}>
            <h1 id={style.title}>Publish Opportunities</h1>
            <h3 className={style.error}>{errorMsg}</h3>
            <form>
              <div className={style.inputGroup}>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-user-large"></i> */}
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={opportunityDetails.name}
                    placeholder="Company Name..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        companyName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.inputField}>
                  <i className="fa-solid fa-lo"></i>
                  <label htmlFor="companyLogo">
                    <p>Logo</p>
                  </label>
                  <input
                    required
                    type="file"
                    id="companyLogo"
                    name="companylogo"
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        companyLogo: e.target.files[0],
                      }))
                    }
                  />
                </div>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <input
                    required
                    type="text"
                    name="location"
                    value={opportunityDetails.location}
                    placeholder="Location..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-lock"></i> */}
                  <input
                    required
                    type="number"
                    name="vacancies"
                    value={opportunityDetails.vacancies}
                    placeholder="No of Vacancies..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        vacancies: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-lo"></i> */}
                  <input
                    required
                    type="text"
                    name="aboutCompany"
                    value={opportunityDetails.aboutCompany}
                    placeholder="About Company..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        aboutCompany: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-lo"></i> */}
                  <input
                    required
                    type="text"
                    name="jobDescription"
                    value={opportunityDetails.jobDescription}
                    placeholder="Job Description..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        jobDescription: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.roleField}>
                  <input
                    type="radio"
                    name="duration"
                    id="1 Month"
                    value="1 Month"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="1 Month">1 Month</label>
                  <input
                    type="radio"
                    name="duration"
                    id="6 Month"
                    value="6 Month"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="6 Month">6 Month</label>
                  <input
                    type="radio"
                    name="duration"
                    id="12 Month"
                    value="12 Month"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="12 Month">12 Month</label>
                </div>
                <div className={style.roleField}>
                  <input
                    type="radio"
                    name="domain"
                    id="NLP"
                    value="NLP"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        domain: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="NLP">NLP</label>
                  <input
                    type="radio"
                    name="domain"
                    id="AI/ML"
                    value="AI/ML"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        domain: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="AI/ML">AI/ML</label>
                  <input
                    type="radio"
                    name="domain"
                    id="blockchain"
                    value="blockchain"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        domain: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="blockchain">Blockchain</label>
                </div>
                <div className={style.roleField}>
                  <input
                    type="radio"
                    name="benefits"
                    id="benefit1"
                    value="LOR"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        benefits: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="benefit1">LOR</label>
                  <input
                    type="radio"
                    name="benefits"
                    id="benefit2"
                    value="certificate"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        benefits: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="benefit2">Certificate</label>
                  <input
                    type="radio"
                    name="benefits"
                    id="benefit3"
                    value="stipend"
                    onClick={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        benefits: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="benefit3">Stipend</label>
                </div>
                <div className={style.inputField}>
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <input
                    type="text"
                    name="gForm"
                    value={opportunityDetails.gForm}
                    placeholder="Goggle Form Link..."
                    onChange={(e) =>
                      setOpportunityDetails((prev) => ({
                        ...prev,
                        gForm: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className={style.btnField}>
                <button
                  type="button"
                  id="signupbtn"
                  onClick={opportunitiesHandler}
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // <div>
        //   <div>
        //     <input type="file" name="logo"></input>
        //     <input type="text" name="companyName"></input>
        //     <select>
        //       <option>Blockchain</option>
        //       <option>AI/ML</option>
        //       <option>NLP</option>
        //       <option>Data Science</option>
        //       <option>Cyber Security</option>
        //     </select>
        //     <select>
        //       <option>Letter of Recommendation</option>
        //       <option>Certificate of Completion</option>
        //       <option>Stipend/Scholarship</option>
        //       <option>Research Funding</option>
        //       <option>Mentoring and Guidance</option>
        //       <option>Publication Support</option>
        //       <option>Travel Allowance</option>
        //       <option>Networking and Collaboration</option>
        //     </select>
        //     <input type="text" name="location"></input>
        //     <input type="text" name="duration"></input>
        //     <input type="text" name="vacancy"></input>
        //     <textarea name="aboutProfessor"></textarea>
        //     <textarea name="aboutOrganization"></textarea>
        //     <textarea name="aboutProject"></textarea>
        //     <textarea name="jobDescription"></textarea>
        //     <input type="text" name="googleForm"></input>
        //   </div>
        // </div>
        <Navigate to="/login" />
      )}
    </>
  );
}
