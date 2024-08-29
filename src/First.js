import React from 'react';
import img from "./Assets/purple.png";
import img1 from "./Assets/Stars.png";
import img2 from "./Assets/acme.png";
import img3 from "./Assets/apexw.png";
import img4 from "./Assets/pulsew.png";
import img5 from "./Assets/celestial.png";

const First = () => {
  return (
    <div className='bg-gradient-to-r from-black via-[#0a0029] to-[#1e064b]'>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-7 border-gray-400">

        <div
          className="p-5 lg:p-10 bg-text  mx-auto text-4xl lg:text-7xl mt-10 lg:mt-20 space-y-7 md:justify-start"
        >
          <p className=" gap-2  justify-center flex p-1 mb-2 text-xs lg:text-sm shadow-lg w-full lg:w-3/4  mt-1 border border-gray-800 rounded-3xl text-purple-700 items-center ml-2">
            <p className='bg-purple-500 rounded-2xl  font-bold p-1 '>New</p> Latest integration just Arrived
          </p>
          <p className='flex justify-center lg:justify-start'>
          Elevate your
          <br />
          SEO efforts.
          </p>
          <p className="p-4 mb-1 text-xl lg:text-lg mt-1  w-full text-gray-400  text-center  lg:text-start">
            Elevate your site visibility effortlessly with AI, Where <br />
            smart technology meets User-friendly SEO tools
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-5  justify-center md:justify-start" >
            <input
              type="text"
              placeholder="Your email"
              className=" rounded-xl w-full mb-2 bg-black h-10 text-sm border border-gray-500 p-1"

            />
            <button className="bg-white text-black p-1 rounded-lg font-light w-10/12  md:h-11 md:text-sm md:w-1/2 md:mb-2 md:relative right-3 ">
              Join Wallet
            </button>
          </div>
        </div>
        <div
          className="flex mt-1 lg:mt-11 w-11/12 lg:h-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${img1})` }}
        >
        <img
  src={img}
  alt="SEO Illustration"
  className="hidden lg:block flex mt-1  w-full lg:h-10/12 bg-cover bg-center   relative  right-20 z-0"
/>

      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3 w-10/12 p-4 mt-5 mx-auto">
        <p className="col-span-4   lg:col-span-1 text-xs lg:text-sm text-center items-center gap-5 mt-6">
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
  );
}

export default First;
