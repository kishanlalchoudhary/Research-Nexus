import React, { useState } from "react";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Config/firebaseConfig.js";
import { useNavigate } from "react-router";
import { Link, useOutletContext } from "react-router-dom";
import { Navigate } from "react-router-dom";
import style from "./authentication.module.css";

export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useOutletContext();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      setErrorMsg("Fill all fields");
      return;
    } else {
      try {
        await setPersistence(auth, browserLocalPersistence);
        await signInWithEmailAndPassword(
          auth,
          loginDetails.email,
          loginDetails.password
        );
        setLoginDetails({ ...loginDetails, email: "", password: "" });
        navigate(-1, { replace: true });
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
  };

  return (
    <>
      {user === null ? (
        <div className={style.container}>
          <div className={style.formBox}>
            <h1 id={style.title}>Login</h1>
            <h4 style={{ color: "red" }}>{errorMsg}</h4>
            <form>
              <div className={style.inputGroup}>
                <div className={style.inputField}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={loginDetails.email}
                    placeholder="Email..."
                    onChange={(e) =>
                      setLoginDetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className={style.inputField}>
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    value={loginDetails.password}
                    placeholder="Password..."
                    onChange={(e) =>
                      setLoginDetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
                <p>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
              <div className={style.btnField}>
                <button type="submit" id="signupbtn" onClick={loginHandler}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
