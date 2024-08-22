import React from 'react'
import img from "./Assets/Logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

function Socials() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 items-center text-center p-3 gap-4'>
    <div className='flex justify-center md:justify-start items-center space-x-4'>
      <img src={img} className='w-12 h-12' alt="Logo" />
      <p>AI Startup Kit</p>
    </div>
  
    <div className='flex flex-col md:flex-row justify-center md:space-x-8 list-none'>
  <li>Features</li>
  <li>Integration</li>
  <li>Updates</li>
  <li>FAQ</li>
  <li>Pricing</li>
</div>

  
    <div className='flex justify-center md:justify-end space-x-4 list-none'>
      <li><FaInstagram /></li>
      <li><FaYoutube /></li>
      <li><FaTwitterSquare /></li>
    </div>
  </div>
  
  
  )
}

export default Socials
