import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Config/firebaseConfig";

// Layouts
import RootLayout from "./Layouts/RootLayout";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import ShowBlogs from "./Pages/ShowBlogs";
import CreateBlogs from "./Pages/CreateBlogs";

function App() {
  const [user, setUser] = useState(auth.currentUser);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      setUser(auth.currentUser);
      window.location.pathname = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user => {
      if (user){
        setUser(user);
      }else{
        setUser(null);
      }
    }))
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RootLayout
                logoutHandler={logoutHandler}
                user={[user, setUser]}
              />
            }
          >
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/showblogs" element={<ShowBlogs />} />
            <Route exact path="/createblogs" element={<CreateBlogs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
