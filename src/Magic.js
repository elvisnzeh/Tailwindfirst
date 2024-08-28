import React from 'react';
import img from "./Assets/iconn.png";


function Magic() {
  return (
    <div
      className="flex justify-center items-center mt-9 p-7 bg-cover bg-center">
      <div className="text-center shadow-2xl w-11/12 h-3/5 p-9 bg-gradient-to-r from-black via-[#0a0029] to-[#1e064b]">
        <img src={img} className="w-28 h-28 mx-auto" alt="Icon" />
        <p className="text-2xl">The magic of AI at <br/> your fingertips</p><br />
        <p>Achieve clear, impactful results<br />without the complexity</p><br />
        <button className="bg-purple-700 rounded p-1">Try for it</button>
      </div>
    </div>
  );
}

export default Magic;
