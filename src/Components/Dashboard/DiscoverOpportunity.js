import React, { useEffect, useState } from "react";
import { Link, Navigate, useOutletContext } from "react-router-dom";
import { db, auth, storage } from "../../Config/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export default function DiscoverOpportunity(props) {
  const user = props.user;
  const navToggleHandler = useOutletContext();
  const [opportunityList, setOpportunityList] = useState([]);

  const opportunitiesCollectionRef = collection(db, "opportunities");

  const getOpportunityList = async () => {
    try {
      const data = await getDocs(opportunitiesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOpportunityList(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getOpportunityList();
  }, []);

  return (
    <>
      {user !== null ? (
        <div>
          <div className="main-header">
            <ion-icon
              id="menu-bar"
              name="menu-outline"
              onClick={navToggleHandler}
            ></ion-icon>
            <div className="search">
              <input type="text" placeholder="Search your best job here..." />
              <button className="btn-search">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div className="filter-wrapper">
            <p>Recommendation</p>
            <div className="filter">
              <button className="btn-filter">Data Science</button>
              <button className="btn-filter">Data Engineer</button>
              <button className="btn-filter">Data Analyst</button>
              <button className="btn-filter">Data Visualization</button>
              <button className="btn-filter">CRM Analyst</button>
            </div>
          </div>
          {/* <div className="sort">
        <p>Sort</p>
        <div className="sort-list">
          <select>
            <option value="0">All</option>
            <option value="1">Newest Post</option>
            <option value="2">Oldest post</option>
            <option value="3">Most Relevant</option>
            <option value="4">Highest Paid</option>
          </select>
        </div>
      </div> */}
          <div className="wrapper">
            {opportunityList.map((opportunity) => (
              <button className="links" key={opportunity.userId}>
                <div className="cardCss">
                  <div className="card-left blue-bg">
                    <img src={require("../../Images/google.png")} alt="" />
                  </div>
                  <div className="card-center">
                    <h3>{opportunity.companyName}</h3>
                    <p className="card-detail">{opportunity.domain}</p>
                    <p className="card-loc">
                      <ion-icon name="location-outline"></ion-icon>{" "}
                      {opportunity.location}
                    </p>
                    <div className="card-sub">
                      {/* <p>
                      <ion-icon name="today-outline"></ion-icon> 1 minutes ago
                    </p> */}
                      <p>
                        <ion-icon name="hourglass-outline"></ion-icon>
                        {opportunity.duration}
                      </p>
                      <p>
                        <ion-icon name="people-outline"></ion-icon>
                        {opportunity.vacancies}Vacancies
                      </p>
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="card-tag">
                      <h5>Apply Now</h5>
                      <Link to={opportunity.gForm}>Goggle Form</Link>
                    </div>
                    <div className="card-salary">
                      <h5>Benefits</h5>
                      <p>{opportunity.benefits}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
