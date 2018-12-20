import React from 'react';

const ValidationComponent = (props) => {
	let message = null;
	props.inputLength < 5 ?
		message = 'Text too short' :
		message = 'Text long enough';
	return(
		<p>{message}</p>
	)
};

export default ValidationComponent;