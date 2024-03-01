import { useState } from 'react';
import Map from './Map.jsx';
import Liste from './Liste.jsx';
import './MapListContainer.css'

function MapListContainer() {
  const [isMap, setIsMap] = useState(true);

  const handleMapClick = () => {
    setIsMap(true);
  };

  const handleListClick = () => {
    setIsMap(false);
  };

  return (
    
      <div className='btn'>
        <Map
          onClick={handleMapClick}
          isMap={isMap}
        />
        <Liste
          onClick={handleListClick}
          isMap={isMap}
        />
      </div>
  
  );
}

export default MapListContainer;
