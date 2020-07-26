import React from 'react';
import CustomInput from '../../../CustomInput';
import './CustomForm.scss';

const CustomForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} class="custom-form w-100">
      <CustomInput
        type="text"
        label="Full Name"
        value="Italo Nabuco"
        onChange={() => {}}
        className=""
        // invalid
      />
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
        label="Create Password"
        value="Italo Nabuco"
        onChange={() => {}}
        className=""
        invalid
      />
      <div className="d-flex justify-content-end w-100">
        <div className="in-form-link mb-4">Forgot password?</div>
      </div>
      <div className="d-block w-100">
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default CustomForm;
