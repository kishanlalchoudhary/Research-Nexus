import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseConfig.js";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [isAuth, setIsAuth] = useOutletContext();

  const navigate = useNavigate();

  const loginChangeHandler = (e) => {
    const Value = e.target.value;
    setLoginDetails({ ...loginDetails, [e.target.name]: Value });
    console.log(loginDetails);
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );
      setLoginDetails({ ...loginDetails, email: "", password: "" });
      localStorage.setItem("isAuth", "true");
      setIsAuth("true");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isAuth === "false" ? (
        <div className="container">
          <div className="form-box">
            <h1 id="title">Login</h1>
            <form>
              <div className="input-group">

                <div className="input-field">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={loginDetails.email}
                    placeholder="Email..."
                    onChange={loginChangeHandler}
                  />
                </div>

                <div className="input-field">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    value={loginDetails.password}
                    placeholder="Password..."
                    onChange={loginChangeHandler}
                  />
                </div>
                <p>
                  {" "}
                  Lost password? <a href="#">Click here</a>
                </p>
              </div>
              <div className="btn-field">
                <button type="submit" id="signupbtn" onClick={loginHandler}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // <div className="login">
        //   <h2>Login</h2>
        //   <form>
        //     <input
        //       value={loginDetails.email}
        //       placeholder="Email..."
        //       name="email"
        //       onChange={loginChangeHandler}
        //     />
        //     <input
        //       value={loginDetails.password}
        //       placeholder="Password..."
        //       name="password"
        //       onChange={loginChangeHandler}
        //     />
        //     <button type="submit" onClick={loginHandler}>
        //       Login
        //     </button>
        //   </form>
        // </div>
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}
