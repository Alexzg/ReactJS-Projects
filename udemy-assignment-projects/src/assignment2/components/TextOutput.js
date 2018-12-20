import React from 'react';

const TextOutput = (props) => {
	return(
		<div>
			<p><strong>Input's Length:</strong> {props.text}</p>
		</div>
	)
};

export default TextOutput;