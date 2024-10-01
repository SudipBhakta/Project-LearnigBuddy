import React from "react";
import Home from "./Home/Home";
import Noteses from "./Noteses/Noteses";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Noteses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
