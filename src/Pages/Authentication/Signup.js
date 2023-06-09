import React, { useState } from "react";
import { auth, db } from "../../Config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Link, useOutletContext } from "react-router-dom";
import { Navigate } from "react-router-dom";
import style from "./authentication.module.css";

export default function Signup(props) {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const user = useOutletContext();
  const [errorMsg, setErrorMsg] = useState("");

  const usersCollectionRef = collection(db, "users");

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.name ||
      !signupDetails.role
    ) {
      setErrorMsg("Fill all fields");
      return;
    } else {
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
        setErrorMsg(err);
      }
    }
  };

  return (
    <>
      {user === null ? (
        <div className={style.container}>
          <div className={style.formBox}>
            <h1 id={style.title}>Sign Up</h1>
            <h4 style={{ color: "red" }}>{errorMsg}</h4>
            <form>
              <div className={style.inputGroup}>
                <div className={style.inputField} id="namefield">
                  <i className="fa-solid fa-user-large"></i>
                  <input
                    type="text"
                    name="name"
                    value={signupDetails.name}
                    placeholder="Name..."
                    onChange={(e) =>
                      setSignupDetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className={style.inputField}>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={signupDetails.email}
                    placeholder="Email..."
                    onChange={(e) =>
                      setSignupDetails((prev) => ({
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
                    value={signupDetails.password}
                    placeholder="Password..."
                    onChange={(e) =>
                      setSignupDetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={style.roleField}>
                  <input
                    type="radio"
                    name="role"
                    id="student"
                    value="student"
                    onClick={(e) =>
                      setSignupDetails((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="student">Student</label>
                  <input
                    type="radio"
                    name="role"
                    id="professor"
                    value="professor"
                    onClick={(e) =>
                      setSignupDetails((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="professor">Professor</label>
                  <input
                    type="radio"
                    name="role"
                    id="organization"
                    value="organization"
                    onClick={(e) =>
                      setSignupDetails((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="organization">Organization</label>
                </div>
                <p>
                  Already have an account? <Link to="/login"> Login here </Link>
                </p>
              </div>
              <div className={style.btnField}>
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
