import React, { useState, useRef } from 'react';
import './FlowManager.scss';
import SocialMediaButton from '../../SocialMediaButton';
import img from '../../../assets/img/logo512.png';
import FooterContent from './FooterContent';
import CustomForm from './CustomForm';

const FlowManager = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const customFormRef = useRef(null);

  const switchContent = () => {
    setIsSignIn(!isSignIn);
    customFormRef.current.resetForm();
  };

  return (
    <div className="flow-manager d-flex flex-column align-items-center pt-5">
      <div className="flow-title mb-3">
        {isSignIn ? 'Welcome to Invision' : 'Getting Started'}
      </div>
      <CustomForm isSignIn={isSignIn} ref={customFormRef}/>
      <div className="option-divider d-flex align-items-center justify-content-center mt-3 mb-4">
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
