import React from "react";
import PropTypes from "prop-types";
const Button = ({ func, color, label, type }) => {
  return (
    <button onClick={func} style={{ backgroundColor: color, color: "#fff" }} className={type}>
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  func: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["round", "square"]),
};
