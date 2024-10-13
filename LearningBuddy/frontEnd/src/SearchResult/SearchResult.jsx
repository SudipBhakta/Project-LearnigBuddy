import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ResultsPage from "../component/ResultPage";

function SearchResult() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <ResultsPage />
      </div>

      <Footer />
    </>
  );
}

export default SearchResult;
