import React, { useState } from "react";
import { auth, db } from "../Config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Link, useOutletContext } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Signup(props) {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [isAuth, setIsAuth] = useOutletContext();

  const usersCollectionRef = collection(db, "users");

  const navigate = useNavigate();

  const signupChangeHandler = (e) => {
    const Value = e.target.value;
    setSignupDetails({ ...signupDetails, [e.target.name]: Value });
    console.log(signupDetails);
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        signupDetails.email,
        signupDetails.password
      );
      await addDoc(usersCollectionRef, {
        name: signupDetails.name,
        email: signupDetails.email,
        password: signupDetails.password,
        role: signupDetails.role,
        userId: auth?.currentUser?.uid,
      });
      setSignupDetails({
        ...signupDetails,
        name: "",
        email: "",
        password: "",
        role: "",
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isAuth === "false" ? (
        <div className="container">
          <div className="form-box">
            <h1 id="title">Sign Up</h1>
            <form>
              <div className="input-group">
                <div className="input-field" id="namefield">
                  <i className="fa-solid fa-user-large"></i>
                  <input
                    type="text"
                    name="name"
                    value={signupDetails.name}
                    placeholder="Name..."
                    onChange={signupChangeHandler}
                  />
                </div>

                <div className="input-field">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={signupDetails.email}
                    placeholder="Email..."
                    onChange={signupChangeHandler}
                  />
                </div>

                <div className="input-field">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    value={signupDetails.password}
                    placeholder="Password..."
                    onChange={signupChangeHandler}
                  />
                </div>
                <div className="input-field">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="text"
                    name="role"
                    value={signupDetails.role}
                    placeholder="student or professor"
                    onChange={signupChangeHandler}
                  />
                </div>
                <p>
                  Already have an account?<Link to="/login">Login here</Link>
                </p>
              </div>
              <div className="btn-field">
                <button type="button" id="signupbtn" onClick={signupHandler}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}
