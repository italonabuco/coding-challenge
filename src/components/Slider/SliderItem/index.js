import React from 'react';
import './SliderItem.scss';

const SliderItem = (props) => {
  const { src, title, children } = props;
  return (
    <div className="slider-item">
      <img src={src} alt={title} />
      <div className="slider-item-details mt-4">
        <div className="slider-item-details-title">{title}</div>
        <div className="slider-item-details-description mt-3">{children}</div>
      </div>
    </div>
  );
};

export default SliderItem;
