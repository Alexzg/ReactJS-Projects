import React from 'react';

import './BuildControl.css';

const buildControl = (props) => (
	<div className='BuildControl'>
		<div className='Label'>{props.label}</div>
		<button 
		className='More' onClick={props.addClick}> + </button>
		<button 
		className='Less' onClick={props.removeClick} disabled={props.disable}> - </button>
	</div>
);

export default buildControl;