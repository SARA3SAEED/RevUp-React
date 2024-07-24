import React from "react";

export default function Main() {
  return (
    <>
      <section className="bg-gray-100 pt-4 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                We seek to create added value in the car selling sector and to
                be a purchasing advisor to customers, as we seek To build their
                confidence and provide after-sales services in a new way and a
                modern and advanced vision with the aim of building a
                sustainable relationship with the customer.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                alt="About Us Image"
                className="object-cover rounded shadow-md"
                src="https://images.pexels.com/photos/10343804/pexels-photo-10343804.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
