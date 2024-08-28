import React from "react";
import fine from "./Assets/fine.png";

function Client() {
  return (
    <div className="flex justify-center items-center  mt-9">
      <div className="grid grid-cols-1  mx-auto p-11  w-11/12 shadow-2xl bg-gradient-to-r from-black via-[#0a0029] to-[#1e064b]  h-max ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img className="w-48 h-48 p-1   md:mr-4" src={fine} alt="Description" />
          <p className="text-center md:text-left flex items-center p-2 font-light">
            This Product has completely <br />transformed how I manage my <br />
            projects and deadlines. <br />
            <br/>
          Talia Taylor<br />
          Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client;
