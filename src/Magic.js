import React from 'react'
import img from "./Assets/Logo.png";

function Magic() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="text-center  bg-blue-950 border border-gray-700 w-11/12 h-3/5 p-6">
      <img src={img} className="w-28 h-28 mx-auto" />
      <p className='text-2xl'>The magic of AI at <br/> your fingertips</p><br />
      <p>Achieve clear,impactful results<br />without the complexity</p><br />
      <button className='bg-blue-500 rounded p-1'>Try for it</button>
    </div>
  </div>
  
  )
}

export default Magic
