import { Link } from "react-router-dom";
import Wallet from "./Wallet";
import img from "./Assets/Logo.png";
import React, { useState } from "react";
import { MdOutlineLegendToggle } from "react-icons/md";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="App">
      <nav className="bg-black p-4 rounded-lg fixed top-0 w-full z-20 flex items-center justify-between ">
        <img src={img} className="w-8 h-8 Logo   md:hidden" />

      

        
        <ul className="hidden md:flex justify-between mx-auto items-center  border border-gray-700 p-1  rounded-lg  w-9/12 justify-center ">
        <img src={img} className="w-8 h-8 Logo  " />
          <li>
            <Link to="/" className="text-white">Features</Link>
          </li>
          <li>
            <Link to="/about" className="text-white">Developers</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Company</Link>
          </li>
          <li>
            <Link to="/blog" className="text-white">Blog</Link>
          </li>
          <li>
            <Link to="/changelog" className="text-white">Changelog</Link>
          </li>
         <li className="text-white rounded p-1 ml-8 ">
          <Wallet />
          </li>
        </ul>

        
        <ul className={`fixed inset-0 bg-black ${open ? 'flex flex-col items-center justify-center space-y-9' : 'hidden'} md:hidden z-100`}>
          <li>
            <Link to="/" className="text-white">Features</Link>
          </li>
          <li>
            <Link to="/about" className="text-white">Developers</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Company</Link>
          </li>
          <li>
            <Link to="/blog" className="text-white">Blog</Link>
          </li>
          <li>
            <Link to="/changelog" className="text-white">Changelog</Link>
          </li>
        </ul>

        <div className="text-white rounded p-1 ml-8 md:hidden">
          <Wallet />
        </div>
          
          <div className="md:hidden  text-white absolute right-4 top-6 text-2xl  z-200" onClick={toggle}>
          <MdOutlineLegendToggle />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
