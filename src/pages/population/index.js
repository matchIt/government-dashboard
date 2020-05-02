import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import regionData from "../../components/data/metaData";
import Axios from "axios";
import {Spinner} from "evergreen-ui";

const PopulationComponent = (props) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [latLng, setLatLng] = useState({
    lat: 8.2262386,
    lng: -0.6535913999999999,
  });
  const [name, setName] = useState("Ghana");

  let points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 },
  ];
  let bounds = new props.google.maps.LatLngBounds();
  for (let i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let data = await Axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyAtsKSqZLKQeh4oZAk05n5zYwZ_GswtzHk`
      );
      setLatLng(data.data.results[0].geometry.location);
      setName(data.data.results[0].formatted_address);
      console.log(data.data.results[0].geometry.location);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
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
                  to="/population_densities"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
                >
                  population densities
                </Link>
              </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl  font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                  Regional Population Densities
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                <div className="mt-1 relative rounded-md shadow-sm w-100">
                  <form onSubmit={handleSearch}>
                    <input
                      id="account_number"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="form-input block w-full pr-10 sm:text-sm font-light sm:leading-5"
                      placeholder="Search for a place "
                    />
                  </form>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="pl-10">
        <Map
          google={props.google}
          zoom={7}
          style={{ height: "100%", width: "93%" }}
          initialCenter={latLng}
          center={latLng}
        >
          <InfoWindow position={latLng}>
            <div className={"bg-white p-10"}>
              <h1>Oh meeee</h1>
            </div>
          </InfoWindow>
          <Marker position={latLng} draggable={true} />

          {/*{regionsInGhana.map(({ name, fillColor, strokeColor }) => (*/}
          {/*    <Polygon*/}
          {/*        paths={getRegionalPolygon(name)}*/}
          {/*        strokeColor={strokeColor}*/}
          {/*        strokeOpacity={0.8}*/}
          {/*        strokeWeight={1}*/}
          {/*        fillColor={fillColor}*/}
          {/*        onMouseover={() => console.log(name)}*/}
          {/*        fillOpacity={0.35}*/}
          {/*    />*/}
          {/*))}*/}
        </Map>
      </div>
      {loading && <div
        style={{
          position: "absolute",
          height: "150vh",
          width: "100vw",
          background: "rgba(0,0,0,0.5)",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <span className={"text-white"}><Spinner style={{color:'#000'}} size={100} /></span>
      </div>}
    </Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAtsKSqZLKQeh4oZAk05n5zYwZ_GswtzHk",
})(PopulationComponent);
