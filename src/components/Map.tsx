import { memo } from 'react';

import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';
import { RiMapPin2Fill as MarkerIcon } from 'react-icons/ri';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ReactMapBoxGl({
  accessToken: process.env.NEXT_PUBLIC_MAP_KEY,
});

const Map: React.FC = () => {
  return (
    <MapBox
      style="mapbox://styles/mapbox/streets-v10"
      containerStyle={{ height: '100%', width: '100%' }}
      zoom={[15]}
      center={[-46.8233851, -23.4246937]}
    >
      <Marker coordinates={[-46.8233851, -23.4246937]} anchor="bottom">
        <MarkerIcon size={25} color={'#3e3e3e'} />
      </Marker>
    </MapBox>
  );
};

export default memo(Map);
