import React from 'react';
import CustomInput from '../../../CustomInput';
import './CustomForm.scss';

const CustomForm = (props) => {
  const { isSignIn } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} class="custom-form w-100">
      {!isSignIn && (
        <CustomInput
          type="text"
          label="Full Name"
          value="Italo Nabuco"
          onChange={() => {}}
          className=""
          // invalid
        />
      )}
      <CustomInput
        type="text"
        label="Users name or Email"
        value="italonabuco@hotmail.com"
        onChange={() => {}}
        className=""
        invalid
      />
      <CustomInput
        type="password"
        label={isSignIn ? 'Password' : 'Create Password'}
        value="Italo Nabuco"
        onChange={() => {}}
        className=""
        invalid
      />
      {isSignIn && (
        <div className="d-flex justify-content-end">
          <div className="in-form-link mb-4">Forgot password?</div>
        </div>
      )}

      <div className="d-flex justify-content-center">
        <input type="submit" value={isSignIn ? ' Sign in' : 'Sign up'} />
      </div>
    </form>
  );
};

export default CustomForm;
