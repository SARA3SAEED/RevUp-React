import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "../../assets/car-logo1.png";

export default function NavHeaderLog({ role }) {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState({});

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

 

  return (
    <>
      <div
        className={`navbar ${
          scrolled ? "bg-neutral" : "bg-transparent"
        } fixed top-0 w-full z-10 transition-colors duration-300`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link to="/cars">Collections</Link>
              </li>
              <li>
                <Link to="/order">Order History</Link>
              </li>
              <li>
                <Link to="about">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex">
            <img src={img} className="w-16" />
            <p
              className={` mt-5 text-base-100 ${
                scrolled ? "text-base-100" : "text-base-100"
              }`}
            >
              RevUp
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 text-base-100 ${
              scrolled ? "text-base-100" : "text-base-100"
            }`}
          >
            <li>
              <Link to="/cars">Collections</Link>
            </li>
            <li>
              <Link to="/order">Order History</Link>
            </li>
            <li>
              <Link to="about">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {localStorage.getItem("role") == "admin" ? null : (
            <p
              // to={role === "admin" ? "/profile-admin" : "/profile-user"}
              className="menu  px-1 text-base-100 mx-2 font-bold"
            >
              {user.username}
            </p>
          )}
          <Link
            to="/login"
            className="menu px-1 text-base-100 mx-2"
            onClick={handleLogout}
          >
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
}
