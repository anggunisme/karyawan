import React from "react";

const Button = ({ width, height, text, handleClick }) => {
  const buttonStyles = {
    width: width,
    height: height,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyles} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
