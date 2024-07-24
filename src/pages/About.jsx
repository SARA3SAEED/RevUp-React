import React, { useState, useEffect, Component } from "react";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Bannar from "../components/Bannar";
import Footer from "../components/Footer";
import SectionFooter from "../components/SectionFooter";
import Team from "../components/comAbout/Team";
import Contact from "../components/comAbout/Contact";
import Main from "../components/comAbout/Main";
import Loader from "../components/Loader";
import Nav2 from "../components/Nav2";

export default function About() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="flex justify-center ">
        <Nav2 />
      </div>

      <Main />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
