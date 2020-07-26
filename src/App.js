import React from 'react';
import './App.scss';
import InteractiveArea from './components/InteractiveArea';
import Slider from './components/Slider';

function App() {
  return (
    <div className="container-fluid page-container">
      <div className="row page-row">
        <div className="d-none d-lg-block col col-6 page-col">
          <Slider></Slider>
        </div>
        <div className="col col-12 col-lg-6 page-col">
          <InteractiveArea />
        </div>
      </div>
    </div>
  );
}

export default App;
