import { useState, useEffect } from "react";

function useGeoLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("coords", position.coords);
          setLocation(position.coords);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [navigator]);

  return location;
}

export default useGeoLocation;
