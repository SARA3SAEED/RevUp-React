import React from "react";

export default function Header3() {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 my-6 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-base-100 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/4143686/pexels-photo-4143686.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-base-100">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-neutral sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine <span className="inline-block">is real</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-info md:text-lg">
              It resonates with the five senses with an appeal that cannot be
              expressed in numbers, but must be seen and experienced... for
              enjoyable driving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
