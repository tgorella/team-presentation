import React from "react";
import PropTypes from "prop-types";

const Bage = ({ color, content }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px 15px",
        color: "#fff",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "700",
      }}>
      {content}
    </div>
  );
};

export default Bage;

Bage.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
