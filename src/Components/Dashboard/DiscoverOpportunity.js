import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function DiscoverOpportunity(props) {
  const navToggleHandler = useOutletContext();

  return (
    <>
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
        <div className="cardCss">
          <div className="card-left blue-bg">
            <img src={require("../../Images/google.png")} alt="" />
          </div>
          <div className="card-center">
            <h3>Google</h3>
            <p className="card-detail">Data Science, Data Engineer</p>
            <p className="card-loc">
              <ion-icon name="location-outline"></ion-icon>Abcd street
            </p>
            <div className="card-sub">
              <p>
                <ion-icon name="today-outline"></ion-icon> 1 minutes ago
              </p>
              <p>
                <ion-icon name="hourglass-outline"></ion-icon> Full-time
              </p>
              <p>
                <ion-icon name="people-outline"></ion-icon> 200 Applicants
              </p>
            </div>
          </div>
          <div className="card-right">
            <div className="card-tag">
              <h5>Division</h5>
              <Link to="#">Data Engineer</Link>
            </div>
            <div className="card-salary">
              <p>
                <b>$350k</b> <span>/ years</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cardCss">
          <div className="card-left blue-bg">
            <img src={require("../../Images/google.png")} alt="" />
          </div>
          <div className="card-center">
            <h3>Google</h3>
            <p className="card-detail">Data Science, Data Engineer</p>
            <p className="card-loc">
              <ion-icon name="location-outline"></ion-icon>Abcd street
            </p>
            <div className="card-sub">
              <p>
                <ion-icon name="today-outline"></ion-icon> 1 minutes ago
              </p>
              <p>
                <ion-icon name="hourglass-outline"></ion-icon> Full-time
              </p>
              <p>
                <ion-icon name="people-outline"></ion-icon> 200 Applicants
              </p>
            </div>
          </div>
          <div className="card-right">
            <div className="card-tag">
              <h5>Division</h5>
              <Link to="#">Data Engineer</Link>
            </div>
            <div className="card-salary">
              <p>
                <b>$350k</b> <span>/ years</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cardCss">
          <div className="card-left blue-bg">
            <img src={require("../../Images/google.png")} alt="" />
          </div>
          <div className="card-center">
            <h3>Google</h3>
            <p className="card-detail">Data Science, Data Engineer</p>
            <p className="card-loc">
              <ion-icon name="location-outline"></ion-icon>Abcd street
            </p>
            <div className="card-sub">
              <p>
                <ion-icon name="today-outline"></ion-icon> 1 minutes ago
              </p>
              <p>
                <ion-icon name="hourglass-outline"></ion-icon> Full-time
              </p>
              <p>
                <ion-icon name="people-outline"></ion-icon> 200 Applicants
              </p>
            </div>
          </div>
          <div className="card-right">
            <div className="card-tag">
              <h5>Division</h5>
              <Link to="#">Data Engineer</Link>
            </div>
            <div className="card-salary">
              <p>
                <b>$350k</b> <span>/ years</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cardCss">
          <div className="card-left blue-bg">
            <img src={require("../../Images/google.png")} alt="" />
          </div>
          <div className="card-center">
            <h3>Google</h3>
            <p className="card-detail">Data Science, Data Engineer</p>
            <p className="card-loc">
              <ion-icon name="location-outline"></ion-icon>Abcd street
            </p>
            <div className="card-sub">
              <p>
                <ion-icon name="today-outline"></ion-icon> 1 minutes ago
              </p>
              <p>
                <ion-icon name="hourglass-outline"></ion-icon> Full-time
              </p>
              <p>
                <ion-icon name="people-outline"></ion-icon> 200 Applicants
              </p>
            </div>
          </div>
          <div className="card-right">
            <div className="card-tag">
              <h5>Division</h5>
              <Link to="#">Data Engineer</Link>
            </div>
            <div className="card-salary">
              <p>
                <b>$350k</b> <span>/ years</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
