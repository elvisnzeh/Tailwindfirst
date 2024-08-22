import React from "react";
import img6 from "./Assets/app.png";
import Report from "./Report";
import Clients from "./Clients";
import Pricing from "./Pricing";
import Magic from "./Magic";
import Socials from "./Socials";
import First from "./First";
import Choose from "./Choose";

function Home() {
  return (
    <div className="bg-[rgb(10,6,12)] text-white z-[1] m-auto box-border min-h-screen overflow-hidden">
      <First />
      <br />
      <div className="p-4 mt-2 text-center mx-auto font-light text-lg">
        Harness the power of AI, making <br />
        Search engine optimization intuitive <br />
        and effective for all skill levels. 
      </div>

      <div className="p-4 mt-2 text-center mx-auto font-light text-lg">
        <img
          className="border-none rounded-2xl p-1 w-10/12 h-auto mx-auto"
          src={img6}
          alt="Image 5"
        />
      </div>
      <br />
      <br />
      <Report />
      <Clients />
      <Choose />
      <Pricing />
      <Magic />
      <Socials />
     
    </div>
  );
}

export default Home;
