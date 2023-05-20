import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import React, { useState, useEffect,useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const contactsCollectionRef = collection(db, "contacts");
  let navigate = useNavigate();

  const contacts = async () => {
    await addDoc(contactsCollectionRef, {
      firstName,
      lastName,
      email,
      message,
      id: auth.currentUser.uid,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    // navigate("/");
  };

  return (
    <>
      <div class="container-fluid aboutUSLanding">
        <div class="container box pt-xs-5">
          <div class="row justify-content-center align-items-center pt-5">
            <div class="col-lg-5 col-12 about-image my-sm-3 my-2">
              <img
                src={require("../../Images/contact-us.png")}
                class="img-fluid c-img"
                alt=""
              />
            </div>
            <div class="col-lg-7 col-12 about-content my-4">
              <h1 class="text-uppercase fw-bolder text-center fs-1 mb-4">
                Contact Us
              </h1>
              <div class="row contact-content m-sm-m m-2">
                <div class="form-floating mb-3">
                  <input
                  value={firstName}
                    type="text"
                    class="form-control"
                    id="floatingFirstName"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <label for="floatingFirstName" class="tw px-4">
                    First Name
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                  value={lastName}
                    type="text"
                    class="form-control"
                    id="floatingLastName"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                  <label for="floatingLastName" class="tw px-4">
                    Last Name
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                  value={email}
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label for="floatingEmail" class="tw px-4">
                    Email address
                  </label>
                </div>
                <div class="mb-3">
                  <label for="floatingMessage" class="form-label">
                    Message
                  </label>
                  <textarea
                    value={message}
                    class="form-control"
                    id="floatingMessage"
                    rows="3"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="btnField">
                  <button type="submit" id="contactbtn" onClick={contacts}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
