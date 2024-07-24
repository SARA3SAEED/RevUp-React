import React, { useState, useEffect } from "react";
import DashList from "../components/comAdmin/DashList";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import { useNavigate } from "react-router-dom";
import Nav2 from "../components/Nav2";

export default function DashboardAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

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

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              font-size: 14px;
              line-height: 1.285;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial,
                sans-serif;
            }
            html, body {
              width: 100%;
              height: 100%;
            }
            .group:hover .group-hover\\:block {
              display: block;
            }
            .focus\\:cursor-text:focus {
              cursor: text;
            }
            .focus\\:w-64:focus {
              width: 16rem;
            }
            .h-16 {
              height: 50px;
            }
            .bg-teal-900 {
              background: #03363d;
            }
            .bg-gray-100 {
              background: #f8f9f9;
            }
            .hover\\:border-green-500:hover {
              border-color: #78a300;
            }
          `,
        }}
      />
      <div className="flex justify-center">
        <Nav2 />
      </div>

      <div className="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-white">
        <div className="flex-1 flex flex-col ">
          <div className="flex justify-between items-center">
            <header
              aria-label="page caption"
              className="flex-none flex h-20 bg-gray-100 border-t px-4 items-center"
            >
              <h1 id="page-caption" className="font-semibold text-lg">
                Dashboard
              </h1>
            </header>
            <button
              onClick={handleButtonClick}
              className="mt-4 mr-2 w-40 h-9  bg-blue-500 text-white py-2 px-4 rounded"
            >
              List of Orders
            </button>
          </div>

          <main className="flex-grow flex min-h-0 border-t">
            <section
              aria-label="main content"
              className="flex min-h-0 flex-col flex-auto border-l"
            >
              <DashList />{" "}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
