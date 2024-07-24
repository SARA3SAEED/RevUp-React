import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Brand from "../components/comHome/Brand";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setCarName } from "../redux/Slices/ColorsSlice";
import { useDispatch } from "react-redux";
import nessan from "../assets/Nissan.png";
import pursh from "../assets/porsche.png";
import genesis from "../assets/Lotus-Emira.png";
import videoCar from "../assets/videoCar.mp4";
import ToyotaSupra from "../assets/ToyotaSupra.png";
import Footer from "../components/Footer";
import "../App.css";
import Nav2 from "../components/Nav2";
import {
  SiHonda,
  SiToyota,
  SiNissan,
  SiMercedes,
  SiPorsche,
} from "react-icons/si";

const iconMap = {
  Nissan: SiNissan,
  Porsche: SiPorsche,
  Lotus: () => (
    <img
      src="https://seeklogo.com/images/L/Lotus-logo-7E5B29D0CE-seeklogo.com.png"
      className="w-[35px] h-[35px]"
      alt="Lotus Logo"
    />
  ),
  Toyota: SiToyota, 
};

export default function Cars() {
  const [brandRef, brandInView] = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const arrayOfImages = [
    { id: 1, name: "Nissan -GTR", src: nessan , price:"$115,000"},
    { id: 2, name: "Porsche 911", src: pursh , price:"$115,000" },
    { id: 3, name: "Lotus -Emira", src: genesis , price:"$85,000" },
    { id: 4, name: "Toyota Supra", src: ToyotaSupra , price:"$45,000" },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 20;
      setIsLoading(false);
    };
    window.screen.width > 600 ? setIsSmall(false) : setIsSmall(true);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    className: "center",
    focusOnSelect: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    slideToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: true,
    vertical: isSmall,
    verticalSwiping: isSmall,
    arrows: false,
  };

  const handleClick = (carr) => {
    dispatch(setCarName({ carName: carr.name }));
    localStorage.setItem("displayid", carr.id);
    localStorage.setItem("displayName", carr.name);
    navigate(`../det/${carr.id}`);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-between">
      <Nav2 />
      <div className="w-full">
        <h1 className="absolute z-30 top-1/3 text-center text-neutral font-bold text-5xl w-full p-4">
          Discover the new Models
        </h1>
        <video
          className="relative h-[90vh] w-full object-cover"
          type="video/mp4"
          autoPlay
          loop
          muted
        >
          <source src={videoCar} />
        </video>
      </div>

      <div className="w-full">
        <motion.div
          ref={brandRef}
          variants={fadeInUp}
          initial="hidden"
          animate={brandInView ? "visible" : "hidden"}
        >
          <Brand />
          <hr />
        </motion.div>
      </div>

      <div className="flex flex-wrap p-3 w-full justify-center lg:mt-20">
        <div className="carousel lg:w-[80%]">
          {arrayOfImages.map((item, index) => {
            const Icon = iconMap[item.name.split(" ")[0]] || SiHonda; 
            return (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <div className="bg-white rounded-xl border border-gray-300 overflow-hidden w-full mb-6 lg:px-28">
                  <div className="p-5 flex justify-between items-center">
                    <div className="flex flex-row lg:mt-4">
                      <Icon size={30} />
                      <div className="ml-6">
                        <div className="uppercase tracking-wide text-sm font-semibold">
                          {item.name}
                        </div>
                        <p className="text-sm font-thin w-44 text-gray-600">
                          Available for local delivery
                        </p>
                      </div>
                    </div>
                    <div className="mt-1 text-gray-900 font-bold text-sm">
                     {item.price}
                    </div>
                  </div>
                  <div className="mx-auto w-full">
                    <img
                      className="mt-2 w-full object-cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <div className="lg:p-8 p-2">
                    <div className="flex justify-between mt-4">
                      <div>
                        <div className="w-28 text-sm font-medium text-gray-900">
                          4.4 s
                        </div>
                        <div className="w-28 text-sm text-gray-600">0-60 mph</div>
                      </div>
                      <div>
                        <div className="w-28 text-sm font-medium text-gray-900">
                          135 mph
                        </div>
                        <div className="w-28 text-sm text-gray-600">
                          Top speed
                        </div>
                      </div>
                      <div>
                        <div className="w-28 text-sm font-medium text-gray-900">
                          389 mi
                        </div>
                        <div className="w-28 text-sm text-gray-600">Autonomy</div>
                      </div>
                    </div>
                    <button
                      className="btn btn-accent mt-2 w-60"
                      onClick={() => handleClick(item)}
                    >
                      {item.name}
                      &nbsp;&nbsp;<span className="">&#x27A4;</span>
                    </button>
                  </div>
                </div>
                <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slide${
                      index === 0 ? arrayOfImages.length - 1 : index - 1
                    }`}
                    className="p-4"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index === arrayOfImages.length - 1 ? 0 : index + 1
                    }`}
                    className="p-4"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
