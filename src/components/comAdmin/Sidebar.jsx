import React from "react";
import img from "../../assets/car-logo1.png";
import { RiArchiveStackLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav
        aria-label="side bar"
        aria-orientation="vertical"
        className="h-[390px] flex-none flex flex-col items-center text-center justify-center  
        bg-gray-300 text-gray-400 border-r rounded"
      >
      
        <ul>
          <li>
            <Link
              title="Views"
              to="/dashboard-admin"
              className="h-16 px-6 flex items-center hover:text-white w-full"
            >
              <i className="mx-auto">
                <RiArchiveStackLine size={25} color="white" />
              </i>
            </Link>
          </li>

          <li>
            <Link
              title="Customer Lists"
              to="/list-user"
              className="h-16 px-6 flex items-center hover:text-white w-full"
            >
              <i className="mx-auto">
                <IoPersonOutline size={25} color="white" />
              </i>
            </Link>
          </li>

          <li>
            <Link
              title="Admin"
              to="/profile-admin"
              className="h-16 px-6 flex items-center hover:text-white w-full"
            >                <IoIosSettings size={25} color="white" />

              
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
