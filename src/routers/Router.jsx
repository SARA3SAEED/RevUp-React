import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Singup from "../pages/Singup";
import Login from "../pages/Login";
import Cars from "../pages/Cars";
import Details from "../pages/Details";
import Checkout from "../pages/Checkout";
import History from "../pages/History";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ProfileAdmin from "../pages/ProfileAdmin";
import ProfileUser from "../pages/ProfileUser";
import Subscribe from "../pages/Subscribe";
import DashboardAdmin from "../pages/DashboardAdmin";
import ListUser from "../pages/ListUser";
import NewDetails from "../pages/NewDetails";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        localStorage.getItem("role") == "admin" ? <DashboardAdmin /> : <Home />,
    },
    { path: "/singup", element: <Singup /> },
    { path: "/login", element: <Login /> },
    {
      path: "/cars",
      element: <Cars />,
    },
    { path: "/det/:carid", element: <NewDetails /> },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    { path: "/order", element: <History /> },
    localStorage.getItem("role") == "admin" && {
      path: "/profile-admin",
      element: <ProfileAdmin />,
    },
    localStorage.getItem("role") == "admin" && {
      path: "/list-user",
      element: <ListUser />,
    },
    { path: "/subscribe", element: <Subscribe /> },
    { path: "/about", element: <About /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}
