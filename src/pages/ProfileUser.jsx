import React, { useState, useEffect, Component } from "react";
import Profile from "../components/comProfile/Profile";
import Footer from "../components/Footer";
import ProfileVideo from "../assets/ProfileVideo.mp4";
import CardPro from "../components/comProfile/CardPro";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Nav2 from "../components/Nav2";

export default function ProfileUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [showProfile, setShowProfile] = useState(false);

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

  const handleEditClick = () => {
    setShowProfile(true);
  };

  return (
    <>
      <div className="relative h-screen flex flex-col justify-between items-center">
        <Nav2 />

        <video
          className="h-screen -z-50 w-full object-cover	"
          type="video/mp4"
          autoPlay
          loop
          muted
        >
          <source src={ProfileVideo} />
        </video>
        {showProfile ? <Profile /> : <CardPro onEditClick={handleEditClick} />}
      </div>
    </>
  );
}
