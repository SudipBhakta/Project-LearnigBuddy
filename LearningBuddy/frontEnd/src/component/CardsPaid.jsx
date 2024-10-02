import React from "react";

function Cards({ item }) {
  
  return (
    <>
      <div className="mt-4 my-3 p-3 " >
        <div className="card bg-base-100 w-90   shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
          <figure>
            <img className="w-80 h-80"
              src={item.image}
              
              alt="Note"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline py-2">${item.price}</div>
              <div className="badge badge-outline cursor-pointer text-white bg-purple-700 hover:bg-blue-500  hover:text-black p-3 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
