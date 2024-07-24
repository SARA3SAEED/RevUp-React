import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    profile: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    zip: "",
    status: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("user");
    if (storedUserId) {
      setUserId(storedUserId);
      axios
        .get(`https://66a171257053166bcabeff8f.mockapi.io/user/${storedUserId}`)
        .then((response) => {
          setFormData({
            fullName: response.data.fullName,
            profile: response.data.profile || "",
            email: response.data.email,
            mobile: response.data.mobile,
            address: response.data.address,
            state: response.data.state,
            zip: response.data.zip,
            status: response.data.isVIP ? "vip" : "basic",
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      status: "basic",
      isVIP: false,
    };

    if (userId) {
      axios
        .put(
          `https://66a171257053166bcabeff8f.mockapi.io/user/${userId}`,
          updatedFormData
        )
        .then((response) => {
          setSuccessMessage("Profile updated successfully!");
          setTimeout(() => setSuccessMessage(""), 3000);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };

  return (
    <div className="absolute top-full -translate-y-full m-auto">
      <section className="py-10 m-auto">
        <div className="mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
              Profile
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full">
                  <label htmlFor="fullName" className="mb-2 text-base-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-base-100 bg-opacity-35 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              {/* <div className="w-full mb-4 mt-6">
                <label htmlFor="profile" className="mb-2 text-base-100">
                  Profile
                </label>
                <input
                  type="text"
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                  placeholder="Profile"
                />
              </div> */}
              <label
                className="mt-4 mb-2 block text-base-100 text-sm font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="w-full bg-base-100 bg-opacity-35 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@gmail.com"
                  type="email"
                />
              </div>
              <label
                className="mt-4 mb-2 block text-base-100 text-sm font-medium"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <div className="flex flex-row">
                <p className="w-2/12 bg-base-100 bg-opacity-35 flex-shrink-0 rounded-md border border-gray-200 py-3 text-center text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  +966
                </p>
                <input
                  className="relative bg-base-100 bg-opacity-35 w-10/12 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="5xx-xxx-xxx"
                  type="text"
                />
              </div>

              <label
                className="mt-4 mb-2 block text-base-100 text-sm font-medium"
                htmlFor="address"
              >
                Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    className="w-full bg-base-100 bg-opacity-35 rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street Address"
                    type="text"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      alt=""
                      className="h-4 w-4 object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png"
                    />
                  </div>
                </div>
                <select
                  className="w-full bg-base-100 bg-opacity-35 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">State</option>
                </select>
                <input
                  className="flex-shrink-0 bg-base-100 bg-opacity-35 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-secondary focus:ring-secondary"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="ZIP"
                  type="text"
                />
              </div>

              <div className="flex  bg-base-100 bg-opacity-35 items-center text-sm mt-3 divide-y rounded py-2 px-3 text-neutral shadow-sm">
                <span>Status</span>
                <span className="ml-auto">
                  <select
                    className="rounded-full bg-base-100 bg-opacity-35 py-1 px-2 text-xs font-medium"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="basic">Basic</option>
                    <option value="vip">VIP</option>
                  </select>
                </span>
              </div>
              {successMessage && (
                <div className="bg-green-100 text-green-800 text-center rounded my-3 p-2">
                  {successMessage}
                </div>
              )}
              <div className="w-full rounded-lg bg-primary mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
