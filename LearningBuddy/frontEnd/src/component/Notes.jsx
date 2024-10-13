import { React, useEffect, useState } from "react";
//import list from "../assets/list.json";
import CardsPaid from "../component/CardsPaid";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Notes() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    const getNote = async () => {
      try {
        const noteRes = await axios.get("http://localhost:4000/note");
        console.log(noteRes.data);
        setNote(noteRes.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getNote();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4  ">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Boost your learning with{" "}
            <span className="text-fuchsia-600">LearningBuddy :)</span>
          </h1>
          <p className=" mt-12 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            mollitia beatae officiis cumque eveniet autem nemo eligendi
            reprehenderit doloremque eaque quis placeat dignissimos veritatis
            necessitatibus asperiores, quos, voluptatibus ratione, odit
            cupiditate magnam ipsa aperiam qui consequatur? Doloremque labore,
            neque laudantium deserunt ratione distinctio magnam.
          </p>
          <Link to="/">
            <button className="text-white  bg-purple-700 hover:bg-blue-500 hover:text-black border-none mt-6 px-4 py-1  rounded-md duration-300">
              Back To Home
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {note.map((item) => (
            <>
              {item.category === "Free" ? (
                <Cards key={item._id} item={item} /> // Show Free card
              ) : (
                <CardsPaid key={item._id} item={item} /> // Show Paid card
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
