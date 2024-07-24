import React, { useState, useEffect, useRef, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraSetting from "../components/carModels/CameraSetting";
import { useDispatch, useSelector } from "react-redux";
import "../styles/CarDetStyle.css";
import Colorwheel from "../assets/colorwheel.png";
import rimdefult from "../assets/rimDefult.png";
import {
  setBodyColor,
  setCamera,
  setTarget,
  setInteriorColor,
  setRimColor,
  reseter,
  setRimType,
} from "../redux/Slices/ColorsSlice";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  GiCarWheel,
  GiCarSeat,
  GiCarDoor,
  GiSteeringWheel,
} from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";

import { BiSend } from "react-icons/bi";
import aa from "../assets/pexels.jpg";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import axios from "axios";
import Nav2 from "../components/Nav2";

export default function NewDetails() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabRimIndex, setTabRimIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState({});
  const [bgColor, setBgColor] = useState("#fffff");
  const colorsArray = ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#000000"];
  const [price, setPrice] = useState(0);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carid } = useParams();

  const bodyColorChanger = (e) => {
    dispatch(setTarget({ target: [0, 0, 0] }));
    dispatch(
      setBodyColor({
        color: e,
        fov: 30,
        position: [4.5, 1.6, 4.3],
      })
    );
    setPrice(1000);
  };
  const interiorColorChanger = (e) => {
    dispatch(setTarget({ target: [-0.2481118437, 0.242335258, 0.0375993858] }));
    dispatch(
      setInteriorColor({
        color: e,
        fov: 29,
        position: [-0.406305301, 0.3560049557, -0.35479985],
      })
    );
    setPrice(750);

  };
  const rimColorChanger = (e) => {
    dispatch(
      setTarget({ target: [-0.0415685503, -0.223913118, 0.9978187492] })
    );
    dispatch(
      setRimColor({
        color: e,
        fov: 25,
        position: [-2.3294932994, 0.0127804534, 1.0361409115],
      })
    );
    setPrice(500);

  };
  const cameraSetter = (e) => {
    if (e == 1) {
      dispatch(setTarget({ target: [0, 0, 0] }));
      dispatch(
        setCamera({
          fov: 30,
          position: [4.5, 1.6, 4.3],
        })
      );
    } else if (e == 2) {
      dispatch(
        setTarget({ target: [-0.0415685503, -0.223913118, 0.9978187492] })
      );
      dispatch(
        setCamera({
          fov: 25,
          position: [-2.3294932994, 0.0127804534, 1.0361409115],
        })
      );
    } else if (e == 3) {
      dispatch(
        setTarget({ target: [-0.2481118437, 0.242335258, 0.0375993858] })
      );
      dispatch(
        setCamera({
          fov: 29,
          position: [-0.406305301, 0.3560049557, -0.35479985],
        })
      );
    }
  };
  useEffect(() => {
    localStorage.getItem("user")
      ? axios
          .get(
            `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
              "user"
            )}`
          )
          .then(function (res) {
            setUser(res.data);
          })
      : null;
    const userId = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    if (userId) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
  }, []);
  const [color, setColor] = useState("#000000");
  const colorPickerRef = useRef();


  const togglePicker = () => {
    colorPickerRef.current.click();
  };
  return (
    <div className="h-screen flex flex-col items-center overflow-hidden">

      <div className="flex justify-center   ">
        <Nav2 />
      </div>
      <div className="flex flex-col w-full items-center flex-1 h-full bg-accent">
        <div className="flex flex-1 relative justify-center w-full h-full">
          <div className=" absolute top-0 left-0 flex flex-1 w-full h-full">
            <CameraSetting />
          </div>
          {isOpen ? (
            tabIndex == 9 ? (
              <>
                <div
                  className={`absolute top-20 flex z-10 justify-around items-center bg-opacity-10 w-2/5 max-sm:w-full h-[4.5rem] rounded-3xl`}
                >
                  <button
                    className="w-16 h-16 bg-center bg-cover"
                    style={{ backgroundImage: `url(${rimdefult})` }}
                    onClick={() => {
                      dispatch(setRimType(1));
                      setPrice(500);

                    }}
                  ></button>
                  <button
                    className="w-16 h-16 bg-center bg-cover"
                    style={{ backgroundImage: `url(${rimdefult})` }}
                    onClick={() => {
                      dispatch(setRimType(2));
                      setPrice(500);

                    }}
                  ></button>
                  <button
                    className="w-16 h-16 bg-center bg-cover"
                    style={{ backgroundImage: `url(${rimdefult})` }}
                    onClick={() => {
                      dispatch(setRimType(3));
                      setPrice(500);

                    }}
                  ></button>
                </div>
              </>
            ) : (
              <div
                className={`absolute top-20 flex z-10 justify-around items-center bg-opacity-10 w-2/5 max-sm:w-full h-[4.5rem] rounded-3xl  `}
                style={{ backgroundColor: bgColor + "33" }}
              >
                {colorsArray.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setBgColor(item),
                        tabIndex == 1
                          ? bodyColorChanger(item)
                          : tabIndex == 2
                          ? rimColorChanger(item)
                          : tabIndex == 3
                          ? interiorColorChanger(item)
                          : "";
                    }}
                    className={`w-14 h-14 rounded-full shadow-md `}
                    style={{ backgroundColor: item, opacity: 1 }}
                  ></button>
                ))}
                <div
                  className="w-14 h-14 rounded-full shadow-md bg-center bg-cover"
                  style={{ backgroundImage: `url(${Colorwheel})` }}
                  onClick={() =>
                    user.isVIP == true
                      ? togglePicker()
                      : navigate("../subscribe")
                  }
                >
                  <div className="badge badge-sm badge-secondary">VIP</div>

                  {user.isVIP == true ? (
                    <input
                      ref={colorPickerRef}
                      onChange={(e) => {
                        setBgColor(e.target.value),
                          tabIndex == 1
                            ? bodyColorChanger(e.target.value)
                            : tabIndex == 2
                            ? rimColorChanger(e.target.value)
                            : tabIndex == 3
                            ? interiorColorChanger(e.target.value)
                            : "";
                      }}
                      type="color"
                      className="w-14 h-14 appearance-none opacity-0"
                    />
                  ) : null}
                </div>
              </div>
            )
          ) : (
            <></>
          )}
          <div className="absolute right-0 translate-y-1/2 max-sm:bottom-10 max-sm:w-full justify-center flex items-center">
            <ul className="menu max-sm:menu-horizontal bg-base-200 gap-4 max-sm:w-fit rounded-box">
              <li>
                <button
                  className="tooltip tooltip-left z-[100]"
                  data-tip="Body Color"
                  onClick={() => {
                    setTabIndex(1);
                    setIsOpen(true);
                    setBgColor("#E2E8F0");
                    cameraSetter(1);
                  }}
                >
                  <GiCarDoor size={30} />
                </button>
              </li>
              <li>
                <div
                  tabIndex={0}
                  className={`dropdown sm:dropdown-left max-sm:dropdown-top `}
                >
                  <button
                    tabIndex={0}
                    className="   z-[1000] w-fit "
                    onClick={() => {
                      setTabIndex(2);
                      setIsOpen(true);
                      setBgColor("#E2E8F0");
                      cameraSetter(2);
                    }}
                  >
                    <GiCarWheel size={30} />
                  </button>
                  <div className="">
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-200 rounded-box z-[1] w-fit p-2 shadow max-sm:-left-1/3"
                    >
                      <li>
                        <button
                          data-tip="Rim Color"
                          className="tooltip tooltip-left"
                          onClick={() => {
                            setTabIndex(2);
                            setIsOpen(true);
                            setBgColor("#E2E8F0");
                            cameraSetter(2);
                          }}
                        >
                          <IoColorPaletteOutline size={30} />
                        </button>
                      </li>
                      <li>
                        <button
                          data-tip="Rim Type"
                          className="tooltip tooltip-left"
                          onClick={() => {
                            setTabIndex(9);
                            setIsOpen(true);
                            setBgColor("#E2E8F0");
                            cameraSetter(2);
                          }}
                        >
                          <GiCarWheel size={30} />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="tooltip tooltip-left"
                  data-tip="Interior Color"
                  onClick={() => {
                    setTabIndex(3);
                    setIsOpen(true);
                    setBgColor("#E2E8F0");
                    cameraSetter(3);
                  }}
                >
                  <GiCarSeat size={30} />
                </button>
              </li>
              <li className="max-sm:ml-auto sm:border-t border-info max-sm:border-l">
                <Link
                  to={localStorage.getItem("user") ? "../checkout" : "../login"}
                  className="tooltip tooltip-left text-primary sm:px-0 flex flex-col items-center justify-center"
                  data-tip="Checkout"
                >
                  <BiSend color="#5051FB" size={30} />
                  {/* <p className="text-sm text-primary max-sm:hidden">Checkout</p> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {price > 0 && (
            <div className="absolute bottom-20 left-14 lg:bottom-9 lg:left-16 bg-white p-2 rounded text-center shadow w-36 h-12">
              <strong>Price: ${price}</strong>
            </div>
          )}
      </div>

      {/* </div> */} 
    </div>
  );
}