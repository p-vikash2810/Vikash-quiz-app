import React from "react";
import "./customButton.css"

const CustomButton = ({ children, ...otherProps }) => {
  return <button className="customButton" onClick={otherProps.handleSubmit}>{children}</button>;
};

export default CustomButton;
