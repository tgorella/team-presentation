import React from "react";
import PropTypes from "prop-types";

const Bage = ({ color, content }) => {
  return (
		<>
    <div className="bage"
      style={{
        backgroundColor: color,
      }}>
      {content}
    </div>
		</>
  );
};

export default Bage;

Bage.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
