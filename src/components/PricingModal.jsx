import React from "react";
import "../App.css";
import { IoIosCloseCircleOutline } from "react-icons/io";


const PricingModal = ({ title, price, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="pricing-modal bg-base-200 shadow-lg rounded-lg p-4 w-56 h-28">
        <div className="flex justify-between">
        <h2 className="text-xl font-bold">{title}</h2>

        <button onClick={onClose} className=" text-white rounded-full">
      <IoIosCloseCircleOutline  color="red" size={20}/>
      </button>
        </div>
      <p className="text-lg">Price: ${price}</p>
     
    </div>
  );
};

export default PricingModal;


