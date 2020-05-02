import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PieChart from "../../components/charts/pieChart";
import BarChart from "../../components/charts/histogram";
import regionsStats from "../../components/data/regions";
import HighCharts from "highcharts";

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
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: -20 }}>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-4">
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg pt-2 pb-2">
              <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-1 px-5">
                <div>
                  <div className={"text-gray-100 text-4xl "}>31.1M</div>
                  <div
                    style={{ fontSize: 10, marginTop: -10 }}
                    className={"text-gray-100"}
                  >
                    POPULATION OF GHANA
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 px-5">
                <div>
                  <div className={"text-gray-100 text-2xl "}>
                    <div className={"flex flex-row items-center"}>
                      10
                      <div className={"ml-5"}>
                        <svg
                          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    HEALTH CENTRES
                  </div>
                </div>
                <div className={"flex flex-col items-end justify-end"}>
                  <div className={"text-gray-100 text-2xl "}>5</div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    VENDORS
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg pt-2 pb-2">
              <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-1 px-5">
                <div>
                  <div className={"text-gray-100 text-4xl "}>1154</div>
                  <div
                    style={{ fontSize: 10, marginTop: -10 }}
                    className={"text-gray-100"}
                  >
                    TOTAL CASES CONFIRMED
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 px-5">
                <div>
                  <div className={"text-gray-100 text-2xl "}>
                    <div className={"flex flex-row items-center"}>
                      2,169
                      <div className={"ml-5"}>
                        <svg
                          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    ACTIVE CASES
                  </div>
                </div>
                <div className={"flex flex-col items-end justify-end"}>
                  <div className={"text-gray-100 text-2xl "}>0</div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    NEW CASES TODAY
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg pt-2 pb-2">
              <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-1 px-5">
                <div>
                  <div className={"text-gray-100 text-4xl "}>68591</div>
                  <div
                    style={{ fontSize: 10, marginTop: -10 }}
                    className={"text-gray-100"}
                  >
                    TOTAL TESTS
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 px-5">
                <div>
                  <div className={"text-gray-100 text-2xl "}>
                    <div className={"flex flex-row items-center"}>
                      4
                      <div className={"ml-5"}>
                        <svg
                          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    CRITICAL
                  </div>
                </div>
                <div className={"flex flex-col items-end justify-end"}>
                  <div className={"text-gray-100 text-2xl "}>99</div>
                  <div
                    style={{ fontSize: 10, marginTop: -5 }}
                    className={"text-gray-100"}
                  >
                    RECOVERED
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg flex items-end mt-1 justify-end">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-100 truncate">
                    Deaths
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-light text-gray-100 flex items-end justify-end">
                    9
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className=" overflow-hidden  pt-2 pb-2">
            <PieChart
              chartOptions={{
                chart: {
                  type: "pie",
                },
                title: {
                  text: "Cases in Regions Analysis",
                },
                series: [
                  {
                    name: "Regions",
                    data: regionsStats,
                  },
                ],
              }}
            />
          </div>
          <div className=" overflow-hidden   pt-2 pb-2">
            <PieChart
              chartOptions={{
                chart: {
                  type: "bar",
                },
                title: {
                  text:
                    "With Covid-19 testing kits Vs Without Covid-19 testing kits",
                },
                legend: {
                  layout: "vertical",
                  align: "right",
                  verticalAlign: "top",
                  x: -40,
                  y: 80,
                  floating: true,
                  borderWidth: 1,
                  backgroundColor:
                    HighCharts.defaultOptions.legend.backgroundColor ||
                    "#FFFFFF",
                  shadow: true,
                },
                series: [
                  {
                    name: "Regions",
                    data: [
                      {
                        name: " With Covid-19 testing kits ",
                        color: "green",
                        y: 10,
                      },
                      {
                        name: "Without Covid-19 testing kits",
                        color: "orange",
                        y: 40,
                      },
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardComponent;
