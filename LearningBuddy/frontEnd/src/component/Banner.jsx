import React, { useState } from "react";
import HomeImg from "../assets/HomeImg.png";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/results?query=${encodeURIComponent(searchQuery)}`); // Navigate to ResultsPage with query
      setSearchQuery(""); // Clear the search input after navigation
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10 ">
        <div className=" w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl mt-6 font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-fuchsia-600">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem
              sint eveniet dolorem rerum fugiat temporibus quia expedita
              necessitatibus architecto? Amet neque natus laudantium hic rem
              deserunt dignissimos esse minus.
            </p>
            <label className=" block md:hidden input input-bordered flex items-center gap-2 dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 cursor-pointer" // Add cursor pointer for better UX
                onClick={handleSearch} // Call handleSearch on click
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchQuery} // Bind the input value to searchQuery state
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-4 mb-4 block md:hidden">
            <button
              className=" text-white  bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 border-none  px-3 py-2  rounded-md "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className=" order-1 w-full md:w-1/2 md:mt-17">
          <img src={HomeImg} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
