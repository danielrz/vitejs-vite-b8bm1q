import useGeoLocation from "../hooks/useGeoLocation";

function GeoLocation() {

  const geoLocation = useGeoLocation();
  return (
    <>
      <div>lat: {geoLocation?.latitude}</div>
      {geoLocation ? (
        <>
          <div>latitude: {geoLocation.latitude}</div>
          <div>longitude: {geoLocation.longitude}</div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

export default GeoLocation
