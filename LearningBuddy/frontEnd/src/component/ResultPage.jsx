// src/ResultsPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Cards from "./Cards"; // Import the Cards component
import CardsPaid from "./CardsPaid"; // Import the CardsPaid component
import ResultNotFound from "../assets/ResultNotFound.png"; // Import the not found image
import { useAuth } from "../ContextAPI/Auth"; // Import the Auth context

// Define the ResultsPage to fetch and display search results
const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation(); // Get the current location
  const query = new URLSearchParams(location.search).get("query"); // Extract query from URL
  const [authUser] = useAuth(); // Get authUser from the context

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/note/search?query=${query}`
        ); // Fetch results from API
        setResults(response.data); // Update state with results
      } catch (err) {
        setError("Error fetching search results. Please try again."); // Handle errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchResults(); // Call the fetch function
  }, [query]);

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p style={{ color: "red" }}>{error}</p>; // Show error message

  // Check if there are any free cards
  const FreeCards = results.some((item) => item.category === "Free");

  if (results.length === 0) {
    return (
      <div className="pt-16 flex flex-col items-center justify-center h-full">
        <img
          src={ResultNotFound}
          className="w-96 h-96 dark:opacity-60"
          alt=""
        />
        <h1 className="text-center text-2xl font-semibold md:text-2xl text-red-600">
          No Results found for :{" "}
          <span className="text-black dark:text-white">{query}</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="pt-28 items-center justify-center text-center text-2xl font-semibold md:text-3xl text-fuchsia-600">
        Search Results for :{" "}
        <span className="text-black dark:text-white">{query}</span>
      </h1>
      {!authUser && (
        <div className="mt-8 text-center text-lg">
          Please{" "}
          <Link
            to="/login"
            className=" underline  text-fuchsia-600 hover:text-blue-500 duration-300 cursor-pointer"
          >
            Login
          </Link>{" "}
          to see more results.
        </div>
      )}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {results.map((item) =>
          // Show Cards and CardsPaid if authenticated; otherwise, show only Cards
          authUser ? (
            <>
              {item.category === "Free" ? (
                <Cards key={item._id} item={item} /> // Show Free card
              ) : (
                <CardsPaid key={item._id} item={item} /> // Show Paid card
              )}
            </>
          ) : (
            item.category === "Free" && <Cards key={item._id} item={item} /> // Show only Free cards if not authenticated
          )
        )}
      </div>
    </div>
  );
};

export default ResultsPage; // Export the ResultsPage component
