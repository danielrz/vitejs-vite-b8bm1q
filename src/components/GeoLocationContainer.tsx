import { useState, useEffect } from "react";
import GeoLocation1 from "./GeoLocation1";

function GeoLocationContainer() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    console.log("geolocation", navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("location", position.coords);
          setLocation(position.coords);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [navigator]);

  return (
    <GeoLocation1
      latitude={location?.latitude}
      longitude={location?.longitude}
    />
  );
}

export default GeoLocationContainer;
