import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Pricing({ onStartFreeTrialClick }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container px-6 py-20 bg-base-100 ">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 ">
            <a onClick={() => navigate(-1)}>
              <IoIosArrowRoundBack size={25} />
            </a>
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50">
                Vip
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase ">
                $99.99
              </span>
              <span className="text-gray-500 ">/year</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 ">Exclusive Color Options</li>
              <li className="text-gray-500 ">Five Free Oil Changes</li>
              <li className="text-gray-500 ">Monthly Car Cleaning</li>
              <li className="text-gray-500 ">
                Discounts on Additional Services 5%
              </li>
              <li className="text-gray-500 ">Exclusive Accessories</li>
              <li className="text-gray-500 ">24x7 Support</li>
            </ul>
            <button
              onClick={onStartFreeTrialClick}
              className="btn btn-primary inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase focus:outline-none"
            >
              Start To Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
