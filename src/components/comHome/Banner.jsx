import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="relative h-auto text-base-100 py-24 px-10">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>

        <div className="absolute inset-0 bg-neutral opacity-50"></div>
        <div className="relative md:w-1/2">
          <p className="font-bold text-sm uppercase text-secondary">Services</p>
          <p className="text-3xl font-bold">
            Explore the world of cars through our community{" "}
          </p>
          <p className="text-2xl mb-10 leading-none"></p>
          <Link
            to="/about"
            className="bg-primary py-4 px-8 text-base-100 font-bold uppercase text-xs 
                        rounded hover:bg-info hover:text-neutral"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
