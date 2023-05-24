import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../"

export default function CreateBlogs({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createblogs = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/createblogs");
  };

  useEffect(() => {
    // if (!isAuth) {
    //   navigate("/login");
    // }
  });

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Write a Blog</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createblogs}> Submit Post</button>
      </div>
    </div>
  );
}
