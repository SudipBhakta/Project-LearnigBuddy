import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
          <figure>
            <img src={item.image} alt="Note" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-center">
              {/* <div className="badge badge-outline py-2">${item.price}</div> */}
              <div className="badge badge-outline cursor-pointer text-white bg-purple-700 hover:bg-blue-500 hover:text-black duration-300  mt-12 p-3 py-4 duration-200">
                Read Now
              </div>
              <div className="badge badge-outline cursor-pointer text-white bg-purple-700 hover:bg-blue-500 hover:text-black duration-300  mt-12 p-3 py-4 duration-200">
                Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
