import React, { useState, useEffect } from "react";
import { BiSolidRename } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reseter } from "../../redux/Slices/ColorsSlice";

export default function Pay() {
  const navigate = useNavigate();
  const [userBefore, setUserBefore] = useState({});
  const totalCost = localStorage.getItem("totalCost");


  const [user, setUser] = useState({
    fullName: "",
    mobile: "",
    appointmentDate: "",
    salary: "",
    bank: "",
    address: "",
    state: "",
    zip: "",
    
  });
  const [modification, setModification] = useState({
    date: new Date().toLocaleString("en-US"),
    status: "Waitting for Apponitment",
    appointmentDate: "",
    id: uuidv4(),
    carName: useSelector((state) => state.carColors.carName),
    bodyColor: useSelector((state) => state.carColors.carBodyColor),
    chairColor: useSelector((state) => state.carColors.InteriorColor),
    wheelColor: useSelector((state) => state.carColors.rimColor),
    rimType: useSelector((state) => state.carColors.rimType),
  });
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    const userId = localStorage.getItem("user");
    axios
      .get(`https://66a171257053166bcabeff8f.mockapi.io/user/${userId}`)
      .then(function (res) {
        setUserBefore(res.data);
        setIsLoading(false);
      });
  }, []);

  const bookAppoinment = () => {
    const newArr = userBefore.modification;
    const moblieValide = /^5[0-9]{8}$/;
    if (
      user.fullName === "" ||
      user.mobile === "" ||
      user.address === "" ||
      user.zip === ""
    ) {
      toast.error("Please fill all information!");
    } else if (!moblieValide.test(user.mobile)) {
      toast.error("Please add Valid mobile number!");
    } else if (user.zip.length !== 5) {
      toast.error("ZIP code must contain 5 numbers!");
    } else if (user.state === "State" || user.state === "") {
      toast.error("Choose your state!");
    } else {
      newArr.push(modification);
      setUser({ ...user, modification: newArr });
    
      axios
        .put(
          `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
            "user"
          )}`,
          {
            fullName: user.fullName,
            modification: newArr,
            mobile: user.mobile,
            salary: user.salary,
            bank: user.bank,
            address: user.address,
            state: user.state,
            zip: user.zip,
            totalCost: totalCost,
          }
        )
        .then(function () {
          toast.success("order Booked successfuly!");
          dispatch(reseter());
          navigate("/order");
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className="mt-10 bg-accent bg-opacity-10 px-4 pt-8 lg:mt-0 rounded-xl">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by booking an appointment.
        </p>
        <div className="">
          <label
            className="mt-4 mb-2 block text-sm font-medium"
            htmlFor="card-holder"
          >
            Full Name
          </label>
          <div className="relative">
            <input
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
              id="card-holder"
              name="card-holder"
              placeholder="Your full name here"
              type="text"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <BiSolidRename color="#9aa3af" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <label
              className="mt-4 mb-2 block text-sm w-8/12 mr-2 font-medium"
              htmlFor="billing-address"
            >
              Mobile Number
            </label>
            <label
              className="mt-4 mb-2 block text-sm font-medium"
              htmlFor="billing-address"
            >
              Appointment Date
            </label>
          </div>
          <div className="flex flex-row">
            <p className="w-2/12 flex-shrink-0 rounded-md border bg-base-100 border-gray-200  py-3 text-center text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
              +966
            </p>
            <input
              className="relative w-6/12 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
              id="card-no"
              name="card-no"
              placeholder="5xx-xxx-xxx"
              type="text"
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            />
            <select
              className="w-full ml-2 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
              placeholder="Select appointment date"
              value={modification.appointmentDate}
              onChange={(e) =>
                setModification({
                  ...modification,
                  appointmentDate: e.target.value,
                })
              }
            >
              <option value="25/7/2024">25/7/2024 : 9-12AM</option>
              <option value="25/7/2024">25/7/2024 : 1-4PM</option>
              <option value="26/7/2024">26/7/2024 : 9-12AM</option>
              <option value="26/7/2024">26/7/2024 - 1-4PM</option>
              <option value="27/7/2024">27/7/2024 9-12AM</option>
              <option value="27/7/2024">27/7/2024 1-4PM</option>
            </select>
          </div>
          <div className="flex flex-row items-center">
            <label
              className="mt-4 mb-2 block text-sm w-1/2 ml-2 font-medium"
              htmlFor="billing-address"
            >
              Monthly Salary
            </label>
            <label
              className="mt-4 mb-2 block text-sm font-medium"
              htmlFor="billing-address"
            >
              Bank
            </label>
          </div>
          <div className="flex flex-row">
            <select
              value={user.salary}
              onChange={(e) => setUser({ ...user, salary: e.target.value })}
              className="w-1/2 ml-2 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
            >
              <option value="Below 5,000SR">5,000SR</option>
              <option value="Between 5,000SR - 10,000SR">
                Between 5,000SR - 10,000SR
              </option>
              <option value="Above 10,000SR">Above 10,000SR</option>
              <option value="Cash deal">Cash Deal</option>
            </select>
            <select
              value={user.bank}
              onChange={(e) => setUser({ ...user, bank: e.target.value })}
              className="w-1/2 ml-2 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
            >
              <option value="SNB">Saudi National Bank SNB</option>
              <option value="AlRajhi Bank">AlRajhi Bank</option>
              <option value="Riyad Bank">Riyad Bank</option>
              <option value="SABB">SABB</option>
              <option value="Alinma Bank">Alinma Bank</option>
              <option value="ANB">ANB</option>
              <option value="Saudi Fransi Bank">Saudi Fransi Bank</option>
              <option value="AlJazira Bank">AlJazira Bank</option>
              <option value="Emirates Bank">Emirates Bank</option>
            </select>
          </div>

          <label
            className="mt-4 mb-2 block text-sm font-medium"
            htmlFor="billing-address"
          >
            Address
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-7/12">
              <input
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                id="billing-address"
                name="billing-address"
                placeholder="Street Address"
                type="text"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  alt=""
                  className="h-4 w-4 object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png"
                />
              </div>
            </div>
            <select
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
              name="billing-state"
              type="text"
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
            >
              <option value="State">State</option>
              <option value="Riyadh Province">Riyadh Province</option>
              <option value="Makkah Province">Makkah Province</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="Madinah Province">Madinah Province</option>
              <option value="Al Baha Province"> Al Baha Province</option>
              <option value="Al Jawf Province">Al Jawf Province</option>
              <option value="Northern Borders Province">
                Northern Borders Province
              </option>
              <option value="Qassim Province">Qassim Province</option>
              <option value="Ha'il Province">Ha'il Province</option>
              <option value="Tabuk Province">Tabuk Province</option>
              <option value="Aseer Province">Aseer Province</option>
              <option value="Jizan Province">Jizan Province</option>
              <option value="Najran Province">Najran Province</option>
            </select>
            <input
              className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-secondary focus:ring-secondary"
              name="billing-zip"
              placeholder="ZIP"
              type="text"
              value={user.zip}
              onChange={(e) => setUser({ ...user, zip: e.target.value })}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-end gap-2">
          <button
            onClick={() => navigate(-1)}
            className="mt-4 w-1/2 rounded-md btn btn-neutral px-6 py-3 font-medium text-base-100"
          >
            back
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn mt-4 w-1/2 rounded-md btn-primary px-6 py-3 font-medium text-base-100"
          >
            Book An Appointment
          </button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Warning!</h3>
            <p className="py-4">
              Are you sure you want to book this appointment?
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex flex-row gap-2">
                <button
                  className="btn btn-primary text-base-100"
                  onClick={() => bookAppoinment()}
                >
                  Book
                </button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <ToastContainer position="top-left" theme="light" />
      </div>
    </>
  );
}
