import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard(props) {
  const [user, setUser] = props.user;
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    setNavToggle(false);
    console.log(`from useeffect ${navToggle}`);
  }, []);

  const navToggler = () => {
    setNavToggle(!navToggle);
    if (navToggle) {
      document.querySelector(".sidebar").classList.remove("active");
    } else {
      document.querySelector(".sidebar").classList.add("active");
    }
    console.log(`from function ${navToggle}`);
  };

  return (
    <>
      {user !== null ? (
        <div className="dashboard">
          {/* <!-- sidebar --> */}
          <div className="sidebar">
            <h1 className="logo" onClick={navToggler}>
              JobsPlace
            </h1>
            <div className="menus">
              <Link to="#">
                <ion-icon name="home-outline"></ion-icon>Home
              </Link>
              <Link to="#">
                <ion-icon name="newspaper-outline"></ion-icon>Find jobs
              </Link>
              <Link to="#">
                <ion-icon name="stats-chart-outline"></ion-icon>Performance
              </Link>
              <Link to="#">
                <ion-icon name="bookmarks-outline"></ion-icon>Bookmarks
              </Link>
              <Link to="#">
                <ion-icon name="mail-unread-outline"></ion-icon>Message
              </Link>
              <Link to="#">
                <ion-icon name="settings-outline"></ion-icon>Setting
              </Link>
            </div>
            <div className="profile">
              <img
                src={require("../../Images/profile.png")}
                className="profile-img"
                alt="profile-img"
              />
              <div className="profile-name">
                <h4>Kishanlal Choudhary</h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>

          {/* <!-- main --> */}
          <div className="main">
            <div className="main-header">
              <ion-icon
                id="menu-bar"
                name="menu-outline"
                onClick={navToggler}
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
            <div className="sort">
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
            </div>
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
          </div>

          {/* <!-- right section : detail jobs --> */}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                  sed deleniti voluptate aut ad delectus.
                </p>
                <Link to="#">Read more</Link>
              </div>
              <hr className="divider" />
              <div className="qualification">
                <h4>Qualification</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem, perspiciatis esse! Voluptatibus voluptates asperiores
                    nam atque nisi.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet nam repudiandae, fugit aut commodi. Facere.
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam perspiciatis assumenda atque corporis nam reiciendis
                    maiores eaque deleniti veritatis.
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
          {/* <div>Dashboard</div>
          <button onClick={props.logoutHandler}>Logout</button> */}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
