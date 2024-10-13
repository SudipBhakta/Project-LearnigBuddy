import React from "react";
import pdfFile from "../assets/Full Stack Development Road Map.pdf"; // Adjust the path as needed

function Cards({ item }) {
  const openPDF = () => {
    window.open(pdfFile, "_blank"); // Open the PDF in a new tab
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfFile; // Use the same PDF path
    link.download = "Full Stack Development Road Map.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link element
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-800 dark:text-white">
          <figure>
            <img src={item.image} className="w-80 h-80" alt="Note" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-center">
              <div 
                className="badge badge-outline cursor-pointer text-white bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 p-3 py-3 duration-200"
                onClick={openPDF}
              >
                Read Now
              </div>
              <div 
                className="badge badge-outline cursor-pointer text-white bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 p-3 py-3 duration-200"
                onClick={downloadPDF}
              >
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
