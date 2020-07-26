import React from 'react';
import './App.scss';
import InteractiveArea from './components/InteractiveArea';

function App() {
  return (
    <div className="container-fluid page-container">
      <div className="row page-row">
        <div className="col col-6 page-col">
          <div className="slider"></div>
        </div>
        <div className="col col-6 page-col">
          <InteractiveArea />
        </div>
      </div>
    </div>
  );
}

export default App;
