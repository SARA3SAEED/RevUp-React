import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import emailjs from "@emailjs/browser";
export default function PayCard() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [securKeyInput, setSecurKeyInput] = useState("");
  const [secureId, setSecureId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
          "user"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
        setSecureId(`${Math.floor(Math.random() * 1000000)}`);
      });
  }, []);
  emailjs.init("3rLzsWp6lL8ppEyMf");
  const sendMail = () => {
    var templateParams = {
      to_email: message,
      to_name: user.fullName,
      message: `${secureId}`,
    };
    emailjs.send("service_ngidhmt", "template_y15jrd3", templateParams).then(
      function (response) {
        alert("Email sent successfully!", response.status, response.text);
        document.getElementById("my_modal_1").showModal();
      },
      function (error) {
        alert("Failed to send email.", error);
      }
    );
  };
  const confirmSubscribe = () => {
    if (securKeyInput === secureId) {
      toast.success("You've subscribe successfuly!");
      axios
        .put(
          `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
            "user"
          )}`,
          {
            isVIP: true,
          }
        )
        .then(function (res) {
          navigate("../order");
        });
    } else {
      document.getElementById("my_modal_1").showModal();
      toast.error("Wrong secure code!");
    }
  };
  console.log(secureId);
  return (
    <>
      <div className="relative mx-auto w-full bg-base-100 border border-info rounded p-4 mt-2">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 ">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span className=" block h-1 w-10 bg-secondary sm:w-20" />
            </h1>
            <form action="" className="mt-10 flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm
                   placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 
                   focus:primary"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="card-number"
                  className="text-xs font-semibold text-gray-500"
                >
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234-5678-XXXX-XXXX"
                  className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm
                   placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 
                   focus:primary"
                />
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">
                  Expiration date
                </p>
                <div className="mr-6 flex flex-wrap">
                  <div className="my-1">
                    <label htmlFor="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm 
                      shadow-sm outline-none transition focus:ring-2 focus:primary"
                    >
                      <option value="">Month</option>
                    </select>
                  </div>
                  <div className="my-1 ml-3 mr-6">
                    <label htmlFor="year" className="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm 
                      shadow-sm outline-none transition focus:ring-2 focus:primary"
                    >
                      <option value="">Year</option>
                    </select>
                  </div>
                  <div className="relative my-1">
                    <label htmlFor="security-code" className="sr-only">
                      Security code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Security code"
                      className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm 
                      placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 
                      focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="card-name" className="sr-only">
                  Card name
                </label>
                <input
                  type="text"
                  id="card-name"
                  name="card-name"
                  placeholder="Name on the card"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm
                   placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 
                   focus:primary"
                />
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a
                href="#"
                className="whitespace-nowrap text-secondary underline "
              >
                Terms and Conditions
              </a>
            </p>
            <button
              onClick={() => sendMail()}
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-primary
               py-2.5 px-4 text-white font-semibold tracking-wide 
               outline-none ring-offset-2 transition hover:text-opacity-100 
               focus:ring-2 focus:primary sm:text-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <p className="py-4 text-lg font-semibold">
            Enter The secure key sended to your email
          </p>
          <div className="flex flex-row gap-2 items-end justify-center">
            <input
              type="text"
              placeholder="x x x x x x"
              value={securKeyInput}
              onChange={(e) => setSecurKeyInput(e.target.value)}
              className="w-36 h-12 text-center px-2 outline outline-secondary outline-1 focus:outline-2 focus:outline-primary rounded-xl"
            />
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn btn-primary"
                  onClick={() => confirmSubscribe()}
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}
