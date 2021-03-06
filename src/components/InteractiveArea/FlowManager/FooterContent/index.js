import React from 'react';
import './FooterContent.scss';

const FooterContent = (props) => {
  const { onSwitch } = props;
  return (
    <div className="footer-content d-flex justify-content-center ">
      <div className="exclusive-sign-up">
        <div>
          By signing up, you agree to <strong>Invision</strong>
        </div>
        <div className="terms-text">
          <span className="footer-link"  onClick={() => alert('Terms of Conditions')}>Terms of Conditions</span> and <span className="footer-link"  onClick={() => alert('Privacy policy')}>Privacy policy</span>
        </div>
        <div className="mt-4">
          Already on <strong>Invision</strong>?{' '}
          <span className="footer-link" onClick={onSwitch}>Log in</span>
        </div>
      </div>
      <div className="exclusive-sign-in">
        <div>
          New <strong>Invision</strong>?{' '}
          <span className="footer-link" onClick={onSwitch}>Create account</span>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
