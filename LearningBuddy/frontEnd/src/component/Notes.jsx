import React from "react";
import list from "../assets/list.json";
import Cards from "../component/Cards";
import {Link} from "react-router-dom"

function Notes() {
  // console.log(list)

  return (
    <>
      <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4  ">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Boost your learning with{" "}
            <span className="text-pink-500">LearningBuddy :)</span>
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
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
