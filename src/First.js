import React from 'react'
import img from "./Assets/purple.png"
import img2 from "./Assets/acme.png";
import img3 from "./Assets/apexw.png";
import img4 from "./Assets/pulsew.png";
import img5 from "./Assets/celestial.png";

const First = () => {
  return (
    <div className=' bg-blue-950'>
  <div className="grid grid-cols-1 lg:grid-cols-2 mt-7 border-gray-400 items-center">
  <div className="p-5 lg:p-10 bg-text text-center mx-auto text-4xl lg:text-7xl mt-10 lg:mt-20">
    <p className="p-4 mb-2 rounded-full text-xs lg:text-sm shadow-lg w-full lg:w-3/4 mx-auto mt-1">
      New Latest integration just Arrived
    </p>
    Elevate your
    <br />
    SEO Efforts.
    <p className="p-4 mb-2 text-xs lg:text-sm mt-5">
      Elevate your site visibility effortlessly with AI, Where <br />
      smart technology meets User-friendly SEO tools
    </p>
    <div className="flex flex-col sm:flex-row items-center mt-5">
      <input
        type="text"
        placeholder="your email"
        className="w-full sm:w-72 h-10 bg-black text-white text-sm mb-4 sm:mb-0 p-1"
      />
      <button className="text-xl sm:text-2xl text-center bg-white text-black p-1 rounded ">
        Join Wallet
      </button>
    </div>
  </div>
  <div
    className="flex justify-center lg:justify-end mt-10 lg:mt-11 w-10/12 lg:h-screen lg:mr-40 bg-cover bg-center"
    style={{ backgroundImage: `url(${img})` }}
  >
  
  </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 w-10/12 p-4 mt-5 mx-auto">
        <p className="col-span-4 lg:col-span-1 text-xs lg:text-sm text-center items-center gap-5 mt-6">
          Trusted by Top innovative teams
        </p>
        <div className="flex justify-center items-center">
          <img className="p-1 w-full" src={img2} alt="Image 1" />
        </div>
        <div className="flex justify-center items-center">
          <img className="p-1 w-full" src={img3} alt="Image 2" />
        </div>
        <div className="flex justify-center items-center">
          <img className="p-1 w-full" src={img4} alt="Image 3" />
        </div>
        <div className="flex justify-center items-center">
          <img className="p-1 w-full rounded-2xl" src={img5} alt="Image 4" />
        </div>
      </div>
  </div>


  )
}

export default First
