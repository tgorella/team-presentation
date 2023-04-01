import React from "react";
import PropTypes from "prop-types";
const ProgressBar = ({ label, number, color }) => {
  return (
    <div style={{ margin: "5px 0" }}>
      <div className="progress-bar__header">{label}</div>
      <div className="progress_container">
        <div
          className="progress"
          style={{ width: number + "%", backgroundColor: color }}>
          {number} %
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
