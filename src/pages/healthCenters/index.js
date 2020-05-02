import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HealthCentersDepartment = (props) => {
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
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  Home
                </Link>
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
                  to="/health_centers"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  Health Centers
                </Link>
              </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl  font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                  Health Centers
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-800 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-800 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Number Of Covid Cases
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 text-center bg-gray-800 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Max. No. of Carrying Capacity
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-800"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Takoradi, Gh
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      1599
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm  leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Kumasi, Gh
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      20
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      2000
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Kumasi, Gh
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      729
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      700
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Accra, Gh
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      500
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      1000
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Bernard Lane
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                     Accra, gh
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      20
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm text-center leading-5 text-gray-500">
                      1500
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HealthCentersDepartment;
