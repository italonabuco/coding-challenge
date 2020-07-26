import React, { useState } from 'react';
import './FlowManager.scss';
import SocialMediaButton from '../../SocialMediaButton';
import img from '../../../assets/img/logo512.png';
import FooterContent from './FooterContent';

const FlowManager = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchContent = () => {
    setIsSignIn(!isSignIn);
  };

  const getClassType = (isSignIn) =>
    isSignIn ? 'form-sign-in' : 'form-sign-up';

  return (
    <div className="flow-manager d-flex flex-column align-items-center pt-5">
      <div className="flow-title">Getting Started</div>
      <div> Form</div>
      <div className="option-divider d-flex align-items-center justify-content-center">
        <div className="divider-line"></div>
        <div className="divider-text px-3">Or</div>
        <div className="divider-line"></div>
      </div>
      <SocialMediaButton src={img} onClick={() => {}}>
        <div className={'social-media-btn-text'}>
          {isSignIn ? 'Sign in with google' : 'Sign up with google'}
        </div>
      </SocialMediaButton>
      <FooterContent onSwitch={switchContent} isSignIn={isSignIn} />
    </div>
  );
};

export default FlowManager;
