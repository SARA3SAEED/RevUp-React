import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Nav2 from "../components/Nav2";
import {
  SiHonda,
  SiToyota,
  SiNissan,
  SiMercedes,
  SiPorsche,
} from "react-icons/si";

export default function History() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [orderDetailsVisibility, setOrderDetailsVisibility] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
          "user"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
        setIsLoading(false);
      });
    const userId = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    if (userId) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
    setIsLoading(false);
  }, []);

  const toggleOrderDetails = (orderId) => {
    setOrderDetailsVisibility((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <Nav2 />
      {isLoggedIn ? (
        <section className="w-full py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="font-manrope font-bold text-4xl leading-10 text-neutral text-center">
              Order history
            </h2>
            <p className="mt-4 font-normal text-lg leading-8 text-info mb-11 text-center">
              Check the status of recent orders, manage returns{" "}
            </p>

            <div className="flex flex-col-reverse main-box border border-accent rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
              {user.modification && user.modification.length > 0 ? (
                user.modification.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col px-6 pb-6 border-b border-accent"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                      <div className="data">
                        <p className="font-semibold text-base leading-7 text-neutral">
                          Order Id:{" "}
                          <span className="text-primary font-medium">
                            {item.id}
                          </span>
                          <p className="text-info">{item.date}</p>
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleOrderDetails(item.id)}
                        className="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        id={`hs-basic-collapse-${item.id}`}
                        data-hs-collapse={`#hs-basic-collapse-heading-${item.id}`}
                      >
                        Track Your Order
                        <svg
                          className={`hs-collapse-open:rotate-180 flex-shrink-0 size-4 text-white ${
                            orderDetailsVisibility[item.id] ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                    {orderDetailsVisibility[item.id] && (
                      <div className="w-full px-3 min-[400px]:px-6 mt-6">
                        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-accent gap-6 w-full">
                          <div className="img-box w-1/4 flex items-center">
                            {item.carName == "Nissan -GTR" ? (
                              <SiNissan size={100} color="black" />
                            ) : item.carName == "Pursche 911" ? (
                              <SiPorsche size={100} color="black" />
                            ) : item.carName == "Lotus -Emira" ? (
                              <img
                                src="https://seeklogo.com/images/L/Lotus-logo-7E5B29D0CE-seeklogo.com.png"
                                className="w-[100px] h-[100px]"
                              />
                            ) : item.carName == "Toyota Supra" ? (
                              <SiToyota size={100} color="black" />
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="flex flex-row items-center w-full ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                              <div className="flex items-center">
                                <div className="">
                                  <h2 className="font-semibold text-xl leading-8 text-neutral mb-3">
                                    {item.carName}
                                  </h2>
                                  <p className="font-normal text-lg leading-8 text-info mb-3 ">
                                    By: {user.fullName}
                                  </p>
                                  <div className="flex flex-col ">
                                    <div className=" flex font-medium text-base leading-7 text-neutral pr-4 mr-4 border-r border-accent">
                                      <p className="">External Color: </p>
                                      <div className="mt-1 mx-3 relative w-5 h-5 overflow-hidden rounded-full shadow-xl border border-accent">
                                        <input
                                          className="absolute w-20 h-20 -translate-x-1 -translate-y-2"
                                          type="color"
                                          value={
                                            item.bodyColor == "white"
                                              ? "#ffffff"
                                              : item.bodyColor == "black"
                                              ? "#000000"
                                              : item.bodyColor
                                          }
                                          disabled
                                        />
                                      </div>
                                    </div>

                                    <div className="flex font-medium text-base leading-7 text-neutral ">
                                      <p> Body Color: </p>
                                      <div className="mt-1 mx-8 relative w-5 h-5 overflow-hidden rounded-full shadow-xl border border-accent">
                                        <input
                                          className="absolute w-20 h-20 -translate-x-1 -translate-y-2"
                                          type="color"
                                          value={
                                            item.chairColor == "white"
                                              ? "#ffffff"
                                              : item.chairColor == "black"
                                              ? "#000000"
                                              : item.chairColor
                                          }
                                          disabled
                                        />
                                      </div>
                                    </div>

                                    <div className="flex font-medium text-base leading-7 text-neutral ">
                                      <p>Wheel Color: </p>
                                      <span className="text-info">
                                        <div className="mt-1 mx-6 relative w-5 h-5 overflow-hidden rounded-full shadow-xl border border-accent">
                                          <input
                                            className="absolute w-20 h-20 -translate-x-1 -translate-y-2"
                                            type="color"
                                            value={
                                              item.wheelColor == "white"
                                                ? "#ffffff"
                                                : item.wheelColor == "black"
                                                ? "#000000"
                                                : item.wheelColor
                                            }
                                            disabled
                                          />
                                        </div>
                                      </span>
                                    </div>
                                    <div className="flex font-medium text-base leading-7 text-neutral ">
                                      <p>Wheel Type: </p>
                                      <span className="text-info font-normal mt-1 mx-6 ">
                                        Rim-No.{item.rimType}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center">
                                <div className="">
                                  <h2 className="font-semibold text-xl leading-8 text-neutral mb-3">
                                    Transaction Details
                                  </h2>
                                  <p className="font-normal text-lg leading-8 text-info mb-3 ">
                                    By: RevUp
                                  </p>
                                  <div className="flex flex-col ">
                                    <p className="font-medium text-base leading-7 text-neutral pr-4 mr-4 border-r border-accent">
                                      Total Price:{" "}
                                      <span className="text-info">
                                        {user.totalCost}{" "}
                                      </span>
                                    </p>
                                    <p className="font-medium text-base leading-7 text-neutral ">
                                      Status:{" "}
                                      <span className="text-info">
                                        {" "}
                                        {item.status}
                                      </span>
                                    </p>
                                    <p className="font-medium text-base leading-7 text-neutral ">
                                      Appointment date:{" "}
                                      <span className="text-info">
                                        {" "}
                                        {item.appointmentDate}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center text-info">No orders found.</p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <h1 className="m-auto text-3xl font-bold opacity-30">
          Login Or Sign Up
        </h1>
      )}
      <Footer />
    </div>
  );
}
