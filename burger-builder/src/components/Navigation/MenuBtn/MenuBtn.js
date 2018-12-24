import React from 'react';

import './MenuBtn.css';

const menuBtn = (props) => (
	<button
		className='MenuBtn'
		onClick={props.OnClick}>
			MENU
	</button>
);

export default menuBtn;