import React from "react";
import "./customInput.css";

const CustomInput = ({ children, ...otherProps }) => {
  //   console.log(otherProps);
  return (
    <label htmlFor={otherProps.name} className="customInputSec">
      {children}
      <input
        type="number"
        value={otherProps.value}
        onChange={otherProps.handleChange}
        name={otherProps.name}
      />
    </label>
  );
};

export default CustomInput;
