import React from 'react';

import './Button.css';

const button = (props) => (
	<button
		className= {['Button', props.btnClass].join(' ')}
		onClick={props.OnClick}>
			{props.children}
	</button>
);

export default button;