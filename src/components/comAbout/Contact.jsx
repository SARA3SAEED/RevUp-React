import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    status: "in progress" 
  });

  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }

    const userId = localStorage.getItem('user'); 
    if (userId) {
      fetchUserEmail(userId);
    }
  }, []);

  const fetchUserEmail = async (userId) => {
    try {
      const response = await axios.get(`https://66a171257053166bcabeff8f.mockapi.io/user/${userId}`);
      const userEmail = response.data.email;
      setFormData((prevData) => ({
        ...prevData,
        email: userEmail
      }));
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === "admin") {
      return;
    }
    try {
      const response = await axios.post('https://66980ca602f3150fb66fe5dc.mockapi.io/contact', formData);
      console.log(response.data);
      toast.success("Your message has been sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        message: "",
        status: "in progress" 
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="py-5">
      <hr />
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 ">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3 pl-9 pt-24">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or use the
              contact information below.
            </p>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5 mx-6">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={role === "admin"}
                className={`w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 ${role === "admin" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Submit
              </button>
              <ToastContainer position="top-left" theme="light" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
