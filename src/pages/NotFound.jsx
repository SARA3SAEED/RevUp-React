import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="p-9">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-gray-600">
          <div className="space-y-3 text-center">
            <h3 className="text-primary font-semibold">404 Error</h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page not found
            </p>
            <p>
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <Link
              to="/"
              className="text-primary duration-150 hover:text-primary 
              font-medium inline-flex items-center gap-x-1"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
