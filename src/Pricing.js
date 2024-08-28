import React from "react";
import { GrStatusGood } from "react-icons/gr";

function Pricing() {
  return (
   <div className="flex justify-center items-center">
  <div className="flex flex-col md:flex-row sm:flex-wrap w-full sm:w-8/12 mx-auto border border-gray-700 p-5 sm:mx-auto">
    <div className="flex flex-row rounded-2xl p-4 w-full sm:w-1/2 md:w-1/4 text-center sm:mt-0">
      <div className="flex-grow w-full hidden md:block mt-24">
        <p className="mb-4">Price</p>
        <hr className=" border-gray-600 opacity-30"/>
        <p className="m-5 w-full">Keyword optimization</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5 w-full">Automated meta tags</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5">SEO monitoring</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5">Monthly reports</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-1 w-full">Content Suggestions</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5">Link optimization</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5">Multi-user access</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="m-5">API integration</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl p-3 w-full sm:w-1/2 md:w-1/4 text-center mt-8 sm:mt-0">
      <div className="flex-grow">
        <p>Basic</p>
        <button className="bg-gray-500 rounded-lg p-2 mt-4">Get Started</button>
        <p className="m-5  flex justify-start">$29</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-1" />Unlimited</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" />1000</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
      </div>
    </div>

    <div className="flex flex-col p-3 w-full sm:w-1/2 md:w-1/4 text-center bg-gradient-to-l from-[#401271] via-[#1e064b] to-[#0a0536] mt-8 sm:mt-0">
      <div className="flex-grow">
        <p>Pro</p>
        <button className="bg-purple-700 rounded-lg p-2 mt-4">Get Started</button>
        <p className="m-5 flex justify-start">$79</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> Unlimited</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" />Unlimited </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /></p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
      </div>
    </div>

    <div className="flex flex-col p-3 w-full sm:w-1/2 md:w-1/4 text-center mt-9 sm:mt-0">
      <div className="flex-grow">
        <p>Business</p>
        <button className="bg-gray-500 rounded-lg p-2 mt-4">Get Started</button>
        <p className="m-5 flex justify-start">$149</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> Unlimited</p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" />Unlimited </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /></p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
        <p className="flex items-center justify-start m-5"><GrStatusGood className="mr-2" /> </p>
        <hr className="my-2 border-gray-600 opacity-30"/>
      </div>
    </div>
  </div>
</div>


  
  );
}

export default Pricing;
