import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebaseConfig.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    
  }

  const logoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        value={email}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
