import React, { Fragment, useState, useEffect } from "react";
import countries from "./countries";
import { Dialog, Li, toaster } from "evergreen-ui";
import { Link } from "react-router-dom";

const RegisterComponent = (props) => {
  const [isShown, setShown] = useState(false);

  useEffect(() => {
    document.title = "Register - Watch Tower";
  });
  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className={"mb-5"}>
            <img
              className="mx-auto h-12 w-auto"
              src={require("../../logo.svg")}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Register an account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-blue-900">
              Watch Tower
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShown(true);
            }}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email address"
                />
              </div>
              <div>
                <select
                  aria-label="Email address"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                >
                  <option value="">Please select country</option>
                  {countries &&
                    countries.map((country, i) => {
                      return (
                        <option value={country.country}>
                          {country.country}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Register
              </button>
            </div>
            <div className="text-sm mt-5 text-center leading-5">
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Go back to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Dialog
        isShown={isShown}
        title={"Confirm Password"}
        onCloseComplete={() => setShown(false)}
      >
        <div className="-mt-px">
          <input
            aria-label="Password"
            name="password"
            type="password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Confirm Password"
          />
        </div>
      </Dialog>
    </Fragment>
  );
};

export default RegisterComponent;
