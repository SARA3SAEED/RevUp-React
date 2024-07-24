import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/car-logo1.png";

export default function Nav() {
  return (
    <>
      <div
        className={`navbar bg-neutral text-base-100 sticky top-0 w-full transition-colors duration-300 z-50`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link to="/cars">Collections</Link>
              </li>
              <li>
                <Link to="/order">Order History</Link>
              </li>
              <li>
                <Link to="/about">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="flex flex-row justify-center items-center h-full"
          >
            <img src={img} className="w-16" />
            <p className=" text-base-100">RevUp</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1  text-base-100 `}>
            <li>
              <Link to="/cars" className={`  text-base-100 `}>
                Collections
              </Link>
            </li>
            <li>
              <Link to="/order" className={`  text-base-100 `}>
                Order History
              </Link>
            </li>
            <li>
              <Link to="/about" className={`  text-base-100 `}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/singup" className="menu  px-1 text-base-100 mx-2">
            Sign Up
          </Link>
          <Link to="/login" className="menu  px-1 text-base-100 mx-2">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}
