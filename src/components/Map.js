import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';

dotenv.config();

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 24.8578194,
    lng: 67.0107154,
  },
  zoom: 6,
};

export default Map;
