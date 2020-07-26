import React from 'react';
import './InteractiveArea.scss';
import FlowManager from './FlowManager';

const InteractiveArea = () => {
  return (
    <div className="interactive-area">
      <div className="brand-name">Invision</div>
      <FlowManager />
    </div>
  );
};

export default InteractiveArea;
