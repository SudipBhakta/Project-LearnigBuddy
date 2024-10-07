import React from "react";
import Home from "./Home/Home";
import Noteses from "./Noteses/Noteses";
import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import SignupToLogin from "./component/SignupToLogin";
import Contact from "./Contact/Contact";
import  { Toaster } from 'react-hot-toast';
import AboutUs from "./AboutUs/AboutUs";


function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Noteses/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/login" element={< SignupToLogin/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>} />

        
          

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
