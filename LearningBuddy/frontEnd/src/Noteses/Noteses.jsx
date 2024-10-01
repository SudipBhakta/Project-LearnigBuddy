import React from "react";
import Navbar from "../component/Navbar";
import Notes from "../component/Notes";
import Footer from "../component/Footer";

function Noteses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Notes />
      </div>

      <Footer />
    </>
  );
}

export default Noteses;
