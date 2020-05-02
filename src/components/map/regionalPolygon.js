import React from "react";
import { Polygon } from "google-maps-react";
import regionData from "../data/metaData";

const getRegionalPolygon = (region) => {
  return regionData[region].map((data) => {
    console.log("LngLat", data[0], data[1]);
    return { lat: data[1], lng: data[0] };
  });
};

const RegionalPolygon = ({ region }) => {
  const regionalData = getRegionalPolygon(region);
  console.log(regionalData);
  return (
    <Polygon
      paths={regionalData}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor="#0000FF"
      onMouseover={() => console.log("Mouse Over Meawww")}
      fillOpacity={0.35}
    />
  );
};

export default getRegionalPolygon;
