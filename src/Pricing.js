import React from "react";

function Pricing() {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="flex flex-col sm:flex-row sm:flex-wrap w-full sm:w-8/12 mx-auto border border-gray-700 p-5">
      <div className="flex flex-col rounded-2xl p-3 w-full sm:w-1/2 md:w-1/4 text-center mt-8 sm:mt-0">
        <div className="flex-grow">
          <br/>
          <br/>
          <br/>
          <br/>
          <p>Price</p>
          <p className="m-5">Keyword optimization</p>
          <p className="m-5">SEO monitoring</p>
          <p className="m-5">Monthly reports</p>
          <p className="m-5">Link optimization</p>
          <p className="m-5">Multi-user access</p>
          <p className="m-5">API integration</p>
        </div>
      </div>
      
      <div className="flex flex-col rounded-2xl p-3 w-full sm:w-1/2 md:w-1/4 text-center mt-8 sm:mt-0">
        <div className="flex-grow">
          <p>Pricing</p>
          <button className="bg-blue-900 rounded-2xl p-2 mt-4">Get Started</button>
          <p className="m-5">$29</p>
          <p className="m-5">Unlimited</p>
          <p className="m-5">1000</p>
        </div>
      </div>
  
      <div className="flex flex-col p-3 w-full sm:w-1/2 md:w-1/4 text-center bg-blue-950 mt-8 sm:mt-0">
        <div className="flex-grow">
          <p>Pro</p>
          <button className="bg-blue-900 rounded-2xl p-2 mt-4">Get Started</button>
          <p className="m-5">$79</p>
          <p className="m-5">Unlimited</p>
          <p className="m-5">Unlimited</p>
        </div>
      </div>
  
      <div className="flex flex-col p-3 w-full sm:w-1/2 md:w-1/4 text-center mt-8 sm:mt-0">
        <div className="flex-grow">
          <p>Business</p>
          <button className="bg-blue-900 rounded-2xl p-2 mt-4">Get Started</button>
          <p className="m-5">$149</p>
          <p className="m-5">Unlimited</p>
          <p className="m-5">Unlimited</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Pricing;
