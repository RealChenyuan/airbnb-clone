"use client";

import React, { useMemo, useState } from "react";
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import { getCenter } from "geolib";

function Map({ houseItems }) {
  const coordinates = houseItems.map((item) => {
    return { longitude: item.long, latitude: item.lat };
  });

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  const pins = useMemo(
    () =>
      houseItems.map((item) => (
        <div key={item.lat}>
          <Marker
            key={item.lat}
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setSelectedLocation(item)}
          >
            <p className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>

          {selectedLocation.long === item.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              longitude={item.long}
              latitude={item.lat}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      )),
    [houseItems, selectedLocation]
  );

  console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chenyan29/clhhsigv101eb01qu8u12akgk"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      onMove={({ evt }) => setViewport(evt)}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {pins}
    </ReactMapGL>
  );
}

export default Map;
