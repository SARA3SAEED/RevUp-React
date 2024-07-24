import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";

export default function Team() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet Our Founders
            </h3>
            <p className="text-gray-600 mt-3">
              Our company was founded with the vision of creating innovative
              solutions to established by our dedicated founders.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <li>
                <div className="w-24 h-24 mx-auto">
                  <IoPersonOutline size={99} color="gray" />
                  {/* <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    className="w-full h-full rounded-full"
                  /> */}
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    Sara Almutairi
                  </h4>
                  <p className="text-indigo-600">
                    Developer & Analytical Expert
                  </p>
                  <p className="text-gray-600 mt-2 h-20">
                    is an adept Systems and Data Analyst with extensive
                    experience in analyzing intricate data sets and streamlining
                    system processes.
                  </p>
                  <div className="mt-4 flex justify-center gap-4 text-gray-400">
                    <Link to="https://github.com/SARA3SAEED">
                      <ImGithub size={23} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/sara-almutairi33">
                      <AiFillLinkedin size={25} />
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="w-24 h-24 mx-auto">
                  <IoPersonOutline size={99} color="gray" />
                  {/* <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    className="w-full h-full rounded-full"
                  /> */}
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    Amer Al-Ghamdi
                  </h4>
                  <p className="text-indigo-600">Web Developer</p>
                  <p className="text-gray-600 mt-2 h-20">
                    Highly motivated and results-oriented Web Developer
                  </p>
                  <div className="mt-4 flex justify-center gap-4 text-gray-400">
                    <Link to="https://github.com/Akom07">
                      <ImGithub size={23} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/amer-ali-alghamdi/">
                      <AiFillLinkedin size={25} />
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="w-24 h-24 mx-auto">
                  <IoPersonOutline size={99} color="gray" />

                  {/* <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    className="w-full h-full rounded-full"
                  /> */}
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    Fatimah Al-shawmari
                  </h4>
                  <p className="text-indigo-600">Front-End Developer</p>
                  <p className="text-gray-600 mt-2 h-20">
                    is a web developer have an experience in Front-End
                    Development
                  </p>
                  <div className="mt-4 flex justify-center gap-4 text-gray-400">
                    <Link to="https://github.com/FatimahHabib84">
                      <ImGithub size={23} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/fatimah-alshawmari-83797227b/">
                      <AiFillLinkedin size={25} />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
