import React, { useState, useEffect, Component } from "react";
import Bill from "../components/comCheckout/Bill";
import Pay from "../components/comCheckout/Pay";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Bannar from "../components/Bannar";
import Loader from "../components/Loader";
import Nav2 from "../components/Nav2";

export default function Checkout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("user");
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="flex justify-center">
        <Nav2 />
      </div>

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-16 my-28 max-sm:my-16 gap-4 ">
        <Bill />
        <Pay />
      </div>
      <Footer />
    </>
  );
}
