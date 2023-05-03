import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../Config/firebaseConfig'
import { useNavigate } from 'react-router-dom'


function CreatePost() {
    const [title, setTitle] = useState("")
    const [postText, setpostText] = useState("")

    const postsCollectionRef = collection(db, "posts")
    let navigate = useNavigate()

    //author: {} is automatically grabbing Gogle Signed in User's Name

    const createpost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        })
        navigate('/')
    }


  return (
    <div className='createPostPage'>
        <div className='cpContainer'>
            <h1>Create a Post</h1>
            <div className='inputGp'>
                <label>Title: </label>
                <input placeholder='Title...' 
                onChange={(event) =>{
                    setTitle(event.target.value)
                    }}>

                </input>
            </div>
            <div className='inputGp'>
                <label>Post: </label>
                <textarea placeholder='Post...' 
                onChange={(event) => {
                    setpostText(event.target.value)}}>

                </textarea>
            </div>
            <button onClick={createpost}>Submit Post</button>
        </div>
    </div>
  )
}

export default CreatePost