import React from "react";
import PropTypes from "prop-types";

const Bage = ({ color, content }) => {
  return (
		<>
    <span
      style={{
        backgroundColor: color,
        padding: "8px 15px",
        color: "#fff",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "700",
      }}>
      {content}
    </span>
		</>
  );
};

export default Bage;

Bage.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
