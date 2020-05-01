import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DashboardComponent = (props) => {
  return (
    <Fragment>
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <nav className="sm:hidden">
                <a
                  href="#"
                  className="flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  <svg
                    className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </a>
              </nav>
              <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  Dashboard
                </a>
                <svg
                  className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  Overview
                </Link>
              </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl  font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                  Overview
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"></div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default DashboardComponent;
