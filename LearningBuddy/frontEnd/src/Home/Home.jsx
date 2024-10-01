import React from "react";
import Footer from "../component/Footer";
import FreeNotes from "../component/FreeNotes";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Navbar/>
      <Banner />
      <FreeNotes />
      <Footer />
    </>
  );
}

export default Home;
