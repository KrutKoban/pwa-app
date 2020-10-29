import React, {useEffect} from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'
      >
        <a-entity gltf-model="../assets/witness.png" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: 37.6173; latitude: 55.755826;" animation-mixer/>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};

export default App;