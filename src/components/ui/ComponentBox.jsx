import React from 'react';
import PropTypes from 'prop-types';
const ComponentBox = ({children, title}) => {
	return (
		<div className="components-wrapper">
			<h3>{title}</h3>
			{children}</div>
	 );
}

ComponentBox.propTypes = {
	children: PropTypes.object,
	title: PropTypes.string
}
export default ComponentBox;
