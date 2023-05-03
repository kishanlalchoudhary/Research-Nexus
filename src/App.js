import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Config/firebaseConfig";
import "./App.css";

// Layouts
import RootLayout from "./Layouts/RootLayout";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import CreatePost from "./Pages/CreatePost";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("isAuth", "false");
      setIsAuth("false");
      window.location.pathname = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RootLayout
                logoutHandler={logoutHandler}
                authState={[isAuth, setIsAuth]}
              />
            }
          >
            <Route index element={<Home isAuth={isAuth}/>} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createpost" element={<CreatePost />} />
            
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
