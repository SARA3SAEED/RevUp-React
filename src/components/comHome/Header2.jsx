import React from "react";

export default function Header2() {
  return (
    <>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-24 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center ">
          <img
            src="https://images.pexels.com/photos/5733726/pexels-photo-5733726.jpeg"
            className="object-cover object-right w-full h-auto lg:w-[98%] lg:h-full rounded-xl "
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 md:mx-9">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-neutral sm:text-4xl sm:leading-none">
                Cars and driving experiences through video clips.
              </h2>
              <p className="text-base text-info md:text-lg">
                A wide range of car agencies in one place. With the latest
                specifications and prices of cars, according to continuous
                updating to ensure the accuracy of the data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
