import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Config/firebaseConfig";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import Dashboard from "./Layouts/Dashboard/Dashboard";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import NotFound from "./Pages/NotFound";
import DiscoverOpportunity from "./Components/Dashboard/DiscoverOpportunity";
import PublishOpportunity from "./Components/Dashboard/PublishOpportunity";
import DashboardHome from "./Components/Dashboard/DashboardHome";

function App() {
  const [user, setUser] = useState(auth.currentUser);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      setUser(auth.currentUser);
      window.location.pathname = "/";
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<RootLayout logout={logoutHandler} user={user} />}
          >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route
            path="/dashboard"
            element={<Dashboard user={user} logoutHandler={logoutHandler} />}
          >
            <Route index element={<DashboardHome />} />
            <Route
              path="discover"
              element={<DiscoverOpportunity user={user} />}
            />
            <Route
              path="publish"
              element={<PublishOpportunity user={user} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
