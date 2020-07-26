import React from 'react';
import './CustomInput.scss';

const CustomInput = (props) => {
  const {
    id,
    type,
    label,
    value,
    style,
    onChange,
    className,
    invalid,
    invalidText
  } = props;
  return (
    <div
      className={`custom-input mb-2 ${className} ${invalid && 'invalid'}`}
      style={style}
    >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
  <div className="invalid-text mt-1">{invalidText || 'This field can not be empty'}</div>
    </div>
  );
};

export default CustomInput;
