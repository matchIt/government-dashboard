import React, { Fragment } from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Rectangle,
  Circle,
    Marker
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={props.latLng} zoom={7}>
    <Marker  position={props.latLng}  />
    <Rectangle bounds={props.bounds} />
    <Circle
      radius={70000}
      center={props.latLng}
      strokeColor="red"
      strokeOpacity={0}
      fillColor="red"
      fillOpacity={0.2}
      onMouseover={() => console.log("mouseover")}
    />
  </GoogleMap>
));

export default MapWithAMarker;
