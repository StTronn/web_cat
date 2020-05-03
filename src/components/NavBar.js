import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div style={{ width: "100vw" }}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobeillustrator.svg"
                  alt="Workflow logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  <Link
                    to="/dash"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/websites"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    websites
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
