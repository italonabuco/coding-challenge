import React from 'react';
import './SocialMediaButton.scss';

const SocialMediaButton = (props) => {
  return (
    <div className="social-media-btn d-flex align-items-center" onClick={props.onClick}>
      <img src={props.src} alt="social-media-button" />
      <div className="social-media-btn-children">{props.children}</div>
    </div>
  );
};

export default SocialMediaButton;
