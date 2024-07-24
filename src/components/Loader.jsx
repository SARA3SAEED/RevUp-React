import React from "react";
import "../App.css";
import Lamburgini from "../assets/Lamburgini.png";

function Loader() {
  return (
    <div className="relative w-full overflow-hidden h-[80vh] flex items-center justify-center">
      <div className=" absolute border-b top-1/2 -right-full flex flex-row items-center justify-center self-end m-auto animataion">
        <img src={Lamburgini} className="w-36" alt="car moves" />
        <div className="w-[100vw] h-6 bg-gradient-to-r opacity-50 from-primary to-base-100 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Loader;
