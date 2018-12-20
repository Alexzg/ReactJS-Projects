import React from 'react';

const CharComponent = (props) => {
	let style = {
		display: 'inlineBlock', 
		padding: '16px', 
		textAlign: 'center', 
		margin: '16px', 
		border: '1px solid black',
	};
	
	return (
		<div>
			<p style={style}
				onClick = {props.OnClick}>{props.Letter}</p>
		</div>
	)
};

export default CharComponent;