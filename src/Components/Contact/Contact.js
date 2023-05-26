import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../Config/firebaseConfig";
import "../../Pages/Home.css";
import "./Contact.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactsCollectionRef = collection(db, "contacts");

  const contacts = async () => {
    try {
      await addDoc(contactsCollectionRef, {
        firstName,
        lastName,
        email,
        message,
        userId: auth?.currentUser?.uid,
      });
      document.getElementById("contactError").innerHTML =
        "Submitted Sucessfully";
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid aboutUSLanding" id="contact">
        <div className="container box pt-xs-5">
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-lg-5 col-12 about-image my-sm-3 my-2">
              <img
                src={require("../../Images/contact-us.png")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-12 about-content my-4">
              <h1 className="text-uppercase fw-bolder text-center fs-1 mb-4">
                Contact Us
              </h1>
              <div
                id="contactError"
                style={{ color: "green", fontWeight: "700" }}
                className="flex justify-content-center align-item-center p-3 fs-4"
              ></div>
              <div className="row contact-content m-sm-m m-2">
                <div className="form-floating mb-3">
                  <input
                    value={firstName}
                    type="text"
                    className="form-control"
                    id="floatingFirstName"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <label htmlFor="floatingFirstName" className="tw px-4">
                    First Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={lastName}
                    type="text"
                    className="form-control"
                    id="floatingLastName"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                  <label htmlFor="floatingLastName" className="tw px-4">
                    Last Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label htmlFor="floatingEmail" className="tw px-4">
                    Email address
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="floatingMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    value={message}
                    className="form-control"
                    id="floatingMessage"
                    rows="3"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="contactBtn">
                  <button className="contactBtnSubmit" onClick={contacts}>
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
