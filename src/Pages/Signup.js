import React, { useState } from "react";
import { auth, db } from "../Config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default function Signup() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("");

  const usersCollectionRef = collection(db, "users");

  const signupHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, newEmail, newPassword);
      await addDoc(usersCollectionRef, {
        email: newEmail,
        password: newPassword,
        role: newRole,
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>SignUp</h2>
      <input
        value={newEmail}
        placeholder="Email..."
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <input
        value={newPassword}
        placeholder="Password..."
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        value={newRole}
        placeholder="Ex. public"
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={signupHandler}>Login</button>
    </>
  );
}
