
interface Props {
  latitude?: number;
  longitude?: number;
}

function GeoLocation1({latitude, longitude}: Props) {

  return (
    <>
      {latitude ? (
        <>
          <div>latitude: {latitude}</div>
          <div>longitude: {longitude}</div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

export default GeoLocation1
