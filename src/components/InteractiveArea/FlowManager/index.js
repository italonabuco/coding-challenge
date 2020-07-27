import React, { useState, useRef } from 'react';
import './FlowManager.scss';
import SocialMediaButton from '../../SocialMediaButton';
import GoogleLogo from '../../../assets/img/google_logo.png';
import FooterContent from './FooterContent';
import CustomForm from './CustomForm';

const FlowManager = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const customFormRef = useRef(null);

  const switchContent = () => {
    setIsSignIn(!isSignIn);
    customFormRef.current.resetForm();
  };

  const googleButtonClick = (isSignIn) => {
    if (isSignIn) {
      alert('Execute: Google Sign In');
    } else {
      alert('Execute: Google Sign Up');
    }
  };

  return (
    <div className={`flow-manager d-flex flex-column align-items-center pt-2 ${isSignIn ? 'flow-sign-in' : 'flow-sign-up'}`}>
      <div className="d-flex justify-content-center">
        <span className="flow-title title-sign-in">Welcome to Invision</span>
        <span className="flow-title title-sign-up">Getting Started</span>
      </div>
      <CustomForm isSignIn={isSignIn} ref={customFormRef} />
      <div className="option-divider d-flex align-items-center justify-content-center mt-3 mb-4">
        <div className="divider-line"></div>
        <div className="divider-text px-3">Or</div>
        <div className="divider-line"></div>
      </div>
      <SocialMediaButton
        src={GoogleLogo}
        onClick={() => googleButtonClick(isSignIn)}
      >
        <div className={'social-media-btn-text'}>
          {isSignIn ? 'Sign in with google' : 'Sign up with google'}
        </div>
      </SocialMediaButton>
      <FooterContent onSwitch={switchContent} isSignIn={isSignIn} />
    </div>
  );
};

export default FlowManager;
