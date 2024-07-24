import React, { useState, useEffect } from "react";
import NavHeader from "../comHome/NavHeader";
import NavHeaderLog from "../comHome/NavHeaderLog";
import Nav2 from "../Nav2";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
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

  return (
    <>
      <div className="relative">
        <section className="relative h-screen bg-base-100 flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/9129105/9129105-uhd_2732_1440_25fps.mp4"
            autoPlay
            muted
            loop
          ></video>
          <a
            href="#feature-section"
            className="absolute bottom-10 text-base-100 font-bold text-xl  animate-bounce z-10"
          >
            ⯆
          </a>
          <div className="absolute inset-0 bg-neutral opacity-50"></div>
          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 text-base-100 text-center">
            <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
              <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl mb-5">
                Explore Our 3D Car Website
              </h1>
              <p className="text-xl font-medium leading-8 mb-14 max-w-xl mx-auto">
                Discover the future of car shopping with our immersive 3D car
                website, where you can explore every detail of your dream car
                from the comfort of your home.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <Nav2 />
        </div>
      </div>
    </>
  );
}
