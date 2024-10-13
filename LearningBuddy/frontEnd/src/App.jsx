import React from "react";
import Home from "./Home/Home";
import Noteses from "./Noteses/Noteses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import SignupToLogin from "./component/SignupToLogin";
import Contact from "./Contact/Contact";
import { Toaster } from "react-hot-toast";
import AboutUs from "./AboutUs/AboutUs";
import { useAuth } from "./ContextAPI/Auth";
import SearchResult from "./SearchResult/SearchResult";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/notes"
            element={authUser ? <Noteses /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignupToLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/results" element={<SearchResult />} /> // Route for
          results
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
