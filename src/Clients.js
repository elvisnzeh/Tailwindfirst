import React from "react";
import fine from "./Assets/fine.png";

function Client() {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="grid grid-cols-1 sm:w-screen md:grid-cols-1 lg:grid-cols-1 border border-blue-200 mx-auto p-8 bg-blue-950">
      <div className="flex flex-col md:flex-row justify-center items-center w-full border-white">
        <img className="w-48 h-48 p-1 mb-4 md:mb-0 md:mr-4" src={fine} alt="Description" />
        <p className="text-center md:text-left flex items-center p-3 font-bold">
          This Product has completely <br />transformed how I manage my <br />
          projects and deadlines.
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default Client;
