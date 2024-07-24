import React, { useState, useEffect, useRef, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraSetting from "../components/carModels/CameraSetting";
import { useDispatch, useSelector } from "react-redux";
import "../styles/CarDetStyle.css";
import Colorwheel from "../assets/colorwheel.png";
import {
  setBodyColor,
  setCamera,
  setTarget,
  setInteriorColor,
  setRimColor,
  reseter,
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
import { BiSend } from "react-icons/bi";
import aa from "../assets/pexels.jpg";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import axios from "axios";

export default function Details() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState({});
  const [bgColor, setBgColor] = useState("#fffff");
  const colorsArray = ["white", "#ff0000", "#00ff00", "#0000ff", "black"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carid } = useParams();
  const settingsDet = {
    dots: true,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    className: "center",
    infinite: true,
    lazyLoad: true,
    centerPadding: 0,
    slidesToShow: 3,
    slideToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: true,
    arrows: false,
  };

  const bodyColorChanger = (e) => {
    dispatch(setTarget({ target: [0, 0, 0] }));
    dispatch(
      setBodyColor({
        color: e,
        fov: 30,
        position: [4.5, 1.6, 4.3],
      })
    );
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
    axios
      .get(
        `https://66a171257053166bcabeff8f.mockapi.io/user/${localStorage.getItem(
          "user"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
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
  }, []);
  const [color, setColor] = useState("#000000");
  const colorPickerRef = useRef();

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const togglePicker = () => {
    colorPickerRef.current.click();
  };

  return (
    <div
      style={{
        background:
          bgColor == "black"
            ? `rgba(0, 0, 0, 0.2)`
            : bgColor == "white"
            ? `rgba(255, 255, 255,0.2)`
            : // background: `radial-gradient(circle, #ffffff, ${bgColor})`
              // `radial-gradient(circle at 50%, #fff, #fff 20%, ${bgColor} 75%, ${bgColor} 75%)`,
              `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
                bgColor.slice(3, 5),
                16
              )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${0.2})`,
      }}
      className="flex flex-col w-full  h-screen justify-between bg-opacity-15 "
    >
      <div>{isLoggedIn ? <NavLog role={userRole} /> : <Nav />}</div>
      <div className="flex flex-col items-center  w-full">
        <div className=" flex justify-between w-full h-full min-h-[30rem] ">
          <div className="w-full h-full flex flex-col flex-1">
            <div className="relative h-full  ">
              <CameraSetting />
              <div className="flex absolute top-0 justify-center w-full z-50">
                {isOpen && (
                  <div className="colorCont flex flex-row gap-8 justify-center items-center mt-2 w-56 h-16 ">
                    <Slider {...settingsDet}>
                      {colorsArray.map((item, index) => (
                        <div className="w-fit h-fit flex items-center justify-center">
                          <button
                            key={index}
                            onClick={() => {
                              tabIndex == 1
                                ? bodyColorChanger(item)
                                : tabIndex == 2
                                ? rimColorChanger(item)
                                : tabIndex == 3
                                ? interiorColorChanger(item)
                                : "";
                              setBgColor(item);
                            }}
                            className={
                              index == slideIndex
                                ? item === "black" || item == "white"
                                  ? "w-14 h-14 rounded-full ml-3 shadow-md bg-" +
                                    item
                                  : "w-14 h-14 rounded-full ml-3 shadow-md slide-active bg-[" +
                                    item +
                                    "]"
                                : item === "black" || item == "white"
                                ? "w-10 h-10 ease-in-out duration-300 rounded-full ml-3 shadow-md bg-" +
                                  item
                                : "w-10 h-10 ease-in-out duration-300 rounded-full ml-3 shadow-md bg-[" +
                                  item +
                                  "]"
                            }
                          ></button>
                        </div>
                      ))}
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="absolute font-bold z-20 bg-secondary px-1 rounded-full text-sm -left-0">
                          VIP
                        </div>

                        <div
                          className={
                            slideIndex == 5
                              ? "overflow-hidden w-14 h-14 rounded-full"
                              : "overflow-hidden w-10 h-10 rounded-full"
                          }
                        >
                          <div
                            className="color-icon w-14 h-14 shadow-md"
                            onClick={
                              togglePicker
                            }
                          >
                            <div
                              className="selected-color absolute z-10 w-14 h-14"
                              style={{
                                backgroundImage: `url(${Colorwheel})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                            ></div>
                          </div>
                          <input
                            className="absolute color-picker top-[-100px] left-[-100px] w-20 h-20 "
                            type="color"
                            ref={colorPickerRef}
                            onChange={(e) => {
                              user.isVIP == true
                                ? tabIndex == 1
                                  ? bodyColorChanger(e.target.value)
                                  : tabIndex == 2
                                  ? rimColorChanger(e.target.value)
                                  : tabIndex == 3
                                  ? interiorColorChanger(e.target.value)
                                  : ""
                                : navigate("../subscribe");
                              handleColorChange;
                              setBgColor(e.target.value);
                            }}
                          />
                        </div>
                       
                      </div>
                  
                    </Slider>
                  </div>
                )}
              </div>
              <div className=" flex absolute sm:right-1 sm:w-20 sm:top-2 sm:h-5/6 max-sm:-bottom-20 max-sm:w-full  ">
                <ul className="menu max-sm:menu-horizontal bg-base-200 gap-4 max-sm:w-full rounded-box">
                  <li>
                    <button
                      className="tooltip tooltip-left z-[100]"
                      data-tip="Body Color"
                      onClick={() => {
                        setTabIndex(1);
                        setIsOpen(true);
                        cameraSetter(1);
                      }}
                    >
                      <GiCarDoor size={30} />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Rim Color"
                      onClick={() => {
                        setTabIndex(2);
                        setIsOpen(true);
                        cameraSetter(2);
                      }}
                    >
                      <GiCarWheel size={30} />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Interior Color"
                      onClick={() => {
                        setTabIndex(3);
                        setIsOpen(true);
                        cameraSetter(3);
                      }}
                    >
                      <GiCarSeat size={30} />
                    </button>
                  </li>
              
                  <li>
                    <Link
                      to={"../checkout"}
                      className="tooltip tooltip-left"
                      data-tip="Checkout"
                    >
                      <BiSend size={30} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
}
