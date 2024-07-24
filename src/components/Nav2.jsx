import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/car-logo2.png";
import axios from "axios";

export default function Nav2() {
  const [user, setUser] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
          "user"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <>
      <div
        className={`navbar px-2  ${
          window.location.pathname == "/" &&
          localStorage.getItem("role") != "admin"
            ? scrolled
              ? "bg-neutral"
              : "bg-transparent"
            : "bg-neutral"
        } rounded-xl text-base-100 fixed top-2 w-1/2 max-sm:w-full transition-colors duration-300 z-50 p-0`}
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
            {localStorage.getItem("role") !== "admin" && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box z-[1] p-0 w-52  shadow "
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
            )}
          </div>
          <Link
            to="/"
            className="flex flex-row justify-center items-center h-full"
          >
            <img src={img} className="w-10 h-10 mx-4" />
            <p className=" text-base-100">RevUp</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          {localStorage.getItem("role") !== "admin" && (
            <ul className={`menu menu-horizontal px-1  text-base-100 `}>
              <li>
                <Link
                  to="/cars"
                  className={` hover:bg-base-100 text-base-100 hover:text-neutral `}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className={` hover:bg-base-100 text-base-100 hover:text-neutral `}
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`  hover:bg-base-100 text-base-100 hover:text-neutral `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar-end">
          {localStorage.getItem("islogged") == "true" ? (
            <>
              <span className="font-bold text-base-100">{user.username}</span>
              <Link
                to="/login"
                className="menu px-2 text-red-500 mx-2 hover:bg-red-500 hover:text-base-100 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/singup" className="menu  px-1 text-base-100 mx-2">
                Sign Up
              </Link>
              <Link to="/login" className="menu  px-1 text-base-100 mx-2">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
