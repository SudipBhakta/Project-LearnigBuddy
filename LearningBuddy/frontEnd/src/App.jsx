import React from "react";
import Home from "./Home/Home";
import Noteses from "./Noteses/Noteses";
import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import SignupToLogin from "./component/SignupToLogin";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Noteses />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/login" element={< SignupToLogin />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
